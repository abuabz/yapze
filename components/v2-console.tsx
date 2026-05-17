"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Play, RotateCcw, AlertTriangle, ShieldCheck, Cpu, Database, CpuIcon } from "lucide-react"

interface LogEntry {
  text: string
  type: "info" | "success" | "warn" | "error" | "ai"
}

export function V2Console() {
  const [logs, setLogs] = useState<LogEntry[]>([
    { text: "SYSTEM BOOT: Yapaze OS v2.0.8 initialized.", type: "info" },
    { text: "SECURITY MATRIX: Secure core load complete [VIRTUAL_SHIELD: ACTIVE].", type: "success" },
    { text: "NETWORK NODE: Systems linked to cloud clusters. Uptime stable.", type: "info" },
    { text: "Welcome to YaPaze Terminal. Click a system check option below to execute command protocols.", type: "ai" }
  ])

  const [activeCommand, setActiveCommand] = useState<string | null>(null)
  const [cpuLoad, setCpuLoad] = useState(24)
  const [ramLoad, setRamLoad] = useState(41)
  const [temp, setTemp] = useState(38)
  const consoleEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [logs])

  // Simulate subtle ambient system changes
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad((prev) => Math.max(12, Math.min(85, prev + Math.floor(Math.random() * 9 - 4))))
      setRamLoad((prev) => Math.max(30, Math.min(75, prev + Math.floor(Math.random() * 5 - 2))))
      setTemp((prev) => Math.max(35, Math.min(52, prev + Math.floor(Math.random() * 3 - 1))))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const appendLogsWithDelay = (newLogs: LogEntry[], index = 0) => {
    if (index >= newLogs.length) {
      setActiveCommand(null)
      return
    }

    setLogs((prev) => [...prev, newLogs[index]])
    
    // Animate CPU spikes during operations
    setCpuLoad(Math.floor(Math.random() * 30) + 55)
    setTemp((prev) => prev + 2)

    setTimeout(() => {
      appendLogsWithDelay(newLogs, index + 1)
    }, 700)
  }

  const runCyberScan = () => {
    if (activeCommand) return
    setActiveCommand("cyber")
    const scanLogs: LogEntry[] = [
      { text: "CMD > run system_shield_scan --deep", type: "info" },
      { text: "SCANNING PORT CHANNELS: 1024 - 65535 analyzed...", type: "info" },
      { text: "THREAT DIAGNOSTIC: Checking file structures against security definition assets...", type: "info" },
      { text: "INTRUSION DETECTION: Zero threat footprints detected.", type: "success" },
      { text: "STATUS VERDICT: Firewall structural integrity is at 100% efficiency. Security Matrix fully secure.", type: "success" }
    ]
    appendLogsWithDelay(scanLogs)
  }

  const deployNode = () => {
    if (activeCommand) return
    setActiveCommand("deploy")
    const deployLogs: LogEntry[] = [
      { text: "CMD > cluster deploy --service=yapaze-api-node-v2", type: "info" },
      { text: "DOCKER: Building container image assets from repository source branch...", type: "info" },
      { text: "KUBERNETES: Allocating server pods in cluster [NODE_US_EAST_01]...", type: "info" },
      { text: "LOAD BALANCER: Registering target routes on port 443 with SSL proxy encryption...", type: "info" },
      { text: "STATUS VERDICT: Deployment SUCCESSFUL. URL route api.yapaze.net active.", type: "success" }
    ]
    appendLogsWithDelay(deployLogs)
  }

  const runAIMatrix = () => {
    if (activeCommand) return
    setActiveCommand("ai")
    const aiLogs: LogEntry[] = [
      { text: "CMD > ai init_matrix --mode=analytical", type: "info" },
      { text: "NEURAL NETWORK: Awakening 8.4 Billion parameter analytical engine...", type: "info" },
      { text: "AI PROBE: Querying ecosystem core telemetry stats...", type: "info" },
      { text: "YA_PAZE_AI_BOT > 'Ecosystem performance is in optimal status. Cloud database sync latency is at an all-time low (4.2ms). Security shields are fully integrated. No anomalies found. AI optimization protocols applied.'", type: "ai" }
    ]
    appendLogsWithDelay(aiLogs)
  }

  const clearLogs = () => {
    setLogs([
      { text: "SYSTEM STATUS: Console logs flushed successfully. Awaiting protocol instructions.", type: "info" }
    ])
    setCpuLoad(15)
    setTemp(35)
  }

  return (
    <section id="console" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#07070b]">
      {/* Background neon glows */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-[350px] h-[350px] bg-[#8066f7]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="text-xs font-bold text-[#8066f7] tracking-widest uppercase">
            LIVE PROTOCOLS DEMO
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ecosystem Core Console
          </h2>
          <p className="text-slate-400 font-light text-base sm:text-lg">
            Interact directly with our core telemetry panel to experience a simulation of our Cloud deployment, AI analysis, and Cyber security systems in action.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Buttons & Controls (4 columns) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* System Check Controls */}
            <div className="glassmorphism border border-white/5 rounded-3xl p-6 flex flex-col gap-4 text-left">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#8066f7]" />
                <span>Console Commands</span>
              </h3>
              
              <button
                onClick={runCyberScan}
                disabled={activeCommand !== null}
                className="w-full py-4 px-5 rounded-xl bg-white/5 border border-white/10 hover:border-[#8066f7]/40 text-left font-mono text-sm font-semibold flex items-center justify-between text-slate-200 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 group"
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
                  <span>Deep Cyber Scan</span>
                </span>
                <Play className="w-4 h-4 text-slate-400 group-hover:text-[#8066f7] group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={deployNode}
                disabled={activeCommand !== null}
                className="w-full py-4 px-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 text-left font-mono text-sm font-semibold flex items-center justify-between text-slate-200 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 group"
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Deploy API Node</span>
                </span>
                <Play className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={runAIMatrix}
                disabled={activeCommand !== null}
                className="w-full py-4 px-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 text-left font-mono text-sm font-semibold flex items-center justify-between text-slate-200 hover:text-white hover:bg-white/10 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 group"
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AI Analytical Probe</span>
                </span>
                <Play className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
              </button>

              <button
                onClick={clearLogs}
                className="w-full py-4 px-5 rounded-xl bg-red-500/10 border border-red-500/20 hover:border-red-500/40 text-left font-mono text-sm font-semibold flex items-center justify-between text-red-400 hover:text-red-300 hover:bg-red-500/15 transition-all duration-300 group"
              >
                <span className="flex items-center gap-2.5">
                  <RotateCcw className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  <span>Flush Shell Logs</span>
                </span>
              </button>
            </div>

            {/* Simulated Resource Meters */}
            <div className="glassmorphism border border-white/5 rounded-3xl p-6 flex flex-col gap-4 text-left font-mono text-xs text-slate-400">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2 font-sans">
                <Database className="w-5 h-5 text-cyan-400" />
                <span>Host Performance</span>
              </h3>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span>SYSTEM_TEMPERATURE</span>
                  <span className={temp > 45 ? "text-pink-500 font-bold" : "text-slate-300"}>{temp}°C</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${temp > 45 ? "bg-gradient-to-r from-pink-500 to-red-500" : "bg-gradient-to-r from-[#8066f7] to-cyan-400"}`}
                    style={{ width: `${(temp / 80) * 100}%` }}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span>CPU_USAGE_LOAD</span>
                  <span className={cpuLoad > 65 ? "text-cyan-400 font-bold" : "text-slate-300"}>{cpuLoad}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${cpuLoad > 65 ? "bg-cyan-400" : "bg-[#8066f7]"}`}
                    style={{ width: `${cpuLoad}%` }}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-[11px]">
                  <span>RAM_ALLOCATION</span>
                  <span className="text-slate-300">{ramLoad}%</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                    style={{ width: `${ramLoad}%` }}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Side: Simulated Command Terminal Screen (8 columns) */}
          <div className="lg:col-span-8 flex flex-col">
            <div className="flex-1 flex flex-col rounded-3xl border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative bg-black/60 backdrop-blur-xl">
              
              {/* Window Header */}
              <div className="bg-[#0e0e15] border-b border-white/5 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-rose-500 opacity-80" />
                  <span className="w-3.5 h-3.5 rounded-full bg-amber-500 opacity-80" />
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 opacity-80" />
                  <span className="ml-3 font-mono text-xs font-semibold text-slate-400 tracking-wider">
                    yaps_shell_v2.0_bash
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Terminal Screen Body */}
              <div className="flex-1 p-6 h-[400px] overflow-y-auto font-mono text-sm text-left space-y-3 scrollbar-thin select-text">
                {logs.map((log, index) => {
                  let colorClass = "text-slate-300"
                  let prefix = "[INFO] "

                  if (log.type === "success") {
                    colorClass = "text-emerald-400"
                    prefix = "[OK]   "
                  } else if (log.type === "warn") {
                    colorClass = "text-amber-400"
                    prefix = "[WARN] "
                  } else if (log.type === "error") {
                    colorClass = "text-pink-500 font-bold"
                    prefix = "[ERR]  "
                  } else if (log.type === "ai") {
                    colorClass = "text-cyan-400 font-medium"
                    prefix = "[AI]   "
                  }

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start ${colorClass}`}
                    >
                      <span className="text-slate-500 mr-2.5 select-none">{prefix}</span>
                      <span className="flex-1 whitespace-pre-wrap leading-relaxed">{log.text}</span>
                    </motion.div>
                  )
                })}
                <div ref={consoleEndRef} />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
