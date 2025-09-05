import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { ProjectHighlight } from "@/components/project-highlight"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PortfolioGrid />
      <ProjectHighlight />
      <ContactSection />
      <Footer />
    </main>
  )
}
