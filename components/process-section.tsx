"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Layers,
  Cpu,
  Activity,
  Zap,
} from "lucide-react"

interface ProcessStep {
  number: string
  phase: string
  title: string
  tagline: string
  description: string
  accent: string
  glowColor: string
  deliverables: string[]
  icon: typeof Search
}

const steps: ProcessStep[] = [
  {
    number: "01",
    phase: "PHASE 01 // DISCOVERY",
    title: "Discover & Strategy",
    tagline: "Uncovering Deep Architecture Needs",
    description:
      "We immerse ourselves in your domain, interviewing stakeholders, auditing existing systems, and mapping user journeys before writing a single line of code.",
    accent: "from-cyan-400 to-blue-500",
    glowColor: "rgba(34, 211, 238, 0.4)",
    deliverables: ["Stakeholder Alignment", "Architecture Audit", "Milestone Roadmap"],
    icon: Search,
  },
  {
    number: "02",
    phase: "PHASE 02 // ARCHITECTURE",
    title: "Design & Prototype",
    tagline: "Interactive Blueprints & Systems",
    description:
      "Transforming requirements into high-fidelity clickable prototypes, enterprise design systems, and robust cloud topology diagrams you can validate early.",
    accent: "from-violet-400 to-fuchsia-500",
    glowColor: "rgba(128, 102, 247, 0.4)",
    deliverables: ["Interactive Wireframes", "Scalable Design System", "Cloud Schema"],
    icon: PenTool,
  },
  {
    number: "03",
    phase: "PHASE 03 // EXECUTION",
    title: "Build & DevSecOps",
    tagline: "Agile Sprints with Continuous Testing",
    description:
      "Rapid two-week sprint delivery backed by automated CI/CD pipelines, strict unit and penetration testing, and clean, modular codebases.",
    accent: "from-indigo-400 to-cyan-400",
    glowColor: "rgba(99, 102, 241, 0.4)",
    deliverables: ["Two-Week Sprints", "Automated CI/CD", "Security Hardening"],
    icon: Code2,
  },
  {
    number: "04",
    phase: "PHASE 04 // HYPERCARE",
    title: "Launch & Support",
    tagline: "Zero-Downtime Go-Live & 24/7 Telemetry",
    description:
      "Flawless production deployment with blue-green cutover, full-stack APM telemetry monitoring, and dedicated 24/7 ongoing engineering support.",
    accent: "from-emerald-400 to-teal-500",
    glowColor: "rgba(52, 211, 153, 0.4)",
    deliverables: ["Zero-Downtime Rollout", "Real-Time Telemetry", "24/7 SLA Hypercare"],
    icon: Rocket,
  },
]

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-300">
              Delivery Methodology
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            One Process. <span className="gradient-text">Every Service.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Our battle-tested 4-stage engineering lifecycle engineered to mitigate risk, accelerate velocity, and ship resilient digital products.
          </p>
        </motion.div>

        {/* Desktop Connecting Laser Beam Pipeline */}
        <div className="relative mb-12 hidden lg:block">
          <div className="relative h-2 w-full max-w-6xl mx-auto">
            {/* Base track */}
            <div className="absolute inset-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-cyan-500/30 via-violet-500/30 to-emerald-500/30 rounded-full" />

            {/* Continuous animated laser pulse traveling across */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 h-[3px] w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px] shadow-[0_0_15px_#22d3ee]"
              animate={{
                left: ["-10%", "110%"],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Junction checkpoints */}
            <div className="absolute inset-0 flex justify-between items-center px-12">
              {steps.map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="w-5 h-5 rounded-full bg-[#07070b] border-2 border-primary flex items-center justify-center shadow-[0_0_10px_rgba(128,102,247,0.6)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-primary whitespace-nowrap tracking-wider font-semibold">
                    STEP {step.number}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Process Cards with Unique Chamfered Shapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isHovered = activeStep === index

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className="group relative flex flex-col"
              >
                {/* Unique Cyber Chamfered Outer Shell */}
                <div
                  className="relative p-[1.5px] transition-all duration-500 flex-1 flex flex-col"
                  style={{
                    clipPath:
                      index % 2 === 0
                        ? "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))"
                        : "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
                  }}
                >
                  {/* Rotating Conic Gradient Border Highlight */}
                  <div
                    className={`absolute -inset-[150%] transition-opacity duration-500 -z-10 animate-[spin_4s_linear_infinite] ${
                      isHovered ? "opacity-100" : "opacity-40"
                    }`}
                    style={{
                      background: `conic-gradient(from 0deg, transparent 40%, #8066f7 70%, #22d3ee 90%, transparent 100%)`,
                    }}
                  />

                  {/* Card Body */}
                  <div
                    className="relative flex-1 flex flex-col justify-between bg-[#080811]/95 backdrop-blur-xl p-6 sm:p-7 transition-colors duration-300"
                    style={{
                      clipPath:
                        index % 2 === 0
                          ? "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))"
                          : "polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)",
                    }}
                  >
                    {/* Top Cyber Accents */}
                    <div className="flex items-center justify-between mb-5">
                      {/* Geometric Number Badge (Rotated Diamond) */}
                      <div className="relative">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                          <span className="font-mono text-base font-black bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
                            {step.number}
                          </span>
                        </div>
                        {/* Glow indicator */}
                        <div
                          className="absolute -inset-1 rounded-lg blur-sm opacity-50 group-hover:opacity-100 transition-opacity"
                          style={{ backgroundColor: step.glowColor }}
                        />
                      </div>

                      {/* Phase Tag */}
                      <span className="font-mono text-[9px] uppercase tracking-widest text-primary/80 px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
                        {step.phase}
                      </span>
                    </div>

                    {/* Animated Micro-Canvas / Graphic */}
                    <div className="relative my-4 h-24 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden flex items-center justify-center p-3">
                      {/* Subtle Grid Background */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:12px_12px]" />

                      {/* Step-specific animations */}
                      {index === 0 && (
                        /* Radar scan animation */
                        <div className="relative flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full border border-cyan-500/30 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full border border-cyan-500/50 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
                            </div>
                          </div>
                          {/* Rotating radar sweep */}
                          <div className="absolute w-16 h-16 rounded-full border-t border-cyan-400 animate-[spin_3s_linear_infinite] opacity-75" />
                          <Icon className="absolute w-5 h-5 text-cyan-300" />
                        </div>
                      )}

                      {index === 1 && (
                        /* Vector blueprint animation */
                        <div className="relative w-full h-full flex items-center justify-center">
                          <svg className="w-24 h-16" viewBox="0 0 100 60">
                            {/* Blueprint vector lines */}
                            <motion.path
                              d="M 10 30 Q 50 5 90 30 T 90 50"
                              fill="none"
                              stroke="#8066f7"
                              strokeWidth="2"
                              strokeDasharray="4 4"
                              animate={{ strokeDashoffset: [0, -20] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                            <circle cx="10" cy="30" r="3" fill="#22d3ee" />
                            <circle cx="50" cy="18" r="3" fill="#8066f7" />
                            <circle cx="90" cy="30" r="3" fill="#ec4899" />
                          </svg>
                          <Icon className="absolute w-5 h-5 text-violet-300" />
                        </div>
                      )}

                      {index === 2 && (
                        /* Matrix Code Brackets animation */
                        <div className="relative flex items-center justify-center gap-3">
                          <motion.span
                            className="font-mono text-xl font-bold text-cyan-400"
                            animate={{ x: [-2, 0, -2] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            &lt;
                          </motion.span>
                          <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30">
                            <Icon className="w-5 h-5 text-indigo-300" />
                          </div>
                          <motion.span
                            className="font-mono text-xl font-bold text-cyan-400"
                            animate={{ x: [2, 0, 2] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            /&gt;
                          </motion.span>
                        </div>
                      )}

                      {index === 3 && (
                        /* Launch rocket animation */
                        <div className="relative flex items-center justify-center">
                          {/* Expanding telemetry pulse waves */}
                          <motion.div
                            className="absolute w-14 h-14 rounded-full border border-emerald-400/40"
                            animate={{ scale: [0.8, 1.4], opacity: [0.8, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity }}
                          />
                          <div className="p-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                            <Icon className="w-5 h-5 text-emerald-300" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Step Title & Description */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                        {step.tagline}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>

                    {/* Deliverable Checkmarks */}
                    <div className="pt-3 border-t border-white/5 space-y-1.5">
                      {step.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Chamfer Corner Accent Bracket */}
                    <div className="mt-4 pt-2 flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>STATUS: READY</span>
                      <span className="text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        EXPLORE <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
