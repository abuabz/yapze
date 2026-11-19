import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesExplorer } from "@/components/services-explorer"
import { ProcessSection } from "@/components/process-section"
import { ItHelpCta } from "@/components/it-help-cta"

export const metadata = {
  title: "Services | YaPaze Technologies",
  description:
    "Web & app development, software and business solutions, cybersecurity, cloud and managed IT, SEO and digital marketing, and future skills training from YaPaze Technologies.",
}

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <Navbar />

      <div className="relative z-10">
        <ServicesHero />
        <ServicesExplorer />

        {/* How we work / Process with Unique Shapes & Animations */}
        <ProcessSection />

        {/* Need IT Help Right Now CTA Banner */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <ItHelpCta />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
