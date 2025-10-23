import { AboutSection } from "@/components/about-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About YaPaze | IT Solutions & Digital Transformation",
  description:
    "Learn about YaPaze Technologies - our mission, vision, and core values in delivering innovative IT solutions.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
      </div>
      <Footer />
    </main>
  )
}
