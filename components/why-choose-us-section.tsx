"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  MessageCircle,
  Users,
  Cog,
  Zap,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Activity,
  Layers,
  Cpu,
  ArrowUpRight,
  Clock,
  Gauge,
  Server,
} from "lucide-react"

export function WhyChooseUsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative min-h-screen py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-300">
              The YaPaze Advantage
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            We engineer high-performance digital systems that combine uncompromising craftsmanship, enterprise velocity, and continuous partnership.
          </p>
        </motion.div>

        {/* Cyber Bento Grid with Unique Geometric Shapes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: End-to-End Solutions (Large Hero Bento Card - Spanning 2 columns on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="md:col-span-2 lg:col-span-2 relative group flex flex-col"
          >
            {/* Unique Chamfered Outer Shell (Top-right & Bottom-left cuts) */}
            <div
              className="relative p-[1.5px] transition-all duration-500 flex-1 flex flex-col"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
              }}
            >
              {/* Rotating Conic Gradient Border Highlight */}
              <div
                className={`absolute -inset-[150%] transition-opacity duration-500 -z-10 animate-[spin_5s_linear_infinite] ${
                  hoveredCard === 1 ? "opacity-100" : "opacity-45"
                }`}
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 40%, #8066f7 70%, #22d3ee 90%, transparent 100%)",
                }}
              />

              {/* Card Body */}
              <div
                className="relative flex-1 flex flex-col justify-between bg-[#080811]/95 backdrop-blur-2xl p-7 sm:p-9"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 30px 100%, 0 calc(100% - 30px))",
                }}
              >
                <div>
                  {/* Top Bar with Badge & Tech Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-primary/10 border border-primary/20">
                      <Cpu className="w-3.5 h-3.5 text-primary" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary font-semibold">
                        FULL LIFECYCLE 01
                      </span>
                    </div>
                    <span className="font-mono text-xs text-slate-500">100% IN-HOUSE CRAFTSMANSHIP</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    End-to-End Solutions
                    <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl mb-6">
                    Complete digital product engineering from conceptual blueprinting, UI/UX architecture, and full-stack software development to automated cloud infrastructure and ongoing enhancement.
                  </p>

                  {/* Interactive Animated SVG Pipeline Visual */}
                  <div className="relative py-4 px-4 rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden mb-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 relative z-10">
                      {[
                        { title: "Discovery", sub: "Strategic Audit" },
                        { title: "Architecture", sub: "System Design" },
                        { title: "Engineering", sub: "Clean Code" },
                        { title: "Deployment", sub: "Auto CI/CD" },
                      ].map((stage, idx) => (
                        <div key={idx} className="flex items-center gap-2 w-full sm:w-auto">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e0e1a] border border-white/10 w-full sm:w-auto">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                            <div>
                              <div className="text-xs font-bold text-white">{stage.title}</div>
                              <div className="text-[9px] font-mono text-slate-400">{stage.sub}</div>
                            </div>
                          </div>
                          {idx < 3 && (
                            <div className="hidden sm:block text-slate-600 font-mono text-xs">→</div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Animated laser pulse underlay */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-[1px]"
                      animate={{ left: ["-20%", "110%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </div>

                {/* Bottom deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/5">
                  {[
                    "Zero Hand-off Friction",
                    "Custom Cloud Native Architecture",
                    "Continuous Quality Engineering",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: 24/7 Support (Radar sonar & Live telemetry) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative group flex flex-col"
          >
            <div
              className="relative p-[1.5px] transition-all duration-500 flex-1 flex flex-col"
              style={{
                clipPath:
                  "polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)",
              }}
            >
              <div
                className={`absolute -inset-[150%] transition-opacity duration-500 -z-10 animate-[spin_5s_linear_infinite] ${
                  hoveredCard === 2 ? "opacity-100" : "opacity-45"
                }`}
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 40%, #22d3ee 70%, #8066f7 90%, transparent 100%)",
                }}
              />

              <div
                className="relative flex-1 flex flex-col justify-between bg-[#080811]/95 backdrop-blur-2xl p-7"
                style={{
                  clipPath:
                    "polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-400 font-semibold">
                        ALWAYS ON 02
                      </span>
                    </div>
                    {/* Live Ping Beacon */}
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-[9px] text-emerald-400 font-bold">ONLINE</span>
                    </div>
                  </div>

                  {/* Animated Radar Pulse Visual */}
                  <div className="relative h-28 my-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center overflow-hidden">
                    {/* Sonar circles */}
                    <div className="absolute w-20 h-20 rounded-full border border-cyan-500/20" />
                    <div className="absolute w-14 h-14 rounded-full border border-cyan-500/30" />
                    <motion.div
                      className="absolute w-20 h-20 rounded-full border border-cyan-400/50"
                      animate={{ scale: [0.6, 1.4], opacity: [0.8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    {/* Radar sweep beam */}
                    <div className="absolute w-20 h-20 rounded-full border-t-2 border-cyan-400 animate-[spin_3s_linear_infinite]" />
                    <MessageCircle className="w-7 h-7 text-cyan-300 relative z-10" />
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    24/7 Active Support
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                    Uninterrupted operational vigilance. Round-the-clock enterprise customer support and incident triage so your critical systems never skip a beat.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span>RESPONSE SLA:</span>
                  <span className="text-cyan-400 font-bold">&lt; 15 MINUTES</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Skilled Professionals (Constellation node network) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative group flex flex-col"
          >
            <div
              className="relative p-[1.5px] transition-all duration-500 flex-1 flex flex-col"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
              }}
            >
              <div
                className={`absolute -inset-[150%] transition-opacity duration-500 -z-10 animate-[spin_5s_linear_infinite] ${
                  hoveredCard === 3 ? "opacity-100" : "opacity-45"
                }`}
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 40%, #a78bfa 70%, #22d3ee 90%, transparent 100%)",
                }}
              />

              <div
                className="relative flex-1 flex flex-col justify-between bg-[#080811]/95 backdrop-blur-2xl p-7"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20">
                      <Users className="w-3.5 h-3.5 text-violet-400" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-violet-400 font-semibold">
                        ELITE TALENT 03
                      </span>
                    </div>
                    <span className="font-mono text-xs text-slate-500">EXPERTS ONLY</span>
                  </div>

                  {/* Animated Constellation Node Visual */}
                  <div className="relative h-28 my-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center overflow-hidden">
                    <svg className="w-32 h-20" viewBox="0 0 100 60">
                      {/* Connected Mesh */}
                      <motion.line
                        x1="20"
                        y1="30"
                        x2="50"
                        y2="15"
                        stroke="#8066f7"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                      />
                      <motion.line
                        x1="50"
                        y1="15"
                        x2="80"
                        y2="30"
                        stroke="#8066f7"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                      />
                      <motion.line
                        x1="50"
                        y1="15"
                        x2="50"
                        y2="45"
                        stroke="#22d3ee"
                        strokeWidth="1.5"
                      />
                      <motion.circle cx="20" cy="30" r="4" fill="#8066f7" />
                      <motion.circle cx="80" cy="30" r="4" fill="#22d3ee" />
                      <motion.circle cx="50" cy="45" r="4" fill="#a78bfa" />
                      <motion.circle
                        cx="50"
                        cy="15"
                        r="6"
                        fill="#8066f7"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    Skilled Professionals
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                    Seasoned engineers, certified cloud architects, and security veterans with proven enterprise track records building mission-critical software.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {["Cloud Architects", "Full-Stack Leads", "DevSecOps"].map((badge, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Fast Turnaround (Speedometer & Velocity Pulse) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative group flex flex-col"
          >
            <div
              className="relative p-[1.5px] transition-all duration-500 flex-1 flex flex-col"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
              }}
            >
              <div
                className={`absolute -inset-[150%] transition-opacity duration-500 -z-10 animate-[spin_5s_linear_infinite] ${
                  hoveredCard === 4 ? "opacity-100" : "opacity-45"
                }`}
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 40%, #38bdf8 70%, #ec4899 90%, transparent 100%)",
                }}
              />

              <div
                className="relative flex-1 flex flex-col justify-between bg-[#080811]/95 backdrop-blur-2xl p-7"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-amber-400 font-semibold">
                        RAPID VELOCITY 04
                      </span>
                    </div>
                    <span className="font-mono text-xs text-amber-400 font-bold">2X SPRINT SPEED</span>
                  </div>

                  {/* Animated Velocity Progress Gauge */}
                  <div className="relative h-28 my-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center p-4 overflow-hidden">
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 via-primary to-amber-400 rounded-full shadow-[0_0_12px_#8066f7]"
                        animate={{ width: ["15%", "95%", "15%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                    <div className="flex items-center justify-between w-full mt-3 font-mono text-[10px] text-slate-400">
                      <span>INITIATION</span>
                      <span className="text-white font-bold">PRODUCTION SHIP</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    Fast Turnaround
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                    High-velocity delivery without quality trade-offs. Streamlined 2-week agile sprint iterations that ship demonstrable features continually.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span>AGILE CYCLES:</span>
                  <span className="text-amber-400 font-bold">2-WEEK SPRINTS</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Scalable Solutions (Isometric Server Stack) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
            className="relative group flex flex-col"
          >
            <div
              className="relative p-[1.5px] transition-all duration-500 flex-1 flex flex-col"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
              }}
            >
              <div
                className={`absolute -inset-[150%] transition-opacity duration-500 -z-10 animate-[spin_5s_linear_infinite] ${
                  hoveredCard === 5 ? "opacity-100" : "opacity-45"
                }`}
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 40%, #10b981 70%, #8066f7 90%, transparent 100%)",
                }}
              />

              <div
                className="relative flex-1 flex flex-col justify-between bg-[#080811]/95 backdrop-blur-2xl p-7"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
                        INFINITE SCALE 05
                      </span>
                    </div>
                    <span className="font-mono text-xs text-slate-500">AUTO-ELASTIC</span>
                  </div>

                  {/* Animated Isometric Server Tier Stack */}
                  <div className="relative h-28 my-3 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center gap-2 overflow-hidden">
                    {[0, 1, 2].map((tier) => (
                      <motion.div
                        key={tier}
                        className="w-36 h-5 rounded bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between px-3"
                        animate={{
                          borderColor: [
                            "rgba(16, 185, 129, 0.3)",
                            "rgba(34, 211, 238, 0.7)",
                            "rgba(16, 185, 129, 0.3)",
                          ],
                        }}
                        transition={{ duration: 2, delay: tier * 0.4, repeat: Infinity }}
                      >
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span className="font-mono text-[9px] text-slate-300">NODE_0{tier + 1}</span>
                        </div>
                        <span className="font-mono text-[9px] text-cyan-400">99.9% LOAD</span>
                      </motion.div>
                    ))}
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    Scalable Architecture
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                    Architected for hyper-growth. Cloud-native microservices and modular topologies designed to seamlessly scale from 10 to 10M users without re-platforming.
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400">
                  <span>SCALE FACTOR:</span>
                  <span className="text-emerald-400 font-bold">10X TRAFFIC READY</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Cyber Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          {[
            {
              number: "100+",
              label: "Projects Completed",
              detail: "Across FinTech, SaaS & HealthTech",
              accent: "#8066f7",
            },
            {
              number: "75+",
              label: "Happy Clients",
              detail: "98% Customer Satisfaction & Retention",
              accent: "#22d3ee",
            },
            {
              number: "20+",
              label: "Team Members",
              detail: "Elite Engineers, Designers & Architects",
              accent: "#ec4899",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative p-[1.5px] group transition-all duration-300 flex"
              whileHover={{ y: -6 }}
              style={{
                clipPath:
                  "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
              }}
            >
              {/* Rotating glassmorphism border sweep */}
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_45%,#8066f7_70%,#22d3ee_90%,transparent_100%)] opacity-80 group-hover:opacity-100 -z-10 animate-[spin_4s_linear_infinite]" />

              {/* Card Content body */}
              <div
                className="relative bg-[#07070e]/95 backdrop-blur-2xl w-full h-full p-8 text-center z-10 flex flex-col items-center justify-center"
                style={{
                  clipPath:
                    "polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)",
                }}
              >
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 mb-3 font-mono text-[9px] text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  VERIFIED METRIC
                </div>

                <motion.div
                  className="text-4xl sm:text-5xl font-black gradient-text mb-2 tracking-tight"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                >
                  {stat.number}
                </motion.div>
                <h4 className="text-base font-bold text-white mb-1">{stat.label}</h4>
                <p className="text-xs text-slate-400 font-light">{stat.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
