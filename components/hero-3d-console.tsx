import { ShieldCheck, Zap } from "lucide-react"

export function Hero3DConsole() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto py-6">
      <div className="rounded-2xl border border-white/15 bg-[#090b14] overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.03] border-b border-white/5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[11px] font-mono text-cyan-300">yapaze-core.ts</span>
        </div>

        <pre className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 overflow-x-auto">
          <code>
            <span className="text-purple-400">import</span>
            {" { NeuralMesh, Shield } "}
            <span className="text-purple-400">from</span>
            <span className="text-amber-300">{" \"@yapaze/core\""}</span>
            {";\n\n"}
            <span className="text-purple-400">const</span>
            {" cluster = "}
            <span className="text-purple-400">await</span>
            {" NeuralMesh.orchestrate({\n"}
            {"  security: Shield."}
            <span className="text-cyan-300">zeroTrust</span>
            {"(),\n"}
            {"  latency: "}
            <span className="text-amber-300">{"\"< 10ms\""}</span>
            {",\n  autoScale: "}
            <span className="text-purple-400">true</span>
            {",\n});"}
          </code>
        </pre>

        <div className="flex flex-wrap items-center gap-4 px-4 py-3 border-t border-white/5 text-[11px] font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <ShieldCheck className="w-4 h-4" /> Zero-Trust: 100% Encrypted
          </span>
          <span className="flex items-center gap-1.5 text-cyan-400">
            <Zap className="w-4 h-4" /> Latency: 8.4ms
          </span>
        </div>
      </div>
    </div>
  )
}
