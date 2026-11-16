"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Check,
  Lightbulb,
  Target,
  Shield,
  Zap,
  RefreshCw,
  HeartHandshake,
  Users,
  Sparkles,
} from "lucide-react"
import { services } from "@/lib/services-data"
import { ProcessSection } from "@/components/process-section"

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
  return (
    <section id="services" className="relative scroll-mt-20 bg-background pt-16 sm:pt-24 pb-16">
      {/* Ambient background glow & tech grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary/20 blur-[120px] sm:blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-cyan-500/10 blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-fuchsia-500/10 blur-[100px] sm:blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16 sm:mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glassmorphism border border-primary/30 text-xs font-mono font-bold text-primary tracking-widest uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>WHAT WE DELIVER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Next-Gen <span className="gradient-text">Services & Solutions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 font-light text-sm sm:text-base"
          >
            Scroll to reveal each specialized engineering capability.
          </motion.p>
        </div>

        {/* 
          Single Parent Stacking Deck:
          Fast & smooth card arrival without excessive empty scroll travel.
        */}
        <div className="relative mx-auto w-full max-w-5xl pb-[22vh] sm:pb-[28vh]">
          {services.map((service, index) => {
            const Icon = service.icon
            const isLast = index === services.length - 1

            return (
              <div
                key={service.id}
                className="sticky mb-[12vh] sm:mb-[16vh] transition-transform duration-200"
                style={{
                  top: `calc(90px + ${index * 6}px)`,
                  zIndex: index + 10,
                }}
              >
                <div
                  className="relative overflow-hidden rounded-3xl border bg-[#080812] backdrop-blur-2xl p-5 sm:p-6 md:p-8 pt-6 sm:pt-7 md:pt-8 max-h-[80vh] overflow-y-auto [scrollbar-width:none] transition-all duration-300"
                  style={{
                    borderColor: `${service.accent}45`,
                    boxShadow: `0 25px 70px -15px ${service.accent}30, 0 10px 40px rgba(0,0,0,0.95)`,
                  }}
                >
                  {/* Glowing Accent Orb */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
                    style={{ background: service.accent }}
                  />

                  {/* Big Watermark Number */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-6 -top-2 select-none text-[5.5rem] sm:text-[7.5rem] md:text-[9rem] font-extrabold leading-none text-white/[0.03]"
                  >
                    {service.number}
                  </span>

                  <div className="relative space-y-5 sm:space-y-6">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-5 border-b border-white/10">
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        <div
                          className={`relative grid h-12 w-12 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg shadow-black/50`}
                        >
                          <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="font-mono text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border border-white/10"
                              style={{ color: service.accent, backgroundColor: `${service.accent}15` }}
                            >
                              SERVICE {service.number} / 06
                            </span>
                          </div>
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
                            {service.title}
                          </h3>
                          <p
                            className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-xs sm:text-sm font-semibold text-transparent mt-0.5`}
                          >
                            {service.tagline}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-light">
                        {service.description}
                      </p>
                    </div>

                    {/* What We Deliver - 4 Feature Cards */}
                    <div className="space-y-2.5">
                      <h4 className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400">
                        What we deliver
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                        {service.features.map((feature) => (
                          <div
                            key={feature.title}
                            className="rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-3.5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <div
                                className={`grid h-4 w-4 shrink-0 place-items-center rounded bg-gradient-to-br ${service.gradient}`}
                              >
                                <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                              </div>
                              <h5 className="text-xs sm:text-sm font-semibold text-white leading-snug">
                                {feature.title}
                              </h5>
                            </div>
                            <p className="text-[11px] leading-relaxed text-slate-400 font-light">
                              {feature.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcomes & Tech Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-1">
                      <div className="space-y-1.5 sm:space-y-2">
                        <h4 className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400">
                          What you get
                        </h4>
                        <ul className="space-y-1.5">
                          {service.outcomes.map((outcome) => (
                            <li key={outcome} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                              <ArrowRight
                                className="mt-0.5 h-3.5 w-3.5 shrink-0"
                                style={{ color: service.accent }}
                              />
                              <span className="leading-snug">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-1.5 sm:space-y-2">
                        <h4 className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400">
                          Tools & expertise
                        </h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {service.tech.map((item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/10 bg-white/5 px-2.5 sm:px-3 py-0.5 font-mono text-[10px] sm:text-xs text-slate-300 transition-colors hover:border-white/30 hover:text-white"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer: CTA */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4 border-t border-white/10 pt-4">
                      <Link
                        href={service.cta.href}
                        className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#8066f7] px-6 py-2.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 hover:bg-[#6b51e2] hover:shadow-[0_0_25px_rgba(128,102,247,0.5)] text-center"
                      >
                        <span>{service.cta.label}</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* How we work / Our Process with Unique Shapes & Animations */}
      <ProcessSection />

      {/* Core Values */}
      <div className="relative z-10 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-8 sm:mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 sm:mb-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-primary">Our Foundation</p>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
              Core Values of <span className="gradient-text">YaPaze Technologies</span>
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <div className="mb-3 sm:mb-4 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-xl bg-primary/15 text-primary group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-1.5 sm:mb-2 text-base font-bold text-white">{value.title}</h4>
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
