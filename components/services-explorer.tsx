"use client"

import { useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Check } from "lucide-react"
import { services } from "@/lib/services-data"

export function ServicesExplorer() {
  const [activeId, setActiveId] = useState(services[0].id)
  const sectionRef = useRef<HTMLElement | null>(null)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const activeIndex = Math.max(
    0,
    services.findIndex((service) => service.id === activeId),
  )
  const active = services[activeIndex]
  const next = services[(activeIndex + 1) % services.length]

  // Allow deep links such as /services#cloud-managed-it
  useEffect(() => {
    const syncFromHash = (shouldScroll: boolean) => {
      const id = window.location.hash.replace("#", "")
      if (services.some((service) => service.id === id)) {
        setActiveId(id)
        if (shouldScroll) {
          requestAnimationFrame(() => sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }))
        }
      }
    }

    syncFromHash(true)
    const onHashChange = () => syncFromHash(true)
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  const select = (id: string) => {
    setActiveId(id)
    window.history.replaceState(null, "", `#${id}`)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const steps: Record<string, number> = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }
    const step = steps[event.key]
    if (!step) return
    event.preventDefault()
    const target = services[(index + step + services.length) % services.length]
    select(target.id)
    tabRefs.current[target.id]?.focus()
  }

  return (
    <section ref={sectionRef} id="explore" className="relative scroll-mt-28 px-4 sm:px-6 lg:px-8 pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12">
        {/* Tabs */}
        <div className="min-w-0 lg:col-span-4">
          <div
            role="tablist"
            aria-label="YaPaze services"
            aria-orientation="vertical"
            className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2 snap-x lg:sticky lg:top-28 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [scrollbar-width:none]"
          >
            {services.map((service, index) => {
              const isActive = service.id === active.id
              const Icon = service.icon
              return (
                <button
                  key={service.id}
                  ref={(node) => {
                    tabRefs.current[service.id] = node
                  }}
                  role="tab"
                  id={`tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${service.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => select(service.id)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                  className="group relative w-[14rem] shrink-0 snap-start sm:w-[16.5rem] rounded-2xl px-4 py-4 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary lg:w-full"
                >
                  {isActive ? (
                    <motion.span
                      layoutId="service-tab-bg"
                      className="absolute inset-0 rounded-2xl border border-white/15 bg-white/[0.07] shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
                      style={{ boxShadow: `0 10px 40px ${service.accent}22` }}
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    />
                  ) : (
                    <span className="absolute inset-0 rounded-2xl border border-white/5 bg-white/[0.02] transition-colors group-hover:bg-white/[0.05]" />
                  )}

                  <span className="relative z-10 flex items-center gap-4">
                    <span
                      className="font-mono text-xs font-semibold transition-colors"
                      style={{ color: isActive ? service.accent : "#64748b" }}
                    >
                      {service.number}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-sm font-semibold leading-snug transition-colors ${
                          isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                        }`}
                      >
                        {service.title}
                      </span>
                      <span className="mt-0.5 hidden text-xs leading-snug text-slate-500 lg:block">
                        {service.tagline}
                      </span>
                    </span>
                    <Icon
                      className="h-5 w-5 shrink-0 transition-colors"
                      style={{ color: isActive ? service.accent : "#475569" }}
                    />
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Panel */}
        <div className="min-w-0 lg:col-span-8">
          <AnimatePresence mode="wait">
            <ServicePanel key={active.id} service={active} onNext={() => select(next.id)} nextTitle={next.title} />
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

function ServicePanel({
  service,
  onNext,
  nextTitle,
}: {
  service: (typeof services)[number]
  onNext: () => void
  nextTitle: string
}) {
  const Icon = service.icon

  return (
    <motion.div
      role="tabpanel"
      id={`panel-${service.id}`}
      aria-labelledby={`tab-${service.id}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
      style={{ boxShadow: `0 30px 80px -20px ${service.accent}30` } as CSSProperties}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: service.accent }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-2 select-none text-[6rem] font-extrabold leading-none text-white/[0.04] sm:text-[11rem]"
      >
        {service.number}
      </span>

      <div className="relative space-y-8 p-5 sm:space-y-10 sm:p-10">
        {/* Header */}
        <div className="space-y-5">
          <div className="flex items-center gap-4">
            <motion.div
              className={`relative grid h-14 w-14 shrink-0 place-items-center sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-lg`}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 animate-ping rounded-2xl opacity-20"
                style={{ background: service.accent }}
              />
              <Icon className="relative h-8 w-8 text-white" />
            </motion.div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
              Service {service.number} / {String(services.length).padStart(2, "0")}
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="break-words text-2xl font-extrabold tracking-tight text-white sm:text-4xl">{service.title}</h3>
            <p
              className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-base font-semibold text-transparent sm:text-xl`}
            >
              {service.tagline}
            </p>
            <p className="max-w-2xl leading-relaxed text-slate-300">{service.description}</p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">What we deliver</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.07, duration: 0.4 }}
                className="group rounded-2xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
              >
                <div
                  className={`mb-3 grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br ${service.gradient}`}
                >
                  <Check className="h-4 w-4 text-white" strokeWidth={3} />
                </div>
                <h5 className="mb-1 font-semibold text-white">{feature.title}</h5>
                <p className="text-sm leading-relaxed text-slate-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Outcomes + Tech */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">What you get</h4>
            <ul className="space-y-3">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 text-slate-300">
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0" style={{ color: service.accent }} />
                  <span className="leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Tools & expertise</h4>
            <div className="flex flex-wrap gap-2">
              {service.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-300 transition-colors hover:border-white/30 hover:text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-stretch gap-3 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:pt-8">
          <Link
            href={service.cta.href}
            className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#8066f7] px-7 py-3.5 font-bold text-white transition-all duration-300 hover:bg-[#6b51e2] hover:shadow-[0_0_30px_rgba(128,102,247,0.5)]"
          >
            <span>{service.cta.label}</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <button
            type="button"
            onClick={onNext}
            className="group inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-center text-sm font-semibold text-slate-400 transition-colors hover:text-white"
          >
            <span>Next: {nextTitle}</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
