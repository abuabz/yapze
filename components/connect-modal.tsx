"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronDown, Send } from "lucide-react"

interface ConnectModalProps {
  isOpen: boolean
  onClose: () => void
}

const servicesList = [
  "Web & App Development",
  "Software & Business Solutions",
  "Cybersecurity Solutions",
  "Cloud & Managed IT Solutions",
  "SEO & Digital Marketing",
  "Future Skills & Innovation",
  "Other / General Inquiry",
]

export function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Close on Escape key and lock body scroll
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const phoneNumber = "918714414438"

    const formattedMessage =
      `*New Inquiry from YaPaze Website*\n\n` +
      `*Full Name:* ${formData.name || "Not provided"}\n` +
      `*Email:* ${formData.email || "Not provided"}\n` +
      `*Phone Number:* ${formData.phone || "Not provided"}\n` +
      `*Selected Service:* ${formData.service || "General Inquiry"}\n\n` +
      `*Message:*\n${formData.message || "Hi, I would like to connect regarding your services."}`

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-[#0d0d16] border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] p-6 sm:p-8 z-10 overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Heading */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Connect <span className="gradient-text">With Us</span>
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#07070d] border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#07070d] border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Phone Number */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#07070d] border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              {/* Select Service Dropdown */}
              <div className="relative">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full appearance-none rounded-xl bg-[#07070d] border border-white/10 px-4 py-3 pr-10 text-sm text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all cursor-pointer"
                >
                  <option value="" disabled className="bg-[#0d0d16] text-slate-500">
                    Select Service
                  </option>
                  {servicesList.map((service) => (
                    <option key={service} value={service} className="bg-[#0d0d16] text-white">
                      {service}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-[#07070d] border border-white/10 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-[#8066f7] via-[#7557f7] to-[#623ce6] hover:from-[#8d74f8] hover:to-[#6f47ed] py-3.5 px-4 font-bold text-white text-sm shadow-[0_0_25px_rgba(128,102,247,0.45)] hover:shadow-[0_0_35px_rgba(128,102,247,0.7)] border border-white/15 active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Connecting..." : "Send Message"}</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
