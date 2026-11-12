"use client"

import Lottie from "lottie-react"
import codingAnimation from "./lottie/coding-animation.json"

export default function CodingLottie({ className }: { className?: string }) {
  return <Lottie animationData={codingAnimation} loop autoplay className={className} />
}
