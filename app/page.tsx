import { Navbar } from "@/components/navbar"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AILandingHero } from "@/components/ai-landing-hero"
import { V2Hero } from "@/components/v2-hero"
import { AnimatedCanvasBg } from "@/components/animated-canvas-bg"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative overflow-x-clip select-none">
      {/* High-tech Canvas node particle network background with yapazelandingimg.png */}
      <AnimatedCanvasBg />

      <Navbar />
      <V2Hero />
      {/* <AILandingHero /> */}
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
