import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  loaderDeps: ({ search }) => ({ language: search.lang ?? "en" }),
  loader: ({ deps }) => deps,
  head: ({ loaderData }) => pageHead(loaderData?.language ?? "en"),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SelectedWork />
        <Experience />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
