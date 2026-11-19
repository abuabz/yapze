"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, FileText, ArrowRight } from "lucide-react"
import { SupportRequestModal } from "@/components/support-request-modal"

interface ItHelpCtaProps {
  className?: string
}

export function ItHelpCta({ className = "" }: ItHelpCtaProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const phoneNumber = "918714414438"
  const defaultText =
    "Hello YaPaze Technologies! I need IT help right now. Please connect me with an engineer."
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className={`relative w-full overflow-hidden rounded-3xl sm:rounded-[36px] bg-gradient-to-r from-[#8066f7] via-[#6f4ff5] to-[#5430de] p-8 sm:p-12 lg:p-14 shadow-[0_15px_50px_rgba(128,102,247,0.35)] border border-white/20 ${className}`}
      >
        {/* Subtle ambient light glows */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        {/* Content Layout */}
        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          {/* Left Text */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Need IT Help Right Now?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/90 font-light leading-relaxed">
              Message us on WhatsApp and an engineer will get back to you shortly.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto shrink-0">
            {/* Primary Action: Chat on WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#090912] hover:bg-black px-7 py-3.5 text-sm sm:text-base font-bold text-[#8066f7] hover:text-[#22d3ee] shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 text-center cursor-pointer border border-white/10"
            >
              <MessageCircle className="h-5 w-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>

            {/* Secondary Action: Raise a Request (Opens Connect Modal) */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 hover:border-white bg-transparent hover:bg-white/10 px-7 py-3.5 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95 text-center cursor-pointer"
            >
              <FileText className="h-4 w-4" />
              <span>Raise a Request</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Support Request Modal Window */}
      <SupportRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
