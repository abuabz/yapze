"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  Lightbulb,
  Target,
  Shield,
  Zap,
  RefreshCw,
  HeartHandshake,
  Users,
  ShieldCheck,
  Cpu,
  Layers,
  Activity,
  Terminal,
  Server,
  Lock,
} from "lucide-react"

// 4 Core Pillars with 3D Wireframe Geometries
const pillars = [
  {
    title: "expertise",
    description:
      "Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.",
    wireframe: (
      <svg className="w-16 h-16 text-primary group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
        <ellipse cx="50" cy="50" rx="38" ry="16" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <ellipse cx="50" cy="50" rx="16" ry="38" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <ellipse cx="50" cy="50" rx="28" ry="28" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <ellipse cx="50" cy="50" rx="38" ry="26" stroke="currentColor" strokeWidth="1" transform="rotate(45 50 50)" opacity="0.7" />
        <ellipse cx="50" cy="50" rx="38" ry="26" stroke="currentColor" strokeWidth="1" transform="rotate(-45 50 50)" opacity="0.7" />
        <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.9" />
      </svg>
    ),
  },
  {
    title: "technology",
    description:
      "We stay up-to-date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.",
    wireframe: (
      <svg className="w-16 h-16 text-primary group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500" viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="20" rx="28" ry="10" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <ellipse cx="50" cy="80" rx="28" ry="10" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <ellipse cx="50" cy="50" rx="14" ry="5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <path d="M22 20 Q50 50 22 80" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <path d="M78 20 Q50 50 78 80" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <path d="M36 20 Q50 50 36 80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
        <path d="M64 20 Q50 50 64 80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "solutions",
    description:
      "We take a personalized approach to every project, working closely with you to understand your business and create tailored solutions.",
    wireframe: (
      <svg className="w-16 h-16 text-primary group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500" viewBox="0 0 100 100" fill="none">
        <path d="M15 40 Q50 20 85 40 Q50 60 15 40" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <path d="M15 55 Q50 35 85 55 Q50 75 15 55" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        <path d="M15 70 Q50 50 85 70 Q50 90 15 70" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <line x1="25" y1="36" x2="25" y2="73" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="38" y1="31" x2="38" y2="76" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="50" y1="29" x2="50" y2="77" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <line x1="62" y1="31" x2="62" y2="76" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="75" y1="36" x2="75" y2="73" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "results",
    description:
      "Our track record speaks for itself – we've helped businesses of all sizes and industries achieve their goals with our IT solutions.",
    wireframe: (
      <svg className="w-16 h-16 text-primary group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500" viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="50" rx="36" ry="24" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <ellipse cx="50" cy="50" rx="18" ry="10" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <ellipse cx="50" cy="50" rx="28" ry="34" stroke="currentColor" strokeWidth="0.8" transform="rotate(30 50 50)" opacity="0.6" />
        <ellipse cx="50" cy="50" rx="28" ry="34" stroke="currentColor" strokeWidth="0.8" transform="rotate(-30 50 50)" opacity="0.6" />
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.4" />
      </svg>
    ),
  },
]

// Stats
const stats = [
  { value: "500+", label: "Successful Projects" },
  { value: "98%", label: "Satisfied Clients" },
  { value: "35+", label: "Handled Countries" },
]

// 8 Core Values of YaPaze Technologies
const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We explore bleeding-edge frameworks and emerging AI tech to deliver future-proof solutions.",
    color: "from-amber-500 to-yellow-400",
    accent: "#fbbf24",
  },
  {
    icon: Target,
    title: "Customer Focus",
    desc: "We place our clients at the center of every architectural decision to deliver true measurable ROI.",
    color: "from-violet-500 to-purple-400",
    accent: "#a78bfa",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Uncompromising transparency, security compliance, and ethical responsibility in all interactions.",
    color: "from-emerald-500 to-teal-400",
    accent: "#34d399",
  },
  {
    icon: Zap,
    title: "Quality Excellence",
    desc: "High-grade automated testing, precision codebases, and zero-compromise architectural standards.",
    color: "from-cyan-500 to-blue-400",
    accent: "#22d3ee",
  },
  {
    icon: Lock,
    title: "Security First",
    desc: "Proactive Zero-Trust defense, encrypted pipelines, and impenetrable infrastructure by default.",
    color: "from-rose-500 to-red-400",
    accent: "#fb7185",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    desc: "Rapid agile iterations, ongoing team upskilling, and proactive optimization across all systems.",
    color: "from-indigo-500 to-sky-400",
    accent: "#60a5fa",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    desc: "Co-engineering shoulder-to-shoulder with our client partners to turn ambitious ideas into reality.",
    color: "from-fuchsia-500 to-pink-400",
    accent: "#f472b6",
  },
  {
    icon: Users,
    title: "Empowerment",
    desc: "Equipping teams with autonomous knowledge, robust documentation, and tools for long-term growth.",
    color: "from-purple-500 to-violet-400",
    accent: "#c084fc",
  },
]

