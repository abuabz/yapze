import Link from "next/link"
import { ArrowRight, Code2, PenTool, Rocket, Search } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesExplorer } from "@/components/services-explorer"

export const metadata = {
  title: "Services | YaPaze Technologies",
  description:
    "Web & app development, software and business solutions, cybersecurity, cloud and managed IT, SEO and digital marketing, and future skills training from YaPaze Technologies.",
}

const process = [
  { icon: Search, title: "Discover", desc: "We learn your goals, users and constraints before writing a single line." },
  { icon: PenTool, title: "Design", desc: "Clear architecture and interfaces you can review and approve early." },
  { icon: Code2, title: "Build", desc: "Iterative delivery with regular demos, testing and security built in." },
  { icon: Rocket, title: "Launch & Support", desc: "Smooth go-live, monitoring and ongoing improvement." },
]

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

        {/* How we work */}
        <section className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">How we work</p>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                One process. <span className="gradient-text">Every service.</span>
              </h2>
            </div>
            <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => {
                const Icon = step.icon
                return (
                  <li
                    key={step.title}
                    className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                  >
                    <span className="absolute right-5 top-4 font-mono text-4xl font-extrabold text-white/[0.06]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{step.desc}</p>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

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
