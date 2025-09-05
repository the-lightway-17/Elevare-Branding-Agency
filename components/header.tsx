"use client"

import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center gap-4">
            <div className="relative">
              <Image
                src="/images/elevare-logo.png"
                alt="Elevare Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h1 className="font-montserrat font-black text-4xl md:text-5xl tracking-tight">
              <span className="text-foreground">ELEV</span>
              <span className="text-gradient-brand">ARE</span>
            </h1>
          </Link>

          {/* Navigation and Theme Toggle */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#portfolio"
                className="font-open-sans font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="font-open-sans font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <Link
                href="/admin"
                className="font-open-sans font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Admin
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
