"use client"

import Lottie from "lottie-react"
import animationData from "./lottie/ai-animation.json"

interface AiChatbotAnimationProps {
  className?: string
}

export function AiChatbotAnimation({ className = "" }: AiChatbotAnimationProps) {
  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={`w-full max-w-[480px] sm:max-w-[520px] lg:max-w-[580px] mx-auto select-none pointer-events-none ${className}`}
    />
  )
}
