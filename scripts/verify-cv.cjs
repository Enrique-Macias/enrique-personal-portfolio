// Render the actual Hero with Vite's file inventory replaced by controlled fixtures.
const fs = require("node:fs");
const vm = require("node:vm");
const assert = require("node:assert/strict");
const { createRequire } = require("node:module");
const req = createRequire(process.cwd() + "/package.json");
const ts = req("typescript");
const React = req("react");
const { renderToStaticMarkup } = req("react-dom/server");
const compile = (path, transformers) =>
  ts.transpileModule(fs.readFileSync(path, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      target: ts.ScriptTarget.ES2022,
    },
    transformers,
  }).outputText;
const dictionaries = {};
for (const lang of ["en", "es"]) {
  const exports = {};
  vm.runInNewContext(compile(`src/i18n/dictionaries/${lang}.ts`), { exports });
  dictionaries[lang] = exports[lang];
}
const source = "src/components/sections/Hero.tsx";
let replacements = 0;
const code = compile(source, {
  before: [
    (context) => (file) => {
      function visit(node) {
        if (ts.isCallExpression(node) && node.expression.getText(file) === "import.meta.glob") {
          replacements++;
          return ts.factory.createIdentifier("__cvFiles");
        }
        return ts.visitEachChild(node, visit, context);
      }
      return ts.visitNode(file, visit);
    },
  ],
});
assert.equal(replacements, 1);
const files = Object.fromEntries(
  fs.readdirSync("public/cv").map((name) => [`/public/cv/${name}`, true]),
);
for (const language of ["en", "es"]) {
  const name = `Enrique_Macias_CV_${language.toUpperCase()}.pdf`;
  for (const present of [true, false]) {
    const inventory = { ...files };
    if (!present) delete inventory[`/public/cv/${name}`];
    const exports = {};
    vm.runInNewContext(code, {
      exports,
      __cvFiles: inventory,
      require(module) {
        if (module === "react/jsx-runtime") return req(module);
        if (module === "framer-motion")
          return {
            useReducedMotion: () => true,
            motion: new Proxy(
              {},
              {
                get:
                  (_, tag) =>
                  ({ initial, animate, transition, ...props }) =>
                    React.createElement(tag, props),
              },
            ),
          };
        if (module === "@/hooks/use-reduced-motion") return { useReducedMotion: () => true };
        if (module === "lucide-react") return new Proxy({}, { get: () => () => null });
        if (module === "@/data/profile")
          return {
            profile: {
              firstName: "Enrique",
              lastName: "Macías López",
              github: "https://github.com/Enrique-Macias",
              linkedin: "https://www.linkedin.com/in/enrique-macias-lopez/",
              email: "enriquemaciaslpz@gmail.com",
            },
          };
        if (module === "@/i18n")
          return { useLanguage: () => ({ language, dictionary: dictionaries[language] }) };
        throw new Error(`Unexpected import: ${module}`);
      },
    });
    const html = renderToStaticMarkup(React.createElement(exports.Hero));
    if (present) {
      assert.ok(html.includes(`href="/cv/${name}"`));
      assert.ok(html.includes(`download="${name}"`));
    } else assert.ok(!html.includes("download="));
    console.log(
      `PASS CV ${language}: ${present ? "correct URL and download filename" : "button hidden when selected file is absent"}`,
    );
  }
}
