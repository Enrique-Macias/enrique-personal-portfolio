import { useEffect, useState } from "react";

const NAV_OFFSET = 72; // fixed navbar height (h-16 = 64px) + small gap

const links = [
  { id: "about", label: "About" },
  { id: "featured", label: "Featured" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
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
      const topMargin = isMobile ? `-${NAV_OFFSET + 8}px` : "-35%";
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
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-mono text-sm tracking-tight text-foreground">
          <span className="text-gradient">eml</span>
          <span className="text-muted-foreground">.dev</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={(e) => handleClick(e, l.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-sm transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-gradient-brand transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="#contact"
          onClick={(e) => handleClick(e, "contact")}
          className="hidden rounded-full border border-border px-4 py-1.5 text-sm text-foreground transition-colors hover:border-[var(--teal)]/60 hover:text-[var(--teal)] md:inline-block"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}