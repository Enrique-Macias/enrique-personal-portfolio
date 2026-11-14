// Offline regression checks. The provider and request are simulated; no email is sent.
const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const { createRequire } = require("node:module");
const requireProject = createRequire(process.cwd() + "/package.json");
const ts = requireProject("typescript");
const zod = requireProject("zod");
const compile = (path) =>
  ts.transpileModule(fs.readFileSync(path, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
const code = compile("src/server/contact.functions.ts");
const requestFor = (headers = {}) =>
  new Request("https://enriquemacias.dev/_serverFn/contact", {
    method: "POST",
    headers: {
      origin: "https://enriquemacias.dev",
      "cf-connecting-ip": "198.51.100.1",
      ...headers,
    },
  });
function contact(env, fetch, initialRequest = requestFor()) {
  const exports = {};
  let request = initialRequest;
  let now = 0;
  class Clock extends Date {
    static now() {
      return now;
    }
  }
  vm.runInNewContext(code, {
    exports,
    process: { env },
    fetch,
    AbortSignal,
    URL,
    Date: Clock,
    console: { error() {} },
    require(name) {
      if (name === "zod") return zod;
      if (name === "@tanstack/react-start/server") return { getRequest: () => request };
      if (name === "@tanstack/react-start")
        return {
          createServerFn: () => ({
            inputValidator: (validate) => ({
              handler:
                (run) =>
                ({ data }) =>
                  run({ data: validate(data) }),
            }),
          }),
        };
      throw new Error("Unexpected import");
    },
  });
  return {
    send: (data) => exports.sendContactMessage({ data }),
    advance: (ms) => {
      now += ms;
    },
    request: (next) => {
      request = next;
    },
  };
}
const data = {
  name: "<Test>",
  email: "test@example.com",
  message: "A message & <script>test</script>",
};
const env = { RESEND_API_KEY: "fake-test-key", TO_EMAIL: "owner@example.com" };
(async () => {
  let calls = 0;
  const neverFetch = () => {
    calls++;
    throw new Error("No provider request expected");
  };
  assert.equal((await contact({}, neverFetch).send(data)).error, "emailServiceNotConfigured");
  assert.equal(
    (await contact({ RESEND_API_KEY: "fake-test-key" }, neverFetch).send(data)).error,
    "emailRecipientNotConfigured",
  );
  assert.equal(
    (await contact(env, neverFetch).send({ ...data, website: "bot.example" })).error,
    "sendFailed",
  );
  for (const origin of [
    "https://attacker.example",
    "http://enriquemacias.dev",
    "https://enriquemacias.dev:8443",
    "https://www.enriquemacias.dev",
  ]) {
    assert.equal(
      (await contact(env, neverFetch, requestFor({ origin })).send(data)).error,
      "sendFailed",
    );
  }
  const noOrigin = requestFor();
  noOrigin.headers.delete("origin");
  assert.equal((await contact(env, neverFetch, noOrigin).send(data)).error, "sendFailed");
  assert.equal(
    (await contact(env, neverFetch, requestFor({ "sec-fetch-site": "cross-site" })).send(data))
      .error,
    "sendFailed",
  );
  assert.equal(calls, 0);
  const invalid = contact({}, neverFetch);
  for (const values of [
    { email: "invalid" },
    { name: " " },
    { message: "four" },
    { message: "x".repeat(2001) },
    { website: "x".repeat(201) },
  ]) {
    assert.throws(() => invalid.send({ ...data, ...values }));
  }
  let payload;
  const success = contact(env, async (url, request) => {
    calls++;
    assert.equal(url, "https://api.resend.com/emails");
    assert.ok(request.signal instanceof AbortSignal);
    payload = JSON.parse(request.body);
    return { ok: true };
  });
  for (let i = 0; i < 5; i++) assert.equal((await success.send(data)).ok, true);
  assert.equal((await success.send(data)).error, "rateLimited");
  assert.equal(calls, 5);
  assert.match(payload.html, /&lt;Test&gt;/);
  assert.match(payload.html, /&amp; &lt;script&gt;/);
  assert.equal(payload.reply_to, data.email);
  assert.deepEqual(payload.to, ["owner@example.com"]);
  success.advance(10 * 60 * 1000);
  assert.equal((await success.send(data)).ok, true);
  success.request(requestFor({ "cf-connecting-ip": "198.51.100.2" }));
  assert.equal((await success.send(data)).ok, true);
  assert.equal(
    (await contact(env, async () => ({ ok: false, status: 400 })).send(data)).error,
    "sendFailed",
  );
  assert.equal(
    (
      await contact(env, async () => {
        throw new Error("Connection unavailable");
      }).send(data)
    ).error,
    "sendFailed",
  );
  assert.equal(
    (
      await contact(env, async () => {
        throw new DOMException("Timed out", "TimeoutError");
      }).send(data)
    ).error,
    "sendFailed",
  );
  for (const language of ["en", "es"]) {
    const exports = {};
    vm.runInNewContext(compile(`src/i18n/dictionaries/${language}.ts`), { exports });
    for (const message of Object.values(exports[language].contact.errors)) {
      assert.doesNotMatch(message, /RESEND|TO_EMAIL|CONTACT_FROM|API_KEY|198\.51/);
    }
    assert.match(exports[language].contact.errors.emailServiceNotConfigured, /email/);
  }
  console.log(
    "PASS: validation, honeypot, full origin, missing configuration, safe HTML, recipient, rate limit and expiry, provider errors, network and timeout, localized messages. No email sent.",
  );
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
