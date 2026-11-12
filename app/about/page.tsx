"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  Globe2,
  Users2,
  Briefcase,
  ChevronRight,
} from "lucide-react"

// 4 Core Pillars from the reference design
const pillars = [
  {
    title: "expertise",
    description:
      "Our team of experienced experts have the knowledge and expertise to deliver innovative IT solutions that meet your unique needs.",
    wireframe: (
      <svg className="w-16 h-16 text-primary group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-500" viewBox="0 0 100 100" fill="none">
        {/* Geodesic / Wireframe Torus Sphere */}
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
        {/* Hyperbolic / Cylinder Wireframe Mesh */}
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
        {/* 3D Curved Surface / Wave Mesh */}
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
        {/* Torus / Donut Knot 3D Mesh */}
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

// Partners / Clients row from reference design
const partnerLogos = [
  { name: "SAMSUNG", icon: "SAMSUNG" },
  { name: "Google", icon: "Google" },
  { name: "amazon", icon: "amazon" },
  { name: "Windows", icon: "Microsoft" },
  { name: "SONY", icon: "SONY" },
]

export default function AboutPage() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <main className="min-h-screen bg-[#05050d] text-white selection:bg-primary/30 relative overflow-x-clip select-none">
      <Navbar />

      {/* 
        ============================================================
        SECTION 1: TOP HERO (About Us + "We believe that technology can change the world")
        ============================================================
      */}
      <section className="relative pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Dark Fluid Wave Curves & Radial Glow */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          {/* Top Right Dark Organic Wave */}
          <div className="absolute -top-32 -right-32 w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] bg-gradient-to-bl from-primary/20 via-purple-900/10 to-transparent rounded-full blur-[130px]" />
          
          {/* Center Left Subtle Cyan Accent */}
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
              fill="url(#wave-gradient)"
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8066f7" stopOpacity="0.3" />
                <stop offset="1" stopColor="#22d3ee" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>

          {/* 3D Floating Metallic Spheres matching reference design */}
          {/* Sphere 1: Top Left */}
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-44 left-[10%] w-7 h-7 sm:w-9 sm:h-9 rounded-full shadow-2xl pointer-events-none"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #cbd5e1 30%, #475569 70%, #0f172a 100%)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,255,255,0.8)",
            }}
          />

          {/* Sphere 2: Center */}
          <motion.div
            animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-28 left-[45%] w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow-2xl pointer-events-none"
            style={{
              background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #cbd5e1 30%, #475569 70%, #0f172a 100%)",
              boxShadow: "0 10px 25px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,255,255,0.8)",
            }}
          />

          {/* Torus / Ring: Top Right */}
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
          {/* Breadcrumb: Home • About Us */}
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
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-16 sm:mb-24"
          >
            About Us
          </motion.h1>

          {/* Main Statement Split Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Bold Headline */}
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

            {/* Right Column: Narrative Copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-6 space-y-5 text-slate-300 text-sm sm:text-base md:text-lg font-light leading-relaxed"
            >
              <p>
                That&apos;s why we&apos;re committed to delivering innovative IT solutions to businesses of all sizes. Our team of experienced professionals is dedicated to helping you achieve your goals and thrive in a rapidly evolving digital landscape.
              </p>
              <p>
                We are an elite IT ecosystem that offers a wide range of services to help businesses succeed in the digital world. Our expertise includes web development, mobile development, cloud computing, cybersecurity, and digital marketing. We provide customized solutions to meet the unique needs of each of our clients from every size and nation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 
        ============================================================
        SECTION 2: 4 PILLARS (expertise, technology, solutions, results)
        Sleek wireframe 3D geometries with YaPaze color theme
        ============================================================
      */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-y border-white/5 bg-[#090915]/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* 3D Wireframe Visual */}
                  <div className="mb-6 flex items-center justify-start h-20">
                    {pillar.wireframe}
                  </div>

                  {/* Title (lowercase styled from reference design) */}
                  <h3 className="text-xl font-extrabold text-white tracking-wide mb-3 group-hover:text-cyan-400 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
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
        SECTION 3: FLOATING STATS CARD OVERLAPPING VIDEO/TEAM SHOWCASE
        ============================================================
      */}
      <section className="relative pt-16 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto relative">
          
          {/* Floating Pill Stats Card - Positioned overlapping the showcase */}
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

          {/* Team / Office Video Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl group"
          >
            {/* Image / Video frame */}
            <div className="relative h-[340px] sm:h-[480px] md:h-[560px] w-full">
              <Image
                src="/about.png"
                alt="YaPaze Technologies Engineering & Solutions Team"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90"
              />
              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050d] via-black/30 to-transparent" />

              {/* Play Button Beacon Overlay matching reference */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="relative group/btn flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 text-[#0c0d18] shadow-[0_0_40px_rgba(255,255,255,0.7)] backdrop-blur-md cursor-pointer transition-all duration-300"
                  aria-label="Play Video"
                >
                  <span className="absolute -inset-2 rounded-full border border-white/40 animate-ping opacity-60" />
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1 text-[#070712]" />
                </motion.button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 
        ============================================================
        SECTION 4: PARTNER / CLIENT BRANDS (Samsung, Google, Amazon, Windows, Sony)
        ============================================================
      */}
      <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-white/5">
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
        SECTION 5: BOTTOM CTA (Need IT Solutions? Let's start now.)
        ============================================================
      */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden text-center">
        {/* Background Waves & Floating Spheres */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-primary/15 rounded-full blur-[140px]" />

          {/* Flowing Wave Wireframe Lines */}
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

          {/* Floating Spheres */}
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

      {/* Global Footer & Scroll Aid */}
      <Footer />
      <ScrollToTop />
    </main>
  )
}
