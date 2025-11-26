"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, TrendingUp, Users } from "lucide-react"

export function ProjectHighlight() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Featured <span className="text-gradient-brand">Project</span>
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Dive deep into our latest success story and see how strategic branding transformed a business.
          </p>
        </div>

        <Card className="overflow-hidden border-0 shadow-2xl">
          <CardContent className="p-0">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src="/premium-tech-startup-rebranding-case-study-with-be.jpg"
                  alt="TechFlow Startup Rebrand"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-brand opacity-10"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4 font-open-sans">
                  Case Study
                </Badge>

                <h3 className="font-montserrat font-bold text-3xl lg:text-4xl mb-6">TechFlow Startup Transformation</h3>

                <p className="font-open-sans text-lg text-muted-foreground mb-8 leading-relaxed">
                  We elevated TechFlow's identity with a bold, modern logo, cohesive color palette, and comprehensive
                  brand guidelines. The rebrand positioned them as industry leaders and increased their market
                  credibility significantly.
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-full mb-3 mx-auto">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-montserrat font-bold text-2xl text-gradient-brand">150%</div>
                    <div className="font-open-sans text-sm text-muted-foreground">Growth</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-full mb-3 mx-auto">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-montserrat font-bold text-2xl text-gradient-brand">50K+</div>
                    <div className="font-open-sans text-sm text-muted-foreground">New Users</div>
                  </div>

                  <div className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-full mb-3 mx-auto">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div className="font-montserrat font-bold text-2xl text-gradient-brand">3</div>
                    <div className="font-open-sans text-sm text-muted-foreground">Awards</div>
                  </div>
                </div>

                <Button
                  className="bg-gradient-brand hover:opacity-90 text-white font-open-sans font-semibold rounded-full w-fit"
                  size="lg"
                >
                  We've Got you covered!
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
