"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion"
import {
  Terminal,
  ShieldCheck,
  Cpu,
  Zap,
  Sparkles,
  CheckCircle2,
  GitBranch,
  Play,
  Layers,
  Activity,
  Globe2,
} from "lucide-react"

export function Hero3DConsole() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState<"code" | "pipeline" | "security">("code")
  const [typedLines, setTypedLines] = useState(6)

  // Scroll Parallax for 3D Floating Widgets
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smoothConsoleScroll = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 20,
    restDelta: 0.001,
  })

  const widgetShieldParallaxY = useTransform(smoothConsoleScroll, [0, 1], [-20, 26])
  const widgetLatencyParallaxY = useTransform(smoothConsoleScroll, [0, 1], [24, -28])
  const widgetNeuralParallaxY = useTransform(smoothConsoleScroll, [0, 1], [-14, 20])

  // 3D Mouse Parallax Tilt
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { stiffness: 120, damping: 18 }
  const mouseXSpring = useSpring(mouseX, springConfig)
  const mouseYSpring = useSpring(mouseY, springConfig)

  // 3D rotation angles
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-2deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-16deg", "-2deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const clientX = e.clientX - rect.left
    const clientY = e.clientY - rect.top
    const xPct = clientX / width - 0.5
    const yPct = clientY / height - 0.5
    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[560px] mx-auto py-6 [perspective:1400px] select-none"
    >
      {/* Background 3D Cyber Mesh Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-30 blur-3xl bg-gradient-to-tr from-[#8066f7]/40 via-cyan-500/20 to-blue-600/30"
      />

      {/* 3D Tilting Canvas */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative rounded-3xl border border-white/15 bg-[#090b14]/90 backdrop-blur-2xl p-1 shadow-[0_30px_100px_-20px_rgba(128,102,247,0.35)]"
      >
        {/* Subtle Top Edge Highlight */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

        {/* Console Main Body */}
        <div className="rounded-[22px] bg-[#070913]/95 border border-white/5 overflow-hidden">
          
          {/* Mac Top Traffic Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]/60 shadow-[0_0_8px_rgba(255,95,87,0.6)]" />
              <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-[#d89e24]/60 shadow-[0_0_8px_rgba(254,188,46,0.5)]" />
              <span className="w-3 h-3 rounded-full bg-[#28c840] border border-[#1aab29]/60 shadow-[0_0_8px_rgba(40,200,64,0.6)]" />
            </div>

            {/* IDE Tabs */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors ${
                  activeTab === "code"
                    ? "bg-white/10 text-cyan-300 font-semibold border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>yapaze-core.ts</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("pipeline")}
                className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg transition-colors ${
                  activeTab === "pipeline"
                    ? "bg-white/10 text-cyan-300 font-semibold border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-purple-400" />
                <span>mesh-deploy.yaml</span>
              </button>
            </div>

            {/* Git Branch Badge */}
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
              <GitBranch className="w-3 h-3 text-[#8066f7]" />
              <span className="hidden sm:inline">v4.2-prod</span>
            </div>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-hidden relative min-h-[260px]">
            {/* Animated Laser Scanline Effect */}
            <motion.div
              animate={{ y: [0, 260, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-cyan-500/0 via-cyan-400/5 to-cyan-500/0 opacity-60"
            />

            {activeTab === "code" && (
              <div className="space-y-1">
                <div className="flex items-center gap-3 text-slate-500">
                  <span className="w-4 text-right select-none opacity-40">1</span>
                  <span>
                    <span className="text-[#c084fc] font-semibold">import</span>{" "}
                    <span className="text-cyan-300">&#123; NeuralMesh, CloudScale, Shield &#125;</span>{" "}
                    <span className="text-[#c084fc] font-semibold">from</span>{" "}
                    <span className="text-emerald-400">&quot;@yapaze/core&quot;</span>;
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-500">
                  <span className="w-4 text-right select-none opacity-40">2</span>
                  <span className="text-slate-500 italic">// Initialize enterprise AI infrastructure</span>
                </div>

                <div className="flex items-center gap-3 text-slate-500">
                  <span className="w-4 text-right select-none opacity-40">3</span>
                  <span>
                    <span className="text-[#c084fc] font-semibold">export async function</span>{" "}
                    <span className="text-[#60a5fa] font-bold">deployEcosystem</span>
                    <span className="text-slate-300">(</span>
                    <span className="text-amber-300">config</span>:{" "}
                    <span className="text-cyan-300">EnterpriseConfig</span>
                    <span className="text-slate-300">) &#123;</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-500 pl-4">
                  <span className="w-4 text-right select-none opacity-40">4</span>
                  <span>
                    <span className="text-[#c084fc] font-semibold">const</span>{" "}
                    <span className="text-white">cluster</span> ={" "}
                    <span className="text-[#c084fc] font-semibold">await</span>{" "}
                    <span className="text-cyan-300 font-semibold">NeuralMesh</span>.
                    <span className="text-[#60a5fa]">orchestrate</span>
                    <span className="text-slate-300">(&#123;</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-500 pl-8">
                  <span className="w-4 text-right select-none opacity-40">5</span>
                  <span>
                    <span className="text-slate-300">security</span>:{" "}
                    <span className="text-cyan-300">Shield</span>.
                    <span className="text-[#60a5fa]">zeroTrustProtocol</span>
                    <span className="text-slate-300">(</span>
                    <span className="text-emerald-400">&quot;quantum-grade&quot;</span>
                    <span className="text-slate-300">),</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-500 pl-8">
                  <span className="w-4 text-right select-none opacity-40">6</span>
                  <span>
                    <span className="text-slate-300">latency</span>:{" "}
                    <span className="text-amber-300">&quot;&lt; 10ms global edge&quot;</span>,
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-500 pl-8">
                  <span className="w-4 text-right select-none opacity-40">7</span>
                  <span>
                    <span className="text-slate-300">autoScale</span>:{" "}
                    <span className="text-[#c084fc]">true</span>,
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-500 pl-4">
                  <span className="w-4 text-right select-none opacity-40">8</span>
                  <span>
                    <span className="text-slate-300">&#125;);</span>
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-500 pl-4">
                  <span className="w-4 text-right select-none opacity-40">9</span>
                  <span>
                    <span className="text-[#c084fc] font-semibold">return</span>{" "}
                    <span className="text-slate-300">cluster.</span>
                    <span className="text-[#60a5fa]">startEngine</span>
                    <span className="text-slate-300">();</span>
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-cyan-400 ml-1.5 align-middle shadow-[0_0_8px_#22d3ee]"
                    />
                  </span>
                </div>

                <div className="flex items-center gap-3 text-slate-500">
                  <span className="w-4 text-right select-none opacity-40">10</span>
                  <span className="text-slate-300">&#125;</span>
                </div>
              </div>
            )}

            {activeTab === "pipeline" && (
              <div className="space-y-1 text-slate-400">
                <div>
                  <span className="text-purple-400 font-bold">version:</span>{" "}
                  <span className="text-emerald-400">&apos;4.0&apos;</span>
                </div>
                <div>
                  <span className="text-purple-400 font-bold">services:</span>
                </div>
                <div className="pl-4">
                  <span className="text-cyan-300 font-semibold">edge-nodes:</span>
                </div>
                <div className="pl-8">
                  <span className="text-slate-300">image:</span>{" "}
                  <span className="text-emerald-400">yapaze/mesh-agent:latest</span>
                </div>
                <div className="pl-8">
                  <span className="text-slate-300">replicas:</span>{" "}
                  <span className="text-amber-300">64</span>
                </div>
                <div className="pl-8">
                  <span className="text-slate-300">restart:</span>{" "}
                  <span className="text-[#c084fc]">always</span>
                </div>
                <div className="pl-8">
                  <span className="text-slate-300">healthcheck:</span>{" "}
                  <span className="text-emerald-400">200 OK</span>
                </div>
              </div>
            )}
          </div>

          {/* Integrated Console Terminal Execution Log */}
          <div className="bg-[#05060b] px-4 py-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-emerald-400 font-semibold">Build: PASSED</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">320 Edge Nodes Live</span>
            </div>

            <div className="flex items-center gap-1.5 text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>10,480 ops/sec</span>
            </div>
          </div>
        </div>

        {/* 3D Floating Glass Widget 1: Security Shield (Top-Right, high depth + scroll parallax) */}
        <motion.div
          style={{ y: widgetShieldParallaxY }}
          className="absolute -top-4 -right-1 sm:-top-5 sm:-right-6 z-20 pointer-events-none"
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ transform: "translateZ(55px)" }}
            className="rounded-xl sm:rounded-2xl border border-emerald-500/30 bg-[#08131d]/90 backdrop-blur-xl p-2 sm:p-3.5 shadow-[0_15px_40px_rgba(16,185,129,0.25)] flex items-center gap-2 sm:gap-3 pointer-events-auto"
          >
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wide">ZERO-TRUST</span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-slate-400 font-mono">100% Encrypted</p>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Floating Glass Widget 2: Latency & Speed HUD (Bottom-Left, depth + scroll parallax) */}
        <motion.div
          style={{ y: widgetLatencyParallaxY }}
          className="absolute -bottom-5 -left-1 sm:-bottom-6 sm:-left-6 z-20 pointer-events-none"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            style={{ transform: "translateZ(70px)" }}
            className="rounded-xl sm:rounded-2xl border border-cyan-500/30 bg-[#07131e]/90 backdrop-blur-xl p-2 sm:p-3.5 shadow-[0_15px_40px_rgba(34,211,238,0.25)] flex items-center gap-2 sm:gap-3 pointer-events-auto"
          >
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-bold text-white font-mono">LATENCY: 8.4ms</span>
              </div>
              {/* Animated Equalizer Waveform Bars */}
              <div className="flex items-end gap-0.5 sm:gap-1 h-2.5 sm:h-3 mt-1">
                {[40, 90, 60, 100, 75, 45, 85].map((height, i) => (
                  <motion.span
                    key={i}
                    animate={{ height: [`${height * 0.4}%`, `${height}%`, `${height * 0.3}%`] }}
                    transition={{ duration: 1 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
                    className="w-0.5 sm:w-1 rounded-full bg-cyan-400"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Floating Glass Widget 3: AI Neural Engine (Bottom-Right, subtle depth + scroll parallax) */}
        <motion.div
          style={{ y: widgetNeuralParallaxY }}
          className="hidden sm:block absolute -bottom-5 right-8 z-20 pointer-events-none"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            style={{ transform: "translateZ(45px)" }}
            className="rounded-2xl border border-purple-500/30 bg-[#120a22]/90 backdrop-blur-xl p-2.5 px-3.5 shadow-[0_15px_40px_rgba(168,85,247,0.25)] flex items-center gap-2.5 pointer-events-auto"
          >
            <div className="w-7 h-7 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.4)]">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-purple-200 uppercase tracking-wider block">Neural Engine</span>
              <span className="text-[9px] text-purple-400 font-mono">Autonomous Core v4</span>
            </div>
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  )
}
