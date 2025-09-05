"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Edit, Trash2, LogOut, BarChart3, FolderOpen, Users, Eye } from "lucide-react"

// Sample project data - in real app this would come from database
const sampleProjects = [
  {
    id: 1,
    title: "TechFlow Startup",
    category: "Brand Identity",
    client: "TechFlow Inc.",
    year: "2024",
    image: "/modern-tech-startup-branding.jpg",
    status: "Published",
  },
  {
    id: 2,
    title: "Artisan Coffee Co.",
    category: "Packaging Design",
    client: "Artisan Coffee Co.",
    year: "2024",
    image: "/premium-coffee-packaging-design.jpg",
    status: "Published",
  },
  {
    id: 3,
    title: "Urban Wellness",
    category: "Digital Experience",
    client: "Urban Wellness Ltd.",
    year: "2023",
    image: "/placeholder-hb03w.png",
    status: "Draft",
  },
]

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [projects, setProjects] = useState(sampleProjects)
  const [deleteProject, setDeleteProject] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    const authStatus = localStorage.getItem("elevare_admin_auth")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/admin")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("elevare_admin_auth")
    router.push("/admin")
  }

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((project) => project.id !== id))
    setDeleteProject(null)
  }

  const handleEditProject = (id: number) => {
    // In real app, this would navigate to edit page with project data
    router.push(`/admin/dashboard/edit-project/${id}`)
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
        <div className="max-w-7xl mx-auto py-8">
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="font-montserrat font-bold text-3xl mb-2">
                Admin <span className="text-gradient-brand">Dashboard</span>
              </h1>
              <p className="font-open-sans text-muted-foreground">Manage your projects and website content</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="font-open-sans font-medium bg-transparent">
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="font-montserrat text-sm font-medium">Total Projects</CardTitle>
                <FolderOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-montserrat font-bold">{projects.length}</div>
                <p className="text-xs text-muted-foreground font-open-sans">
                  {projects.filter((p) => p.status === "Published").length} published
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="font-montserrat text-sm font-medium">Active Clients</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-montserrat font-bold">12</div>
                <p className="text-xs text-muted-foreground font-open-sans">+3 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="font-montserrat text-sm font-medium">Portfolio Views</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-montserrat font-bold">2,847</div>
                <p className="text-xs text-muted-foreground font-open-sans">+12% from last week</p>
              </CardContent>
            </Card>
          </div>

          {/* Project Management Section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-montserrat font-semibold">Project Management</CardTitle>
                  <CardDescription className="font-open-sans">
                    Add, edit, or remove projects from your portfolio
                  </CardDescription>
                </div>
                <Button
                  onClick={() => router.push("/admin/dashboard/add-project")}
                  className="gradient-button-primary font-open-sans font-medium"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Project
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-4 border border-border rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="font-montserrat font-semibold">{project.title}</h3>
                        <p className="font-open-sans text-sm text-muted-foreground">
                          {project.category} • {project.year}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            variant={project.status === "Published" ? "secondary" : "outline"}
                            className="font-open-sans text-xs"
                          >
                            {project.status}
                          </Badge>
                          <span className="font-open-sans text-xs text-muted-foreground">{project.client}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => window.open("/", "_blank")}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleEditProject(project.id)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="font-montserrat">Delete Project</DialogTitle>
                            <DialogDescription className="font-open-sans">
                              Are you sure you want to delete "{project.title}"? This action cannot be undone.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex justify-end gap-2 mt-4">
                            <Button variant="outline" className="font-open-sans bg-transparent">
                              Cancel
                            </Button>
                            <Button
                              variant="destructive"
                              onClick={() => handleDeleteProject(project.id)}
                              className="font-open-sans"
                            >
                              Delete
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}

                {projects.length === 0 && (
                  <div className="text-center py-12">
                    <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-montserrat font-semibold text-lg mb-2">No projects yet</h3>
                    <p className="font-open-sans text-muted-foreground mb-4">
                      Get started by adding your first project to the portfolio.
                    </p>
                    <Button
                      onClick={() => router.push("/admin/dashboard/add-project")}
                      className="gradient-button-primary font-open-sans font-medium"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Your First Project
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
