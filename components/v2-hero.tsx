"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Cpu, Cloud, Terminal, ArrowRight, Activity, CpuIcon } from "lucide-react"

export function V2Hero() {
  const words = [
    "Next-Gen Software",
    "Impenetrable Security",
    "Cloud Architectures",
    "Intelligent AI Systems",
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [words.length])

  // Count up stats animation variables
  const stats = [
    { value: "99.9%", label: "System Uptime", icon: Activity },
    { value: "150+", label: "Completed Projects", icon: Cpu },
    { value: "100%", label: "Secure Protocols", icon: Shield },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 px-4 sm:px-6 lg:px-8">
      {/* Radial lighting blur backdrop */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Side Content */}
        <div className="lg:col-span-7 text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glassmorphism border border-primary/20 text-xs font-semibold text-primary tracking-wider"
          >
            <Activity className="w-4 h-4 text-primary animate-ping" />
            <span>WELCOME TO THE FUTURE OF IT</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              We Engineer <br />
              <div className="h-[1.25em] relative overflow-hidden mt-1 pb-2">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-0 right-0 inline-block bg-gradient-to-r from-[#8066f7] to-cyan-400 bg-clip-text text-transparent"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-slate-300 max-w-xl leading-relaxed font-light"
            >
              YaPaze is a forward-thinking technological ecosystem. We pioneer highly advanced software engineering, impenetrable cybersecurity protocols, and scalable cloud networks to future-proof global enterprises.
            </motion.p>
          </div>

          {/* Interactive CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#console"
              className="px-8 py-4 rounded-xl font-bold bg-[#8066f7] hover:bg-[#6b51e2] text-white flex items-center gap-2 border border-white/10 hover:shadow-[0_0_30px_rgba(128,102,247,0.5)] transition-all duration-300 group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#services"
              className="px-8 py-4 rounded-xl font-bold bg-white/5 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white flex items-center gap-2 hover:bg-white/10 transition-all duration-300"
            >
              <span>Explore Ecosystem</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Floating Stats Board */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5 max-w-xl"
          >
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2 text-[#8066f7] font-mono text-sm">
                  <stat.icon className="w-4 h-4 text-cyan-400" />
                  <span>{stat.label}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Futuristic Glass Image Frame */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[400px] glassmorphism border border-primary/20 rounded-3xl p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-primary/40 transition-all duration-500"
          >
            {/* Ambient inner glow reflection effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#8066f7]/5 to-[#8066f7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

            <div className="relative overflow-hidden rounded-2xl border border-white/5 shadow-inner">
              {/* Float & Scale animation on the image itself */}
              <motion.img
                src="/yapazelandingimg.png"
                alt="YaPaze Technologies Ecosystem"
                className="w-full h-auto object-cover aspect-[4/3] sm:aspect-square transform group-hover:scale-105 transition-transform duration-700"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Glowing tech identifier tag */}
            <div className="flex items-center justify-between mt-4 px-2 font-mono text-[10px] text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>ECOSYSTEM_VIEW_01</span>
              </div>
              <span className="text-primary font-bold">SYSTEMS_ACTIVE</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
