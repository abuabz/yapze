import { ServicesSection } from "@/components/services-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Services | YaPaze Technologies",
  description:
    "Explore our comprehensive IT services including web development, cloud solutions, cybersecurity, and digital transformation.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ServicesSection />
      </div>
      <Footer />
    </main>
  )
}