// Partner Brands
const partnerLogos = [
  { name: "SAMSUNG" },
  { name: "Google" },
  { name: "amazon" },
  { name: "Windows" },
  { name: "SONY" },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission")

  return (
    <main className="min-h-screen bg-[#05050d] text-white selection:bg-primary/30 relative overflow-x-clip select-none">
      <Navbar />

      {/* 
        ============================================================
        SECTION 1: HERO (About Us + "We believe that technology can change the world")
        ============================================================
      */}
      <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Dark Fluid Wave Curves & Radial Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] bg-gradient-to-bl from-primary/20 via-purple-900/10 to-transparent rounded-full blur-[130px]" />
          <div className="absolute top-1/3 -left-40 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[120px]" />

          {/* Organic Wave Vector Background Lines */}
          <svg
            className="absolute top-0 right-0 w-full h-[600px] opacity-15"
            viewBox="0 0 1440 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120C320 280 620 40 960 160C1280 280 1440 80 1440 80V0H0V120Z"
              fill="url(#about-wave-grad)"
            />
            <defs>
              <linearGradient id="about-wave-grad" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8066f7" stopOpacity="0.3" />
                <stop offset="1" stopColor="#22d3ee" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>

          {/* 3D Floating Metallic Spheres */}
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-44 left-[10%] w-7 h-7 sm:w-9 sm:h-9 rounded-full shadow-2xl pointer-events-none"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #cbd5e1 30%, #475569 70%, #0f172a 100%)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,255,255,0.8)",
            }}
          />

          <motion.div
            animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-28 left-[45%] w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-2xl pointer-events-none"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #cbd5e1 30%, #475569 70%, #0f172a 100%)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,255,255,0.8)",
            }}
          />

          <motion.div
            animate={{ rotate: [0, 360], y: [0, -10, 0] }}
            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            className="absolute top-36 right-[12%] w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-slate-300/40 shadow-2xl pointer-events-none"
            style={{
              background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), transparent 70%)",
              boxShadow: "0 15px 35px rgba(0,0,0,0.9), inset 0 2px 5px rgba(255,255,255,0.6)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 mb-4"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-white font-medium">About Us</span>
          </motion.div>

          {/* Big Title: About Us */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-14 sm:mb-20"
          >
            About Us
          </motion.h1>

          {/* Statement Split Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                We believe that{" "}
                <span className="bg-gradient-to-r from-white via-primary to-cyan-400 bg-clip-text text-transparent">
                  technology can change the world.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-6 space-y-5 text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed"
            >
              <p>
                At YaPaze Technologies, we are committed to architecting transformative digital ecosystems for forward-thinking enterprises. Our multidisciplinary engineers build resilient software, scalable cloud networks, and impenetrable cybersecurity frameworks designed to give businesses an enduring competitive edge.
              </p>
              <p>
                From disruptive AI models and enterprise web platforms to mission-critical infrastructure, we transform ambitious goals into high-impact digital realities across global markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        ============================================================
        SECTION 2: 4 PILLARS (expertise, technology, solutions, results)
        ============================================================
      */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-[#090915]/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 sm:p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
              >
                <div>
                  <div className="mb-6 flex items-center justify-start h-20">
                    {pillar.wireframe}
                  </div>
                  <h3 className="text-xl font-extrabold text-white tracking-wide mb-3 group-hover:text-cyan-400 transition-colors uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ============================================================
        SECTION 3: FLOATING STATS OVERLAPPING REDESIGNED IMAGERY
        Modern High-Tech Engineering Showcase (Replaced old stock photo)
        ============================================================
      */}
      <section className="relative pt-16 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          
          {/* Floating Pill Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20 max-w-4xl mx-auto -mb-10 sm:-mb-14 rounded-2xl sm:rounded-3xl bg-[#090918]/95 backdrop-blur-2xl border border-white/15 p-6 sm:p-10 shadow-[0_25px_80px_rgba(0,0,0,0.95)]"
            style={{
              borderColor: "rgba(128, 102, 247, 0.4)",
              boxShadow: "0 25px 80px -10px rgba(128, 102, 247, 0.25), 0 10px 40px rgba(0,0,0,0.9)",
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`${i > 0 ? "pt-4 sm:pt-0 sm:px-6" : "sm:pr-6"}`}>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight bg-gradient-to-r from-cyan-400 via-[#8066f7] to-fuchsia-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1 sm:mt-2 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Redesigned High-Tech Imagery Showcase: Dual-Layered Interactive Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 rounded-3xl overflow-hidden border border-white/10 bg-[#080814] shadow-2xl"
          >
            {/* Primary Centerpiece Image */}
            <div className="relative h-[360px] sm:h-[480px] md:h-[580px] w-full overflow-hidden group">
              <Image
                src="/bglanding02enhanced.png"
                alt="YaPaze Technologies Engineering Command Operations"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050d] via-black/40 to-transparent" />

              {/* Floating Cyber HUD Badges on Top of Image */}
              <div className="absolute top-16 left-6 sm:top-20 sm:left-10 z-20 flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-cyan-400/30 text-xs font-mono text-cyan-300 shadow-lg">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>SYSTEM::CLUSTER_ONLINE (99.98%)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-purple-400/30 text-xs font-mono text-purple-300 shadow-lg">
                  <Server className="w-3.5 h-3.5 text-purple-400" />
                  <span>DISTRIBUTED_CLOUD_ACTIVE</span>
                </div>
              </div>

              {/* Secondary Floating Overlapping Card */}
              <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 max-w-xs sm:max-w-sm rounded-2xl bg-black/70 backdrop-blur-xl border border-white/15 p-4 sm:p-5 shadow-2xl hidden min-[480px]:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                    <Cpu className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Full-Stack Lab</h4>
                    <p className="text-[11px] font-mono text-slate-400">Enterprise AI & Cloud Scale</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Continuous integration pipelines engineered for rapid global deployment and zero-downtime execution.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 
        ============================================================
        SECTION 4: CORE VALUES (Added to About Us page as requested)
        8 Core Values of YaPaze Technologies in High-Tech Glassmorphism
        ============================================================
      */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#070712] border-y border-white/5 overflow-hidden">
        {/* Ambient Lights */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glassmorphism border border-primary/30 text-xs font-mono font-bold text-primary tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>OUR FOUNDATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Core Values of <span className="gradient-text">YaPaze Technologies</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              The fundamental principles that govern our engineering philosophy, enterprise partnerships, and digital solutions.
            </p>
          </div>

          {/* 8 Core Values Grid with Unique Futuristic Hover Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] p-6 backdrop-blur-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  style={{
                    boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                  }}
                >
                  {/* Subtle Top-Right Ambient Glow matching accent */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"
                    style={{ background: val.accent }}
                  />

                  {/* Corner Number Badge */}
                  <span className="absolute top-4 right-4 font-mono text-xs font-bold text-slate-600 group-hover:text-slate-400 transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div>
                    {/* Icon */}
                    <div className="mb-4 inline-flex p-3.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" style={{ color: val.accent }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {val.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                      {val.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-slate-400">
                    <span>STANDARD #{idx + 1}</span>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: val.accent }} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 
        ============================================================
        SECTION 5: MISSION & VISION INTERACTIVE STORYTELLING
        ============================================================
      */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            {/* Left Interactive Sphere Toggle */}
            <div
              className="relative cursor-pointer group shrink-0"
              onClick={() => setActiveTab(activeTab === "mission" ? "vision" : "mission")}
            >
              <div className="absolute inset-0 bg-primary/25 rounded-full blur-[80px] group-hover:bg-cyan-500/30 transition-all duration-500" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-black via-[#0a0a28] to-[#12123e] flex flex-col items-center justify-center p-8 border border-white/15 shadow-[0_0_60px_rgba(128,102,247,0.3)]"
              >
                <div className="text-center space-y-2 pointer-events-none">
                  <span className="text-xs font-mono tracking-widest text-primary uppercase">CLICK TO TOGGLE</span>
                  <div className="text-4xl sm:text-6xl font-black text-white tracking-tighter">
                    {activeTab === "mission" ? "Mission" : "Vision"}
                  </div>
                  <p className="text-[11px] text-slate-400 max-w-[180px] mx-auto">
                    {activeTab === "mission" ? "Switch to our future Vision →" : "Switch to our core Mission →"}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Narrative Content */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glassmorphism border border-primary/30 text-xs font-mono font-bold text-primary tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>STRATEGIC MANDATE</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-5"
                >
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                    {activeTab === "mission" ? (
                      <>
                        Empowering global enterprises through{" "}
                        <span className="gradient-text">accessible & advanced intelligence.</span>
                      </>
                    ) : (
                      <>
                        Becoming the world&apos;s most trusted{" "}
                        <span className="gradient-text">partner for next-gen IT solutions.</span>
                      </>
                    )}
                  </h3>

                  <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
                    {activeTab === "mission"
                      ? "We work relentlessly to ensure cutting-edge software engineering, autonomous systems, and scalable cloud networks are seamlessly accessible to solve real business challenges, dismantle technical barriers, and unlock exponential growth."
                      : "To lead the frontier of digital transformation by setting the benchmark for security, speed, and continuous technological innovation—empowering clients worldwide to stay perpetually ahead of change."}
                  </p>

                  <div className="pt-3 flex flex-wrap gap-3">
                    {(activeTab === "mission"
                      ? ["Ethical AI", "Decentralized Systems", "Enterprise Agility"]
                      : ["Global Reach", "Zero-Downtime Architecture", "Client Excellence"]
                    ).map((tag) => (
                      <span
                        key={tag}
                        className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 font-mono text-xs text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ============================================================
        SECTION 6: PARTNERS ROW
        ============================================================
      */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-around gap-8 sm:gap-12 opacity-65 hover:opacity-100 transition-opacity duration-300">
            {partnerLogos.map((brand) => (
              <span
                key={brand.name}
                className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-widest text-slate-300 hover:text-white transition-colors cursor-default select-none uppercase"
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ============================================================
        SECTION 7: BOTTOM CTA
        ============================================================
      */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-primary/15 rounded-full blur-[140px]" />

          <svg
            className="absolute bottom-0 left-0 w-full h-[320px] opacity-20"
            viewBox="0 0 1440 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 160C240 280 480 80 720 200C960 320 1200 120 1440 240V320H0V160Z"
              stroke="#8066f7"
              strokeWidth="1.5"
            />
            <path
              d="M0 200C240 320 480 120 720 240C960 360 1200 160 1440 280"
              stroke="#22d3ee"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          </svg>

          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-24 left-[15%] w-8 h-8 sm:w-11 sm:h-11 rounded-full shadow-2xl"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #cbd5e1 30%, #475569 70%, #0f172a 100%)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,255,255,0.8)",
            }}
          />

          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-16 right-[12%] w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-2xl"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #cbd5e1 30%, #475569 70%, #0f172a 100%)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,255,255,0.8)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              Need IT Solutions?
            </h2>
            <p className="text-3xl sm:text-5xl md:text-6xl font-normal text-white">
              Let&apos;s <span className="italic font-serif text-cyan-400 bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">start now.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full border border-white/20 bg-white/5 hover:bg-primary text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:border-primary hover:shadow-[0_0_35px_rgba(128,102,247,0.6)]"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
