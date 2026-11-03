"use client"

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  PenTool,
  Rocket,
  Search,
  Lightbulb,
  Target,
  Shield,
  Zap,
  RefreshCw,
  HeartHandshake,
  Users,
} from "lucide-react"
import { services } from "@/lib/services-data"

const process = [
  { icon: Search, title: "Discover", desc: "We learn your goals, users and constraints before writing a single line." },
  { icon: PenTool, title: "Design", desc: "Clear architecture and interfaces you can review and approve early." },
  { icon: Code2, title: "Build", desc: "Iterative delivery with regular demos, testing and security built in." },
  { icon: Rocket, title: "Launch & Support", desc: "Smooth go-live, monitoring and ongoing improvement." },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We constantly explore new ideas and emerging technologies to deliver future-ready digital solutions.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    desc: "We place our clients at the heart of every decision, delivering value-driven technology that meets real business needs.",
  },
  {
    icon: Shield,
    title: "Integrity",
    desc: "We operate with transparency, honesty, and ethical responsibility in every interaction and project.",
  },
  {
    icon: Zap,
    title: "Quality Excellence",
    desc: "We maintain high standards and deliver reliable, secure, and scalable IT solutions with precision.",
  },
  {
    icon: Shield,
    title: "Security First",
    desc: "We prioritize data protection and cybersecurity to ensure safe and trusted digital environments.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    desc: "We learn, evolve, and invest in our skills and processes to stay ahead in a fast-changing tech world.",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    desc: "We believe in teamwork—working closely with clients and partners to unlock innovation and achieve shared goals.",
  },
  {
    icon: Users,
    title: "Empowerment",
    desc: "We empower businesses with the tools and knowledge to leverage technology for growth and success.",
  },
]

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const isClickingRef = useRef(false)

  const active = services[activeIndex]
  const next = services[(activeIndex + 1) % services.length]
  const ActiveIcon = active.icon

  // Track user scroll progress through the pinned track
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (isClickingRef.current) return
      // Map progress (0 to 1) into service index (0 to 5)
      const index = Math.min(
        services.length - 1,
        Math.max(0, Math.floor(latest * services.length))
      )
      setActiveIndex(index)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // Allow clicking tabs or progress pills to smoothly scroll to that service's scroll position
  const handleSelect = (index: number) => {
    isClickingRef.current = true
    setActiveIndex(index)

    if (trackRef.current) {
      const rect = trackRef.current.getBoundingClientRect()
      const scrollTop = window.scrollY + rect.top
      const maxScroll = rect.height - window.innerHeight
      if (maxScroll > 0) {
        const targetProgress = (index + 0.5) / services.length
        const targetScrollY = scrollTop + targetProgress * maxScroll

        window.scrollTo({
          top: targetScrollY,
          behavior: "smooth",
        })
      }
    }

    setTimeout(() => {
      isClickingRef.current = false
    }, 700)
  }

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % services.length
    handleSelect(nextIdx)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const steps: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    const step = steps[event.key]
    if (!step) return
    event.preventDefault()
    const targetIdx = (index + step + services.length) % services.length
    handleSelect(targetIdx)
  }

  return (
    <section id="services" className="relative scroll-mt-20 bg-background">
      {/* Ambient background glow & tech grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      {/* Pinned Scroll Track: Cycles through services 01 to 06, then unpins to next section */}
      <div ref={trackRef} className="relative lg:h-[480vh]">
        <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 z-10 pt-16 sm:pt-20 pb-4">
          <div className="mx-auto w-full max-w-7xl xl:max-w-[1360px] flex flex-col justify-center">
            {/* Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-5 pb-3 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">Our Capabilities</span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                  What <span className="gradient-text">We Do</span>
                </h2>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="font-mono text-xs font-semibold text-slate-400 hidden sm:inline">
                  Service <span className="text-white font-bold" style={{ color: active.accent }}>{active.number}</span> / 06
                </span>
              </div>

              {/* Interactive Scroll Segment Indicators */}
              <div className="flex items-center gap-2">
                {services.map((service, index) => {
                  const isActive = index === activeIndex
                  const isPassed = index < activeIndex
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleSelect(index)}
                      title={`Service ${service.number}: ${service.title}`}
                      aria-label={`Jump to ${service.title}`}
                      className="group py-1 focus:outline-none"
                    >
                      <span
                        className={`block h-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "w-8 shadow-sm"
                            : isPassed
                            ? "w-3 bg-white/40 group-hover:bg-white/60"
                            : "w-3 bg-white/15 group-hover:bg-white/30"
                        }`}
                        style={{
                          backgroundColor: isActive ? service.accent : undefined,
                          boxShadow: isActive ? `0 0 12px ${service.accent}99` : undefined,
                        }}
                      />
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Main Interactive Explorer */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center min-h-0">
              {/* Left Column: Generous Width Tabs (No Truncation) */}
              <div className="w-full lg:w-64 xl:w-72 shrink-0">
                <div
                  role="tablist"
                  aria-label="YaPaze services"
                  className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-2 snap-x lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [scrollbar-width:none]"
                >
                  {services.map((service, index) => {
                    const isActive = index === activeIndex
                    const Icon = service.icon
                    return (
                      <button
                        key={service.id}
                        role="tab"
                        id={`home-tab-${service.id}`}
                        aria-selected={isActive}
                        tabIndex={isActive ? 0 : -1}
                        onClick={() => handleSelect(index)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        className={`group relative flex items-center gap-3.5 px-4 py-3 sm:py-3.5 rounded-xl text-left transition-all duration-200 outline-none w-auto shrink-0 snap-start lg:w-full ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="home-service-tab-bg"
                            className="absolute inset-0 rounded-xl border border-white/15 bg-white/[0.08]"
                            style={{
                              boxShadow: `0 6px 25px ${service.accent}25`,
                              borderColor: `${service.accent}60`,
                            }}
                            transition={{ type: "spring", stiffness: 450, damping: 35 }}
                          />
                        )}

                        <span
                          className="relative z-10 font-mono text-xs font-bold shrink-0 transition-colors"
                          style={{ color: isActive ? service.accent : "#64748b" }}
                        >
                          {service.number}
                        </span>

                        <span className="relative z-10 text-sm font-medium flex-1">
                          {service.title}
                        </span>

                        <Icon
                          className="relative z-10 h-4 w-4 shrink-0 transition-colors"
                          style={{ color: isActive ? service.accent : "#64748b" }}
                        />
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Right Column: Generous, Beautifully Sized Service Panel */}
              <div className="flex-1 min-w-0 w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    role="tabpanel"
                    id={`home-panel-${active.id}`}
                    aria-labelledby={`home-tab-${active.id}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8"
                    style={{ boxShadow: `0 25px 80px -15px ${active.accent}25` } as CSSProperties}
                  >
                    {/* Glowing Accent Orb */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
                      style={{ background: active.accent }}
                    />
                    {/* Watermark Number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-6 -top-2 select-none text-[6rem] sm:text-[9rem] font-extrabold leading-none text-white/[0.03]"
                    >
                      {active.number}
                    </span>

                    <div className="relative space-y-5 sm:space-y-6">
                      {/* Top Header */}
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-3.5">
                          <div
                            className={`relative grid h-12 w-12 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${active.gradient} shadow-lg`}
                          >
                            <ActiveIcon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
                              {active.title}
                            </h3>
                            <p
                              className={`bg-gradient-to-r ${active.gradient} bg-clip-text text-sm sm:text-base font-semibold text-transparent mt-0.5`}
                            >
                              {active.tagline}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md hidden md:block">
                          {active.description}
                        </p>
                      </div>

                      {/* What We Deliver: 2-Column Grid (No Truncation, Generous Space) */}
                      <div className="space-y-2.5">
                        <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                          What we deliver
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                          {active.features.map((feature) => (
                            <div
                              key={feature.title}
                              className="rounded-xl border border-white/10 bg-black/40 p-3.5 sm:p-4 transition-all duration-300 hover:border-white/25 hover:bg-black/60"
                            >
                              <div className="flex items-center gap-2 mb-1.5">
                                <div
                                  className={`grid h-5 w-5 shrink-0 place-items-center rounded bg-gradient-to-br ${active.gradient}`}
                                >
                                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                                </div>
                                <h5 className="text-sm font-semibold text-white">{feature.title}</h5>
                              </div>
                              <p className="text-xs leading-relaxed text-slate-400">{feature.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Outcomes & Tech Stack */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 pt-1">
                        <div className="space-y-2">
                          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                            What you get
                          </h4>
                          <ul className="space-y-2">
                            {active.outcomes.map((outcome) => (
                              <li key={outcome} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" style={{ color: active.accent }} />
                                <span className="leading-snug">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                            Tools & expertise
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {active.tech.map((item) => (
                              <span
                                key={item}
                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300 transition-colors hover:border-white/30 hover:text-white"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 sm:pt-5">
                        <Link
                          href={active.cta.href}
                          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#8066f7] px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#6b51e2] hover:shadow-[0_0_25px_rgba(128,102,247,0.5)]"
                        >
                          <span>{active.cta.label}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <button
                          type="button"
                          onClick={handleNext}
                          className="group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
                        >
                          <span>Next: {next.title}</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Section: How we work (flows smoothly once the 6th service is finished scrolling) */}
      <div className="relative z-10 px-4 pb-24 sm:px-6 lg:px-8 pt-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">How we work</p>
            <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
              One process. <span className="gradient-text">Every service.</span>
            </h3>
          </motion.div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <span className="absolute right-5 top-4 font-mono text-4xl font-extrabold text-white/[0.06]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-2 text-lg font-bold text-white">{step.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-400">{step.desc}</p>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </div>

      {/* Next Section: Core Values */}
      <div className="relative z-10 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">Our Foundation</p>
            <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
              Core Values of <span className="gradient-text">YaPaze Technologies</span>
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-2 text-base font-bold text-white">{value.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-400">{value.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}