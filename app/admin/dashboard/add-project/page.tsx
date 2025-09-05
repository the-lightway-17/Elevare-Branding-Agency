"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Plus, X } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AddProject() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const [projectData, setProjectData] = useState({
    title: "",
    category: "",
    client: "",
    year: new Date().getFullYear().toString(),
    duration: "",
    description: "",
    detailedDescription: "",
    image: "",
    services: [] as string[],
    results: [] as string[],
  })

  const [newService, setNewService] = useState("")
  const [newResult, setNewResult] = useState("")

  useEffect(() => {
    const authStatus = localStorage.getItem("elevare_admin_auth")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/admin")
    }
  }, [router])

  const categories = [
    "Brand Identity",
    "Packaging Design",
    "Digital Experience",
    "Sustainability Brand",
    "Luxury Retail",
    "Product Design",
    "Restaurant Brand",
    "Agency Rebrand",
  ]

  const addService = () => {
    if (newService.trim() && !projectData.services.includes(newService.trim())) {
      setProjectData({
        ...projectData,
        services: [...projectData.services, newService.trim()],
      })
      setNewService("")
    }
  }

  const removeService = (service: string) => {
    setProjectData({
      ...projectData,
      services: projectData.services.filter((s) => s !== service),
    })
  }

  const addResult = () => {
    if (newResult.trim() && !projectData.results.includes(newResult.trim())) {
      setProjectData({
        ...projectData,
        results: [...projectData.results, newResult.trim()],
      })
      setNewResult("")
    }
  }

  const removeResult = (result: string) => {
    setProjectData({
      ...projectData,
      results: projectData.results.filter((r) => r !== result),
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In a real app, this would save to a database
    console.log("Project data:", projectData)

    setSuccess(true)
    setIsLoading(false)

    // Reset form after success
    setTimeout(() => {
      router.push("/admin/dashboard")
    }, 2000)
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gradient-brand mx-auto mb-4"></div>
          <p className="font-open-sans text-muted-foreground">Verifying access...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20 px-4">
        <div className="max-w-4xl mx-auto py-8">
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="outline"
              onClick={() => router.push("/admin/dashboard")}
              className="font-open-sans bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="font-montserrat font-bold text-3xl">
                Add New <span className="text-gradient-brand">Project</span>
              </h1>
              <p className="font-open-sans text-muted-foreground">Create a new portfolio entry</p>
            </div>
          </div>

          {success && (
            <Alert className="mb-6 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
              <AlertDescription className="font-open-sans text-green-800 dark:text-green-200">
                Project added successfully! Redirecting to dashboard...
              </AlertDescription>
            </Alert>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat font-semibold">Project Details</CardTitle>
              <CardDescription className="font-open-sans">Fill in the information for your new project</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="title" className="font-open-sans font-medium">
                      Project Title
                    </Label>
                    <Input
                      id="title"
                      value={projectData.title}
                      onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
                      placeholder="e.g., TechFlow Startup"
                      className="font-open-sans"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="font-open-sans font-medium">
                      Category
                    </Label>
                    <Select
                      value={projectData.category}
                      onValueChange={(value) => setProjectData({ ...projectData, category: value })}
                    >
                      <SelectTrigger className="font-open-sans">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category} className="font-open-sans">
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="client" className="font-open-sans font-medium">
                      Client Name
                    </Label>
                    <Input
                      id="client"
                      value={projectData.client}
                      onChange={(e) => setProjectData({ ...projectData, client: e.target.value })}
                      placeholder="e.g., TechFlow Inc."
                      className="font-open-sans"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year" className="font-open-sans font-medium">
                      Year
                    </Label>
                    <Input
                      id="year"
                      value={projectData.year}
                      onChange={(e) => setProjectData({ ...projectData, year: e.target.value })}
                      placeholder="2024"
                      className="font-open-sans"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="duration" className="font-open-sans font-medium">
                      Project Duration
                    </Label>
                    <Input
                      id="duration"
                      value={projectData.duration}
                      onChange={(e) => setProjectData({ ...projectData, duration: e.target.value })}
                      placeholder="e.g., 3 months"
                      className="font-open-sans"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image" className="font-open-sans font-medium">
                      Project Image URL
                    </Label>
                    <Input
                      id="image"
                      value={projectData.image}
                      onChange={(e) => setProjectData({ ...projectData, image: e.target.value })}
                      placeholder="/project-image.jpg"
                      className="font-open-sans"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="font-open-sans font-medium">
                    Short Description
                  </Label>
                  <Textarea
                    id="description"
                    value={projectData.description}
                    onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
                    placeholder="Brief description for the project card..."
                    className="font-open-sans"
                    rows={3}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="detailedDescription" className="font-open-sans font-medium">
                    Detailed Description
                  </Label>
                  <Textarea
                    id="detailedDescription"
                    value={projectData.detailedDescription}
                    onChange={(e) => setProjectData({ ...projectData, detailedDescription: e.target.value })}
                    placeholder="Comprehensive project description with context and approach..."
                    className="font-open-sans"
                    rows={5}
                    required
                  />
                </div>

                <div className="space-y-4">
                  <Label className="font-open-sans font-medium">Services Provided</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newService}
                      onChange={(e) => setNewService(e.target.value)}
                      placeholder="e.g., Brand Strategy"
                      className="font-open-sans"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addService())}
                    />
                    <Button type="button" onClick={addService} variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {projectData.services.map((service) => (
                      <Badge key={service} variant="secondary" className="font-open-sans">
                        {service}
                        <button
                          type="button"
                          onClick={() => removeService(service)}
                          className="ml-2 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="font-open-sans font-medium">Key Results</Label>
                  <div className="flex gap-2">
                    <Input
                      value={newResult}
                      onChange={(e) => setNewResult(e.target.value)}
                      placeholder="e.g., 40% increase in brand recognition"
                      className="font-open-sans"
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addResult())}
                    />
                    <Button type="button" onClick={addResult} variant="outline">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {projectData.results.map((result, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded">
                        <div className="w-1 h-1 bg-gradient-brand rounded-full"></div>
                        <span className="font-open-sans text-sm flex-1">{result}</span>
                        <button
                          type="button"
                          onClick={() => removeResult(result)}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button
                    type="submit"
                    className="gradient-button-primary font-open-sans font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? "Adding Project..." : "Add Project"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push("/admin/dashboard")}
                    className="font-open-sans bg-transparent"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
