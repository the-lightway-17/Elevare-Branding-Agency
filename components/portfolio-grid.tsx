"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, TrendingUp, Users } from "lucide-react"
import { useState, useEffect } from "react"

interface Project {
  id: string
  title: string
  client: string
  description: string
  image_url: string
  duration: string
  services: string[]
  results: Record<string, string>
  created_at: string
}

export function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects")
        if (response.ok) {
          const data = await response.json()
          setProjects(data)
        } else {
          console.error("Failed to fetch projects")
        }
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
              Completed <span className="text-gradient-brand">Projects</span>
            </h2>
            <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Loading our latest projects...
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-muted"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-muted rounded w-1/3"></div>
                    <div className="h-6 bg-muted rounded w-2/3"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Completed <span className="text-gradient-brand">Projects</span>
          </h2>
          <p className="font-open-sans text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover how we've helped brands across industries create meaningful connections with their audiences
            through strategic design and innovative solutions.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-8 left-8 w-12 h-3 bg-black rounded opacity-20"></div>
          <div className="absolute -top-4 left-16 w-6 h-6 logo-accent-yellow rounded-full opacity-30"></div>
          <div className="absolute -bottom-8 right-8 w-20 h-4 logo-accent-gradient rounded opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image_url || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink className="h-8 w-8 mx-auto mb-3" />
                      <p className="font-open-sans text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="font-open-sans text-xs">
                      {project.services[0] || "Brand Identity"}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-open-sans">
                      {new Date(project.created_at).getFullYear()}
                    </span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="font-open-sans text-sm text-muted-foreground mb-4">{project.client}</p>

                  {selectedProject === project.id && (
                    <div className="mt-4 pt-4 border-t border-border animate-in slide-in-from-top-2 duration-300">
                      <p className="font-open-sans text-sm text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="font-open-sans text-muted-foreground">Duration: {project.duration}</span>
                        </div>

                        <div>
                          <h4 className="font-montserrat font-semibold text-sm mb-2 flex items-center gap-2">
                            <TrendingUp className="h-4 w-4" />
                            Key Results
                          </h4>
                          <ul className="space-y-1">
                            {Object.entries(project.results).map(([key, value], index) => (
                              <li
                                key={index}
                                className="font-open-sans text-xs text-muted-foreground flex items-center gap-2"
                              >
                                <div className="w-1 h-1 bg-gradient-brand rounded-full"></div>
                                {value}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-montserrat font-semibold text-sm mb-2 flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            Services Provided
                          </h4>
                          <div className="flex flex-wrap gap-1">
                            {project.services.map((service, index) => (
                              <Badge key={index} variant="outline" className="text-xs font-open-sans">
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
