import HeroSection from "@/components/hero-section"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <HeroSection />
        <Projects />
        <About />
        <Contact />
      </div>
    </main>
  )
}
