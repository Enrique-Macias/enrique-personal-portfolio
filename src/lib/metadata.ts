import { dictionaries } from "@/i18n/dictionaries";
import type { Language, Project } from "@/i18n/types";

// Both configured production hosts serve this site. Consolidate indexing on the
// domain used in the final CVs; this does not change routing or production config.
const SITE_URL = "https://enriquemacias.dev";

export function pageHead(
  language: Language,
  project?: Pick<Project, "title" | "summary" | "slug">,
) {
  const dictionary = dictionaries[language];
  const title = project
    ? `${project.title} | Enrique Macías López | Software Engineer`
    : dictionary.meta.homeTitle;
  const description = project?.summary ?? dictionary.meta.homeDescription;
  const path = project ? `/projects/${project.slug}` : "/";
  const pageURL = (locale: Language) => `${SITE_URL}${path}?lang=${locale}`;
  const image = `${SITE_URL}/og/portfolio-${language}.png`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: pageURL(language) },
      { property: "og:locale", content: language === "es" ? "es_MX" : "en_US" },
      { property: "og:image", content: image },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: dictionary.meta.socialImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "twitter:image:alt", content: dictionary.meta.socialImageAlt },
    ],
    links: [
      { rel: "canonical", href: pageURL(language) },
      { rel: "alternate", hrefLang: "en", href: pageURL("en") },
      { rel: "alternate", hrefLang: "es", href: pageURL("es") },
      { rel: "alternate", hrefLang: "x-default", href: pageURL("en") },
    ],
  };
}
