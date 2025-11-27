"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Let's Create Something <span className="text-gradient-brand">Amazing</span>
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to transform your brand? Get in touch and let's discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-4 right-12 w-8 h-2 bg-black rounded opacity-15"></div>
          <div className="absolute top-4 right-8 w-4 h-4 logo-accent-yellow rounded-full opacity-25"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="font-montserrat font-bold text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="font-open-sans font-semibold">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="rounded-lg border-2 focus:border-gradient-brand transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="font-open-sans font-semibold">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="rounded-lg border-2 focus:border-gradient-brand transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="font-open-sans font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="rounded-lg border-2 focus:border-gradient-brand transition-colors"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-open-sans font-semibold">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="rounded-lg border-2 focus:border-gradient-brand transition-colors resize-none"
                />
              </div>

              <Button
                className="w-full bg-gradient-brand hover:opacity-90 text-white font-open-sans font-semibold py-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-montserrat font-bold text-2xl mb-6">Get in touch</h3>
              <p className="font-open-sans text-muted-foreground leading-relaxed mb-8">
                We're here to help bring your brand vision to life. Whether you're a startup looking to establish your
                identity or an established company ready for a refresh, we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-open-sans font-semibold">Email</div>
                  <div className="font-open-sans text-muted-foreground">hello@elevare.com</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-open-sans font-semibold">Phone/WhatsApp</div>
                  <div className="font-open-sans text-muted-foreground">+234 (9019222705), +234(9024137871)</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-open-sans font-semibold">Office</div>
                  <div className="font-open-sans text-muted-foreground">
                    80, Thimiggasse, Neu-Gersthof,
                    <br />
                    KG Gersthof, Vienna 1180
                  </div>
                </div>
              </div>
            </div>

            {/* Simple Map Placeholder */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="font-open-sans text-muted-foreground">Interactive Map</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
