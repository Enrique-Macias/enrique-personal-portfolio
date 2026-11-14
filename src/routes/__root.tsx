import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
  redirect,
} from "@tanstack/react-router";

import { LanguageProvider, useLanguage } from "@/i18n";
import { getPreferredLanguage } from "@/server/language.functions";
import { pageHead } from "@/lib/metadata";
import type { Language } from "@/i18n/types";
import { MotionConfig } from "framer-motion";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  const { dictionary } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{dictionary.notFound.title}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{dictionary.notFound.description}</p>
        <div className="mt-6">
          <Link
            to="/"
            search={(previous) => ({ lang: previous.lang ?? "en" })}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {dictionary.notFound.action}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  validateSearch: (search: Record<string, unknown>): { lang?: Language } =>
    search.lang === undefined ? {} : { lang: search.lang === "es" ? "es" : "en" },
  beforeLoad: async ({ location, search }) => {
    const paths = ["/", "/projects/passly", "/projects/rlvo", "/projects/orqentic-ai"];
    if (paths.includes(location.pathname) && !new URLSearchParams(location.searchStr).has("lang")) {
      const language = await getPreferredLanguage();
      throw redirect({
        to: location.pathname,
        search: { ...search, lang: language },
        hash: location.hash,
        replace: true,
        statusCode: 302,
      });
    }
  },
  loaderDeps: ({ search }) => ({ language: search.lang ?? "en" }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...pageHead(loaderData?.language ?? "en").meta,
      { name: "author", content: "Enrique Macías López" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const { lang } = Route.useSearch();
  return (
    <html lang={lang ?? "en"}>
      <head>
        <HeadContent />
      </head>
      <body>
        <LanguageProvider>
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </LanguageProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
