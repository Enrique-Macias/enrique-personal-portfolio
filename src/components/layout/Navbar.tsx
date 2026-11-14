import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { pathname } = useLocation();
  const { language, setLanguage, dictionary } = useLanguage();
  const links = dictionary.navbar.links;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    let observer: IntersectionObserver | null = null;
    const visibility = new Map<string, number>();

    const build = () => {
      observer?.disconnect();
      visibility.clear();
      // On mobile, shrink the top margin so shorter sections still register.
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const topMargin = isMobile ? `-${72 + 8}px` : "-35%";
      const bottomMargin = isMobile ? "-55%" : "-50%";
      observer = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            visibility.set(e.target.id, e.intersectionRatio);
          }
          let bestId = "";
          let bestRatio = 0;
          visibility.forEach((ratio, id) => {
            if (ratio > bestRatio) {
              bestRatio = ratio;
              bestId = id;
            }
          });
          if (bestRatio > 0) setActive(bestId);
        },
        {
          rootMargin: `${topMargin} 0px ${bottomMargin} 0px`,
          threshold: [0, 0.05, 0.15, 0.3, 0.5, 0.75, 1],
        },
      );
      sections.forEach((s) => observer!.observe(s));
    };

    build();

    let resizeTimer: number | undefined;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(build, 150);
    };
    window.addEventListener("resize", onResize);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", onResize);
      window.clearTimeout(resizeTimer);
    };
  }, [links, pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open || pathname !== "/" ? "border-b border-border bg-background/95 backdrop-blur-xl" : "border-b border-transparent"}`}
    >
      <a
        href="#main-content"
        className="sr-only rounded-lg bg-card p-3 text-sm text-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-20"
      >
        {dictionary.accessibility.skip}
      </a>
      <nav
        aria-label={dictionary.accessibility.navigation}
        className="relative mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-3 px-6"
      >
        <Link
          to="/"
          search={{ lang: language }}
          hash="top"
          onClick={() => setOpen(false)}
          className="inline-flex min-h-11 items-center font-mono text-sm tracking-tight text-foreground"
        >
          <span className="text-gradient">eml</span>
          <span className="text-muted-foreground">.dev</span>
        </Link>
        <ul className="hidden items-center gap-6 md:flex">
          {dictionary.navbar.links.map((link) => (
            <li key={link.id}>
              <Link
                to="/"
                search={{ lang: language }}
                hash={link.id}
                aria-current={pathname === "/" && active === link.id ? "location" : undefined}
                className={`relative inline-flex min-h-11 items-center text-sm transition-colors ${pathname === "/" && active === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link.label}
                <span
                  aria-hidden
                  className={`absolute bottom-1 left-0 h-0.5 w-full rounded-full bg-gradient-brand transition-opacity ${pathname === "/" && active === link.id ? "opacity-100" : "opacity-0"}`}
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={dictionary.navbar.switchLabel}
            className="inline-flex items-center rounded-full border border-border bg-background/40 p-0.5 font-mono text-xs"
          >
            {(["en", "es"] as const).map((option) => (
              <button
                key={option}
                type="button"
                lang={option}
                aria-label={option === "en" ? "English" : "Español"}
                aria-pressed={language === option}
                onClick={() => setLanguage(option)}
                className={`min-h-10 min-w-10 rounded-full px-2.5 uppercase transition-colors ${language === option ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
              >
                {option}
              </button>
            ))}
          </div>
          <Link
            to="/"
            search={{ lang: language }}
            hash="contact"
            className="hidden min-h-11 items-center rounded-full border border-border px-4 text-sm hover:border-[var(--teal)] hover:text-[var(--teal)] lg:inline-flex"
          >
            {dictionary.navbar.cta}
          </Link>
          <button
            type="button"
            aria-label={dictionary.accessibility.menu}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            onKeyDown={(event) => {
              if (event.key === "Escape") setOpen(false);
            }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? (
              <X aria-hidden className="h-5 w-5" />
            ) : (
              <Menu aria-hidden className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label={dictionary.accessibility.navigation}
          className="border-t border-border bg-background px-6 py-3 md:hidden"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              document
                .querySelector<HTMLButtonElement>('[aria-controls="mobile-navigation"]')
                ?.focus();
            }
          }}
        >
          <ul>
            {dictionary.navbar.links.map((link) => (
              <li key={link.id}>
                <Link
                  to="/"
                  search={{ lang: language }}
                  hash={link.id}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg py-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
