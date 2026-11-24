"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { SupportRequestModal } from "@/components/support-request-modal"
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
  Server,
  Lock,
  Globe,
  Award,
  MessageCircle,
  FileText,
  CheckCircle2,
} from "lucide-react"

// 4 Foundational Pillars with Clean High-Tech Geometric Wireframe Visuals
const pillars = [
  {
    number: "01",
    title: "Expertise",
    subtitle: "Domain Mastery & Engineering Prowess",
    description:
      "Our seasoned software architects, cloud engineers, and security specialists deliver robust, tailor-made digital systems engineered to satisfy your exact organizational requirements.",
    wireframe: (
      <svg className="w-14 h-14 text-primary group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.4" />
        <ellipse cx="50" cy="50" rx="38" ry="16" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
        <ellipse cx="50" cy="50" rx="16" ry="38" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
        <ellipse cx="50" cy="50" rx="28" ry="28" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <ellipse cx="50" cy="50" rx="38" ry="26" stroke="currentColor" strokeWidth="1.2" transform="rotate(45 50 50)" opacity="0.75" />
        <ellipse cx="50" cy="50" rx="38" ry="26" stroke="currentColor" strokeWidth="1.2" transform="rotate(-45 50 50)" opacity="0.75" />
        <circle cx="50" cy="50" r="4.5" fill="currentColor" opacity="0.95" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Technology",
    subtitle: "Modern Stacks & Future-Proof Tools",
    description:
      "We pioneer modern frameworks, intelligent AI algorithms, and cloud-native microservices so your business always operates on the most modern, agile technology stack available.",
    wireframe: (
      <svg className="w-14 h-14 text-primary group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500" viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="20" rx="28" ry="10" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
        <ellipse cx="50" cy="80" rx="28" ry="10" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
        <ellipse cx="50" cy="50" rx="14" ry="5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        <path d="M22 20 Q50 50 22 80" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
        <path d="M78 20 Q50 50 78 80" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
        <path d="M36 20 Q50 50 36 80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
        <path d="M64 20 Q50 50 64 80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Solutions",
    subtitle: "Tailored Architecture & Bespoke Delivery",
    description:
      "We reject one-size-fits-all templates. Every system is conceived, designed, and optimized collaboratively to address your precise operational workflows and commercial ambitions.",
    wireframe: (
      <svg className="w-14 h-14 text-primary group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500" viewBox="0 0 100 100" fill="none">
        <path d="M15 40 Q50 20 85 40 Q50 60 15 40" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
        <path d="M15 55 Q50 35 85 55 Q50 75 15 55" stroke="currentColor" strokeWidth="1.4" opacity="0.75" />
        <path d="M15 70 Q50 50 85 70 Q50 90 15 70" stroke="currentColor" strokeWidth="1.2" opacity="0.65" />
        <line x1="25" y1="36" x2="25" y2="73" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="38" y1="31" x2="38" y2="76" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="50" y1="29" x2="50" y2="77" stroke="currentColor" strokeWidth="1.2" opacity="0.8" />
        <line x1="62" y1="31" x2="62" y2="76" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
        <line x1="75" y1="36" x2="75" y2="73" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Results",
    subtitle: "Measurable Impact & Proven Reliability",
    description:
      "Our pedigree speaks through outcomes: accelerating system performance, eliminating vulnerabilities, and delivering measurable commercial ROI for global enterprises.",
    wireframe: (
      <svg className="w-14 h-14 text-primary group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-500" viewBox="0 0 100 100" fill="none">
        <ellipse cx="50" cy="50" rx="36" ry="24" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
        <ellipse cx="50" cy="50" rx="18" ry="10" stroke="currentColor" strokeWidth="1.4" opacity="0.85" />
        <ellipse cx="50" cy="50" rx="28" ry="34" stroke="currentColor" strokeWidth="0.8" transform="rotate(30 50 50)" opacity="0.6" />
        <ellipse cx="50" cy="50" rx="28" ry="34" stroke="currentColor" strokeWidth="0.8" transform="rotate(-30 50 50)" opacity="0.6" />
        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.4" />
      </svg>
    ),
  },
]

// Stats
const stats = [
  { value: "99.9%", label: "System Uptime", icon: Activity },
  { value: "150+", label: "Completed Projects", icon: Cpu },
  { value: "100%", label: "Secure Protocols", icon: Shield },
]

// 8 Core Values of YaPaze Technologies
const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We explore bleeding-edge frameworks, serverless paradigms, and AI to deliver future-proof solutions.",
    accent: "#fbbf24",
    tag: "Pioneering Tech",
  },
  {
    icon: Target,
    title: "Customer Focus",
    desc: "We place clients at the heart of every architecture decision to deliver true measurable business ROI.",
    accent: "#a78bfa",
    tag: "Value-Driven",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Uncompromising transparency, security compliance, and ethical responsibility in every interaction.",
    accent: "#34d399",
    tag: "High Trust",
  },
  {
    icon: Zap,
    title: "Quality Excellence",
    desc: "High-grade automated testing, precision codebases, and zero-compromise architectural standards.",
    accent: "#22d3ee",
    tag: "Precision Code",
  },
  {
    icon: Lock,
    title: "Security First",
    desc: "Proactive Zero-Trust defense, encrypted pipelines, and impenetrable infrastructure by default.",
    accent: "#fb7185",
    tag: "Zero-Trust",
  },
  {
    icon: RefreshCw,
    title: "Continuous Growth",
    desc: "Rapid agile iterations, ongoing team upskilling, and proactive optimization across all systems.",
    accent: "#60a5fa",
    tag: "Agile Evolution",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    desc: "Co-engineering shoulder-to-shoulder with our client partners to turn ambitious ideas into reality.",
    accent: "#f472b6",
    tag: "True Partnership",
  },
  {
    icon: Users,
    title: "Empowerment",
    desc: "Equipping teams with autonomous knowledge, robust documentation, and tools for long-term growth.",
    accent: "#c084fc",
    tag: "Shared Success",
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
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#070514] text-white selection:bg-primary/30 relative overflow-x-clip select-none">
      <Navbar />

      {/* 
        ============================================================
        GLOBAL RICH GRADIENT BACKGROUND LAYERS
        Not over simple: Multi-layered mesh gradients, luminous orbs, and subtle tech matrix dots
        ============================================================
      */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Base cosmic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0824] via-[#070516] to-[#04030d]" />

        {/* Top-Center Grand Aurora Violet Radial Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1300px] h-[650px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8066f7]/30 via-indigo-900/15 to-transparent blur-[140px]" />

        {/* Left Side Electric Cyan Ambient Beam */}
        <div className="absolute top-[35%] -left-48 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[150px]" />

        {/* Right Side Deep Magenta / Purple Ambient Glow */}
        <div className="absolute top-[55%] -right-48 w-[650px] h-[650px] bg-purple-600/15 rounded-full blur-[160px]" />

        {/* Bottom Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-t from-[#8066f7]/20 via-cyan-500/10 to-transparent blur-[140px]" />

        {/* Cyber Tech Dot-Matrix Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(128,102,247,0.14)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

        {/* Subtle Cyber Grid Lines Masked at Top and Bottom */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,102,247,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,102,247,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-60" />
      </div>

      {/* 
        ============================================================
        SECTION 1: HERO (About Us & Vision Statement)
        Neat, standard, beautifully proportioned layout
        ============================================================
      */}
      <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb & Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 bg-white/[0.03] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-white font-medium">About Us</span>
            </div>


          </motion.div>

          {/* Big Title: About Us */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-10 sm:mb-16"
          >
            About <span className="bg-gradient-to-r from-white via-primary to-cyan-400 bg-clip-text text-transparent">Us</span>
          </motion.h1>

          {/* Statement Split Section: Standard & Neat 2-Column Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center rounded-3xl bg-gradient-to-br from-white/[0.05] via-[#0d0a27]/60 to-white/[0.02] border border-white/10 p-6 sm:p-10 lg:p-12 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            {/* Left Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 space-y-4"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                Our Driving Belief
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
                We believe that{" "}
                <span className="bg-gradient-to-r from-primary via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                  technology can change the world.
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed pt-1">
                At YaPaze Technologies, innovation isn&apos;t just what we build—it is how we think. We engineer digital solutions that elevate businesses into resilient, market-defining leaders.
              </p>
            </motion.div>

            {/* Right Narrative Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-6 space-y-4 text-slate-300 text-sm sm:text-base font-light leading-relaxed lg:border-l lg:border-white/10 lg:pl-10"
            >
              <p>
                We are a full-spectrum technological ecosystem delivering mission-critical IT solutions to enterprises worldwide. From high-performance cloud networks and impenetrable cybersecurity to custom ERPs and intelligent AI tools, we tailor every architecture to our clients&apos; vision.
              </p>
              <p>
                By combining elite engineering standards with a client-first philosophy, we ensure companies of all sizes move faster, scale smoothly, and maintain total digital sovereignty in a rapidly transforming world.
              </p>

              {/* Quick Trust Highlights */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  Remote Worldwide Delivery
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  Enterprise Zero-Downtime
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        ============================================================
        SECTION 2: 4 PILLARS (Expertise, Technology, Solutions, Results)
        Standard & Neat 4-column card grid with rich gradient backgrounds
        ============================================================
      */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-gradient-to-b from-[#0d0928]/70 via-[#09071c]/80 to-[#060515]/90 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-primary tracking-widest uppercase">
              <span>OUR FOUNDATION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Four Pillars of <span className="gradient-text">YaPaze</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Architectural principles that ensure every project achieves production-grade excellence.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent border border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_40px_rgba(128,102,247,0.2)] overflow-hidden"
              >
                {/* Top Subtle Hover Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Wireframe Graphic Container */}
                  <div className="mb-6 flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                      {pillar.wireframe}
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-500 group-hover:text-primary transition-colors">
                      {pillar.number}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-primary/80 mb-3">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Status Indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-slate-300">
                  <span>STANDARD VERIFIED</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-cyan-400 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 
        ============================================================
        SECTION 3: STATS OVERLAPPING ENGINEERING SHOWCASE
        Neat, elevated floating stats bar with high-res workspace image
        ============================================================
      */}
      <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative">
          {/* Floating Pill Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative z-20 max-w-4xl mx-auto -mb-12 sm:-mb-16 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#0e0a29]/95 via-[#0c0824]/95 to-[#0a071f]/95 backdrop-blur-2xl border border-primary/40 p-6 sm:p-9 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(128,102,247,0.25)]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className={`${i > 0 ? "pt-4 sm:pt-0 sm:px-6" : "sm:pr-6"} flex flex-col items-center justify-center space-y-1`}>
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-[#8066f7] font-mono text-xs sm:text-sm">
                      <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="text-slate-300 font-medium tracking-wide">{stat.label}</span>
                    </div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* High-Tech Showcase Image with Gradient Overlay and Cyber HUD Badges */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 rounded-3xl sm:rounded-[36px] overflow-hidden border border-white/15 bg-[#09071c] shadow-[0_30px_90px_rgba(0,0,0,0.9)]"
          >
            <div className="relative h-[340px] sm:h-[460px] md:h-[540px] w-full overflow-hidden group">
              <Image
                src="/about.png"
                alt="YaPaze Technologies Engineering Operations"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105"
              />
              {/* Cinematic Gradient Fade */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070514] via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#070514]/60 via-transparent to-transparent" />

              {/* Floating Cyber Badges */}
              <div className="absolute top-16 left-6 sm:top-24 sm:left-10 z-20 flex flex-col gap-2.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-cyan-400/40 text-xs font-mono text-cyan-300 shadow-xl">
                  <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>CLUSTER STATUS :: OPTIMAL (99.98% UPTIME)</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-primary/40 text-xs font-mono text-primary shadow-xl">
                  <Server className="w-3.5 h-3.5 text-primary" />
                  <span>GLOBAL REMOTE INFRASTRUCTURE ACTIVE</span>
                </div>
              </div>

              {/* Bottom Right Floating Badge Card */}
              <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 max-w-xs sm:max-w-sm rounded-2xl bg-black/80 backdrop-blur-xl border border-white/20 p-4 sm:p-5 shadow-2xl hidden min-[480px]:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-primary/25 border border-primary/40">
                    <Cpu className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Full-Stack Engineering Lab</h4>
                    <p className="text-[11px] font-mono text-slate-400">Enterprise AI & Cloud Scale</p>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Continuous delivery pipelines engineered for rapid global deployment and zero-downtime execution.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 
        ============================================================
        SECTION 4: CORE VALUES (8 Values in Standard & Neat 4x2 Grid)
        Rich gradient backgrounds, distinct accent highlights, and clean typography
        ============================================================
      */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-gradient-to-b from-[#09071c] via-[#0d0928] to-[#08061a]">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono font-bold text-primary tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>CULTURE & PRINCIPLES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Core Values of <span className="gradient-text">YaPaze Technologies</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
              The fundamental principles that govern our engineering philosophy, enterprise partnerships, and digital solutions.
            </p>
          </div>

          {/* 8 Core Values Grid with Clean Standard Proportions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.015] to-transparent hover:border-primary/50 p-6 backdrop-blur-xl transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                >
                  {/* Subtle Top Accent Glow matching accent */}
                  <div
                    aria-hidden="true"
                    className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500"
                    style={{ background: val.accent }}
                  />

                  {/* Corner Number Badge */}
                  <span className="absolute top-5 right-5 font-mono text-xs font-bold text-slate-500 group-hover:text-slate-300 transition-colors">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div>
                    {/* Icon Container */}
                    <div className="mb-4 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300 shadow-lg">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: val.accent }} />
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

                  {/* Bottom Tag */}
                  <div className="mt-5 pt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-slate-300">
                    <span>{val.tag}</span>
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
        Clean, standard dual-tab switcher with rich gradient presentation
        ============================================================
      */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-primary tracking-widest uppercase">
              <span>STRATEGIC MANDATE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Mission & <span className="gradient-text">Vision</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 font-light">
              Clear goals that direct our technical roadmap and partner relationships.
            </p>
          </div>

          {/* Clean Standard Pill Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-xl">
              <button
                type="button"
                onClick={() => setActiveTab("mission")}
                className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${activeTab === "mission"
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(128,102,247,0.5)]"
                  : "text-slate-400 hover:text-white"
                  }`}
              >
                Our Mission
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("vision")}
                className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${activeTab === "vision"
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(128,102,247,0.5)]"
                  : "text-slate-400 hover:text-white"
                  }`}
              >
                Our Vision
              </button>
            </div>
          </div>

          {/* Interactive Card Presentation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-gradient-to-br from-[#0e0a29]/90 via-[#0a071f]/85 to-[#060414]/90 border border-primary/30 p-8 sm:p-12 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(128,102,247,0.15)] relative overflow-hidden"
            >
              {/* Subtle ambient gradient sphere */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  {activeTab === "mission" ? "CORE COMMITMENT" : "LONG-TERM HORIZON"}
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  {activeTab === "mission" ? (
                    <>
                      Empowering global enterprises through{" "}
                      <span className="bg-gradient-to-r from-primary via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                        accessible, high-standard digital engineering.
                      </span>
                    </>
                  ) : (
                    <>
                      Becoming the world&apos;s benchmark{" "}
                      <span className="bg-gradient-to-r from-cyan-400 via-primary to-fuchsia-400 bg-clip-text text-transparent">
                        for reliable, next-generation IT solutions.
                      </span>
                    </>
                  )}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
                  {activeTab === "mission"
                    ? "We work relentlessly to ensure cutting-edge software engineering, autonomous systems, and scalable cloud networks are seamlessly accessible to solve real business challenges, dismantle technical barriers, and unlock exponential growth for businesses of all scales."
                    : "To lead the frontier of digital transformation by setting the gold standard for security, speed, and continuous technological innovation—empowering clients worldwide to stay perpetually ahead of industry disruption."}
                </p>

                {/* Key Strategic Pillars */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(activeTab === "mission"
                    ? [
                      { label: "Accessible Tech", desc: "Enterprise quality without bloated costs" },
                      { label: "Scalable Clouds", desc: "Reliable architectures designed for rapid growth" },
                      { label: "Client Agility", desc: "Fast sprint turnarounds and transparent roadmaps" },
                    ]
                    : [
                      { label: "Global Presence", desc: "Serving clients seamlessly worldwide" },
                      { label: "Zero-Downtime", desc: "Reliable uptime and hardened security" },
                      { label: "Future AI Readiness", desc: "Next-gen tech infused into every workflow" },
                    ]
                  ).map((item) => (
                    <div key={item.label} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                      <div className="text-xs sm:text-sm font-bold text-white">{item.label}</div>
                      <div className="text-[11px] text-slate-400 font-light mt-1">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* 
        ============================================================
        SECTION 6: PARTNERS ROW
        Clean, standard enterprise client strip
        ============================================================
      */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-white/10 bg-gradient-to-r from-transparent via-[#0c0824]/60 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-around gap-8 sm:gap-12 opacity-70 hover:opacity-100 transition-opacity duration-300">
            {partnerLogos.map((brand) => (
              <span
                key={brand.name}
                className="text-lg sm:text-2xl md:text-3xl font-extrabold tracking-widest text-slate-300 hover:text-white transition-colors cursor-default select-none uppercase font-mono"
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
        High-impact standard banner with rich radiant gradient & 2 actions
        ============================================================
      */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-t from-primary/30 via-indigo-600/15 to-transparent rounded-full blur-[140px]" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-xs font-mono font-semibold text-primary tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>LET&apos;S COLLABORATE</span>
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Need IT Solutions?
            </h2>
            <p className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white">
              Let&apos;s{" "}
              <span className="italic font-serif bg-gradient-to-r from-primary via-purple-300 to-cyan-400 bg-clip-text text-transparent">
                start now.
              </span>
            </p>
          </motion.div>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Message us on WhatsApp for an immediate response, or submit a request and our engineers will get back to you within 30 minutes.
          </p>

          {/* Dual Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Action: WhatsApp */}
            <a
              href="https://wa.me/918714414438?text=Hello%20YaPaze%20Technologies!%20I%20would%20like%20to%20discuss%20an%20IT%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#1ebe5d] hover:from-[#2ae870] hover:to-[#22d167] text-black font-bold text-xs sm:text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Secondary Action: Raise a Request Modal */}
            <button
              type="button"
              onClick={() => setIsSupportModalOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:px-9 sm:py-4 rounded-full border border-white/20 bg-white/5 hover:bg-primary/20 hover:border-primary text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_30px_rgba(128,102,247,0.5)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Raise a Request</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Support Request Modal */}
      <SupportRequestModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />

      <Footer />
      <ScrollToTop />
    </main>
  )
}
