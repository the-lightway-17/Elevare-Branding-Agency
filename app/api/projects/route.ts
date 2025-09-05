import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

const mockProjects = [
  {
    id: "1",
    title: "Modern Tech Startup Branding",
    client: "TechFlow Inc.",
    description:
      "Complete brand identity redesign for a cutting-edge fintech startup, including logo design, color palette, typography system, and brand guidelines.",
    image_url: "/modern-tech-startup-branding.jpg",
    duration: "6 weeks",
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Brand Guidelines"],
    results: [
      { metric: "Brand Recognition", value: "85% increase" },
      { metric: "Customer Engagement", value: "120% boost" },
      { metric: "Market Presence", value: "3x expansion" },
    ],
    created_at: "2024-01-15T00:00:00Z",
  },
  {
    id: "2",
    title: "Premium Coffee Packaging Design",
    client: "Artisan Roasters",
    description:
      "Luxury packaging design for premium coffee blends, featuring sustainable materials and elegant typography that reflects the artisanal quality.",
    image_url: "/premium-coffee-packaging-design.jpg",
    duration: "4 weeks",
    services: ["Package Design", "Typography", "Sustainability Consulting"],
    results: [
      { metric: "Sales Growth", value: "45% increase" },
      { metric: "Shelf Appeal", value: "90% improvement" },
      { metric: "Customer Retention", value: "60% boost" },
    ],
    created_at: "2024-02-01T00:00:00Z",
  },
  {
    id: "3",
    title: "Luxury Fashion Brand Identity",
    client: "Elegance Couture",
    description:
      "Sophisticated brand identity for a high-end fashion house, including monogram design, color system, and luxury packaging solutions.",
    image_url: "/luxury-fashion-brand-identity.jpg",
    duration: "8 weeks",
    services: ["Brand Identity", "Monogram Design", "Luxury Packaging", "Digital Assets"],
    results: [
      { metric: "Brand Value", value: "200% increase" },
      { metric: "Social Media Engagement", value: "150% growth" },
      { metric: "Premium Positioning", value: "Top 5 in market" },
    ],
    created_at: "2024-02-15T00:00:00Z",
  },
  {
    id: "4",
    title: "Smart Home IoT Product Design",
    client: "ConnectHome",
    description:
      "User-centered design for smart home devices, focusing on intuitive interfaces and seamless integration with existing home ecosystems.",
    image_url: "/smart-home-iot-product-design.jpg",
    duration: "10 weeks",
    services: ["Product Design", "UI/UX Design", "User Research", "Prototyping"],
    results: [
      { metric: "User Satisfaction", value: "95% rating" },
      { metric: "Setup Time", value: "70% reduction" },
      { metric: "Market Adoption", value: "2x faster" },
    ],
    created_at: "2024-03-01T00:00:00Z",
  },
]

export async function GET() {
  try {
    const supabase = await createClient()

    if (!supabase) {
      console.log("[v0] Supabase not configured, returning mock data")
      return NextResponse.json(mockProjects)
    }

    const { data: projects, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching projects:", error)
      if (error.message.includes("Could not find the table")) {
        console.log("[v0] Database table not found, returning mock data")
        return NextResponse.json(mockProjects)
      }
      return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
    }

    return NextResponse.json(projects)
  } catch (error) {
    console.error("Unexpected error:", error)
    console.log("[v0] Error occurred, returning mock data as fallback")
    return NextResponse.json(mockProjects)
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createClient()

    // Check if user is authenticated
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()
    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()
    const { title, client, description, image_url, duration, services, results } = body

    const { data: project, error } = await supabase
      .from("projects")
      .insert({
        title,
        client,
        description,
        image_url,
        duration,
        services,
        results,
      })
      .select()
      .single()

    if (error) {
      console.error("Error creating project:", error)
      return NextResponse.json({ error: "Failed to create project" }, { status: 500 })
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error("Unexpected error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
