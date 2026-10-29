import { Navbar } from "@/components/navbar"
import { AnimatedCanvasBg } from "@/components/animated-canvas-bg"
import { V2Hero } from "@/components/v2-hero"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden select-none">
      {/* Static background image (particle animation disabled) */}
      <AnimatedCanvasBg animated={false} />

      <Navbar />
      <V2Hero />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
