import { Navbar } from "@/components/navbar"
import { AnimatedCanvasBg } from "@/components/animated-canvas-bg"
import { V2Hero } from "@/components/v2-hero"
import { V2Services } from "@/components/v2-services"
import { V2Console } from "@/components/v2-console"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata = {
  title: "YaPaze V2 - Futuristic Next-Gen IT Ecosystem",
  description: "Experience the next generation of software engineering, cloud computing, cybersecurity, and intelligent AI models with YaPaze.",
}

export default function V2LandingPage() {
  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden select-none">
      {/* High-tech Canvas node particle network background */}
      <AnimatedCanvasBg />

      {/* Global Navigation header */}
      <Navbar />

      {/* Core V2 Landing sections */}
      <V2Hero />
      <V2Services />
      <V2Console />
      <WhyChooseUsSection />
      <ContactSection />

      {/* Footer & scroll aids */}
      <Footer />
      <ScrollToTop />
    </main>
  )
}
