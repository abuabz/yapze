"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { Shield, Cpu, ArrowRight, Activity, Sparkles, Terminal } from "lucide-react"

import { Hero3DConsole } from "./hero-3d-console"

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
  const heroRef = useRef<HTMLElement>(null)

  // Scroll Parallax Integration
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  // Silky-smooth spring physics for parallax tracking
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 22,
    restDelta: 0.001,
  })

  // Multi-plane depth parallax transforms
  const yBgPrimary = useTransform(smoothScroll, [0, 1], [0, 240])
  const yBgCyan = useTransform(smoothScroll, [0, 1], [0, -180])
  const scaleBgPrimary = useTransform(smoothScroll, [0, 1], [1, 1.25])
  const opacityBg = useTransform(smoothScroll, [0, 0.9], [1, 0.15])

  // Left Content Parallax (gentle vertical float & graceful fade)
  const yContent = useTransform(smoothScroll, [0, 1], [0, 75])
  const opacityContent = useTransform(smoothScroll, [0, 0.85], [1, 0.2])

  // Right 3D Console Parallax (shifts inversely in depth with subtle 3D tilt-back)
  const yConsole = useTransform(smoothScroll, [0, 1], [0, -65])
  const scaleConsole = useTransform(smoothScroll, [0, 1], [1, 0.94])
  const rotateXConsole = useTransform(smoothScroll, [0, 1], [0, 8])

  // Floating ambient cyber crosshairs parallax
  const yCrosshair1 = useTransform(smoothScroll, [0, 1], [0, 160])
  const yCrosshair2 = useTransform(smoothScroll, [0, 1], [0, -110])

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
  }, [displayedText, index, isDeleting])

  // Count up stats animation variables
  const stats = [
    { value: "99.9%", label: "System Uptime", icon: Activity },
    { value: "150+", label: "Completed Projects", icon: Cpu },
    { value: "100%", label: "Secure Protocols", icon: Shield },
  ]

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 px-4 sm:px-6 lg:px-8 select-none"
    >
      {/* Scroll-Driven Parallax Background Radial Lights */}
      <motion.div
        style={{
          y: yBgPrimary,
          scale: scaleBgPrimary,
          opacity: opacityBg,
        }}
        className="absolute top-1/4 left-1/4 w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] bg-primary/20 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none -z-10 animate-pulse"
      />

      <motion.div
        style={{
          y: yBgCyan,
          opacity: opacityBg,
        }}
        className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-cyan-500/15 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none -z-10"
      />


      <motion.div
        style={{ y: yCrosshair2 }}
        aria-hidden="true"
        className="hidden md:flex absolute bottom-20 left-[8%] z-0 items-center gap-2 px-3 py-1 rounded-lg border border-purple-500/20 bg-purple-500/[0.04] backdrop-blur-md text-[10px] font-mono text-purple-300/80 pointer-events-none"
      >
        <Terminal className="w-3 h-3 text-purple-400" />
        <span>FLOW::3D_CONNECTED</span>
      </motion.div>

      {/* Main Grid Container with Scroll Parallax */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10">

        {/* Left Side Content with Scroll Parallax */}
        <motion.div
          style={{
            y: yContent,
            opacity: opacityContent,
          }}
          className="lg:col-span-7 text-left space-y-6 sm:space-y-8"
        >
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glassmorphism border border-primary/20 text-[11px] sm:text-xs font-semibold text-primary tracking-wider"
          >
            <Activity className="w-3.5 h-3.5 text-primary animate-ping" />
            <span>WELCOME TO THE FUTURE OF IT</span>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
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
              className="text-sm sm:text-lg text-slate-300 max-w-xl leading-relaxed font-light"
            >
              YaPaze is a forward-thinking technological ecosystem. We pioneer highly advanced software engineering, impenetrable cybersecurity protocols, and scalable cloud networks to future-proof global enterprises.
            </motion.p>
          </div>

          {/* Interactive CTA buttons: Sleek, compact on mobile, exciting cyber aesthetic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-row items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto"
          >
            {/* Primary Action Button: "Get in Touch" */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex-1 sm:flex-initial group inline-flex items-center justify-center gap-2 px-3.5 py-2.5 sm:px-6 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white overflow-hidden shadow-[0_0_25px_rgba(128,102,247,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] border border-white/25 transition-all duration-300"
            >
              {/* Animated gradient background with shimmer */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#8066f7] via-[#9333ea] to-[#22d3ee] bg-[length:200%_auto] transition-all duration-500 group-hover:bg-[position:right_center]" />

              {/* Shimmer light sweep */}
              <motion.span
                animate={{
                  x: ["-100%", "200%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                  repeatDelay: 1.5,
                }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
              />

              {/* Live Status Beacon Dot */}
              <span className="relative z-10 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              </span>

              <span className="relative z-10 tracking-wide font-semibold sm:font-bold whitespace-nowrap">
                Get in Touch
              </span>

              <ArrowRight className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Secondary Action Button: "Explore Ecosystem" */}
            <motion.a
              href="#services"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex-1 sm:flex-initial group inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-2.5 sm:px-6 sm:py-3.5 rounded-xl font-semibold sm:font-bold text-xs sm:text-sm text-slate-200 hover:text-white bg-slate-900/60 backdrop-blur-xl border border-white/15 hover:border-cyan-400/50 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover gradient fill */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-cyan-500/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Glowing Cyber Sparkles Icon */}
              <Sparkles className="relative z-10 w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />

              <span className="relative z-10 tracking-wide whitespace-nowrap">
                Explore Ecosystem
              </span>

              <ArrowRight className="relative z-10 w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all" />
            </motion.a>
          </motion.div>

          {/* Floating Stats Board */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-3 gap-2.5 sm:gap-6 pt-6 sm:pt-8 border-t border-white/5 max-w-xl"
          >
            {stats.map((stat, i) => (
              <div key={i} className="space-y-0.5 sm:space-y-1">
                <div className="flex items-center gap-1 sm:gap-2 text-[#8066f7] font-mono text-[10px] sm:text-sm">
                  <stat.icon className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{stat.label}</span>
                </div>
                <div className="text-lg sm:text-3xl font-extrabold text-white">{stat.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - 3D Level Cyber Coding Console with Scroll Parallax */}
        <motion.div
          style={{
            y: yConsole,
            scale: scaleConsole,
            rotateX: rotateXConsole,
          }}
          className="lg:col-span-5 relative flex justify-center w-full px-1 sm:px-0"
        >
          <Hero3DConsole />
        </motion.div>

      </div>
    </section>
  )
}

