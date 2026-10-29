"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { Shield, Cpu, ArrowRight, Activity } from "lucide-react"

const CodingLottie = dynamic(() => import("./coding-lottie"), { ssr: false })

const words = [
  "AI-Driven Transformation",
  "Enterprise-Grade Software",
  "Smart Cloud Infrastructure",
  "Advanced Digital Security",
]

export function V2Hero() {
  const [index, setIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[index]
    const isWordComplete = !isDeleting && displayedText === currentWord
    const delay = isDeleting ? 15 : isWordComplete ? 700 : 45

    const timeout = setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true)
      } else if (isDeleting) {
        if (displayedText.length === 0) {
          setIsDeleting(false)
          setIndex((currentIndex) => (currentIndex + 1) % words.length)
        } else {
          setDisplayedText(displayedText.slice(0, -1))
        }
      } else {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1))
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [displayedText, index, isDeleting, words])

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
              className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              We Engineer <br />
              <span className="mt-1 grid pb-2">
                {/* Invisible copies reserve space for the tallest phrase so wrapped lines are never clipped */}
                {words.map((word) => (
                  <span key={word} aria-hidden="true" className="invisible col-start-1 row-start-1">
                    {word}
                  </span>
                ))}
                <span className="col-start-1 row-start-1 bg-gradient-to-r from-[#8066f7] to-cyan-400 bg-clip-text text-transparent">
                  {displayedText}
                  <span className="ml-0.5 animate-pulse text-cyan-400" aria-hidden="true">|</span>
                </span>
              </span>
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

        {/* Right Side - Coding & development Lottie animation */}
        <div className="lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[480px]"
          >
            <CodingLottie className="w-full h-auto" />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
