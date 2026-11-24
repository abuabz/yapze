"use client"

import Lottie from "lottie-react"
import animationData from "./lottie/ai-animation.json"

interface AiChatbotAnimationProps {
  className?: string
}

export function AiChatbotAnimation({ className = "" }: AiChatbotAnimationProps) {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className={`w-[88vw] xs:w-[82vw] sm:w-full max-w-[360px] xs:max-w-[420px] sm:max-w-[500px] lg:max-w-[580px] scale-115 xs:scale-120 sm:scale-100 mx-auto select-none pointer-events-none transform-gpu origin-center ${className}`}
      />
    </div>
  )
}
