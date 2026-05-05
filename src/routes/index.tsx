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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Enrique Macías López — CS Student & AI Builder" },
      {
        name: "description",
        content:
          "Portfolio of Enrique Macías López — final-year CS student at Tec de Monterrey, Software Developer Intern at Softtek, building AI-powered tools and agentic workflows.",
      },
      { property: "og:title", content: "Enrique Macías López — CS Student & AI Builder" },
      {
        property: "og:description",
        content:
          "Building the future with AI, one workflow at a time. Projects, experience, and contact.",
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
