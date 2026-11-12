"use client"

import React from "react"

// First row client names (scrolling to the right)
const clientsRow1 = [
  "NovaTech Global",
  "Aether Dynamics",
  "QuantumScale AI",
  "Apex FinTech",
  "Vanguard Systems",
  "Synthetix Health",
  "OmniSphere Labs",
  "Hyperion Digital",
  "Stratix Cloud",
  "CyberFortress",
  "Crestline Biotech",
  "Astra Capital",
]

// Second row client names (scrolling to the left)
const clientsRow2 = [
  "Nexus Matrix",
  "Orbitron Robotics",
  "PulseWave Analytics",
  "CipherSafe Corp",
  "EchoSphere AI",
  "Velocity Commerce",
  "Horizon Energy AI",
  "Prism Infotech",
  "Krypton Web3",
  "Starlight Networks",
  "Zenith Media",
  "Solaria Defense",
]

// Duplicated for seamless infinite loop
const duplicatedRow1 = [...clientsRow1, ...clientsRow1]
const duplicatedRow2 = [...clientsRow2, ...clientsRow2]

export function ClientsMarquee() {
  const maskStyle: React.CSSProperties = {
    WebkitMaskImage:
      "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.18) 5%, rgba(0, 0, 0, 0.6) 14%, rgba(0, 0, 0, 1) 24%, rgba(0, 0, 0, 1) 76%, rgba(0, 0, 0, 0.6) 86%, rgba(0, 0, 0, 0.18) 95%, rgba(0, 0, 0, 0) 100%)",
    maskImage:
      "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.18) 5%, rgba(0, 0, 0, 0.6) 14%, rgba(0, 0, 0, 1) 24%, rgba(0, 0, 0, 1) 76%, rgba(0, 0, 0, 0.6) 86%, rgba(0, 0, 0, 0.18) 95%, rgba(0, 0, 0, 0) 100%)",
  }

  return (
    /* Outer container with padding / margin on the 2 sides */
    <div className="w-full px-4 sm:px-8 md:px-14 lg:px-20 py-2 sm:py-3 select-none">
      {/* 
        Marquee track with low opacity on both sides via linear-gradient mask 
        (No colored or black boxes - 100% natural background blending)
      */}
      <div
        className="marquee-fade-mask overflow-hidden space-y-2 sm:space-y-3"
        style={maskStyle}
      >
        {/* ROW 1: Scrolling RIGHT side */}
        <div className="group overflow-hidden select-none py-0.5">
          <div className="animate-marquee-right flex items-center gap-4 sm:gap-6 w-max group-hover:[animation-play-state:paused]">
            {duplicatedRow1.map((name, idx) => (
              <div key={`r1-${idx}`} className="flex items-center gap-4 sm:gap-6 shrink-0">
                <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-slate-300 hover:text-primary transition-colors whitespace-nowrap cursor-default">
                  {name}
                </span>
                <span
                  className="text-primary/50 text-xs sm:text-sm font-mono select-none"
                  aria-hidden="true"
                >
                  |
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling LEFT side */}
        <div className="group overflow-hidden select-none py-0.5">
          <div className="animate-marquee-left flex items-center gap-4 sm:gap-6 w-max group-hover:[animation-play-state:paused]">
            {duplicatedRow2.map((name, idx) => (
              <div key={`r2-${idx}`} className="flex items-center gap-4 sm:gap-6 shrink-0">
                <span className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-slate-300 hover:text-cyan-400 transition-colors whitespace-nowrap cursor-default">
                  {name}
                </span>
                <span
                  className="text-cyan-400/50 text-xs sm:text-sm font-mono select-none"
                  aria-hidden="true"
                >
                  |
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
