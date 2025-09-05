import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative mr-4">
                <div className="w-8 h-2 bg-black rounded mr-2"></div>
                <div className="w-4 h-2 bg-black rounded mt-1"></div>
                <div className="absolute -top-1 -right-2 w-3 h-3 logo-accent-yellow rounded-full"></div>
                <div className="absolute top-1 right-2 w-6 h-2 logo-accent-gradient rounded"></div>
              </div>
              <h3 className="font-montserrat font-bold text-2xl">
                Elev<span className="text-gradient-brand">are</span>
              </h3>
            </div>
            <p className="font-open-sans text-secondary-foreground/80 leading-relaxed max-w-md">
              We build brands that speak to your audience and create lasting connections. Let's transform your vision
              into a powerful brand identity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 font-open-sans">
              <li>
                <a
                  href="#home"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Theme Toggle */}
          <div className="flex justify-start md:justify-end">
            <ThemeToggle />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="font-open-sans text-secondary-foreground/60">© 2024 Elevare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
