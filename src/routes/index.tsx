import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { dictionaries } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: dictionaries.en.meta.homeTitle },
      {
        name: "description",
        content: dictionaries.en.meta.homeDescription,
      },
      { property: "og:title", content: dictionaries.en.meta.homeTitle },
      {
        property: "og:description",
        content: dictionaries.en.meta.homeOgDescription,
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
