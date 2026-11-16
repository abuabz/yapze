import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesExplorer } from "@/components/services-explorer"
import { ProcessSection } from "@/components/process-section"

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

        {/* Closing CTA */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/20 via-white/[0.03] to-cyan-500/10           p-6 text-center backdrop-blur-xl sm:p-14">
                      <h2 className="text-2xl font-extrabold text-white sm:text-4xl">Have a project in mind?</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Tell us what you are building and we will map the fastest, safest route to get it live.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-[#8066f7] px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-[#6b51e2] hover:shadow-[0_0_30px_rgba(128,102,247,0.5)]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
