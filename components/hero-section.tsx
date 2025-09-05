"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio")
    portfolioSection?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="absolute inset-0 bg-gradient-brand opacity-5"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-16 h-4 bg-black rounded opacity-10 animate-pulse"></div>
        <div className="absolute top-32 right-32 w-8 h-8 logo-accent-yellow rounded-full opacity-20 animate-pulse delay-500"></div>
        <div className="absolute bottom-40 left-20 w-32 h-8 logo-accent-gradient rounded opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-60 left-40 w-12 h-3 bg-black rounded opacity-15 animate-pulse delay-1500"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="font-montserrat font-black text-5xl md:text-7xl lg:text-8xl mb-6 text-balance">
          We Build Brands That <span className="text-gradient-brand">Speak</span>
        </h1>

        <p className="font-open-sans text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Crafting powerful brand identities that resonate with your audience and drive meaningful connections in the
          digital landscape.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div
            onClick={scrollToPortfolio}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                scrollToPortfolio()
              }
            }}
            style={{
              backgroundColor: "#f5576c",
              color: "#ffffff",
              border: "none",
              padding: "1.5rem 2rem",
              borderRadius: "9999px",
              fontSize: "1.125rem",
              fontWeight: "600",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            }}
            className="font-open-sans transform hover:scale-105"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#e44659"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f5576c"
            }}
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </div>

          <Button
            variant="outline"
            size="lg"
            onClick={scrollToContact}
            className="font-open-sans font-semibold px-8 py-6 text-lg rounded-full border-2 hover:bg-gradient-brand hover:!text-white hover:border-transparent transition-all duration-300 bg-transparent"
          >
            <Play className="mr-2 h-5 w-5" />
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
