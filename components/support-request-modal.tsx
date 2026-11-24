"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  Zap,
  ShieldCheck,
  MessageSquare,
  MessageCircle,
  Send,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

interface SupportRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SupportRequestModal({ isOpen, onClose }: SupportRequestModalProps) {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: "",
    city: "",
    issueType: "",
    supportType: "Remote Support",
    thisIsFor: "Business / Enterprise",
    urgency: "Normal",
    problem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close on Escape, Lock Body Scroll & Deep-Blur background including Navbar
  useEffect(() => {
    if (!isOpen) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    // Blur main page container and floating navbar
    const mainEl = document.querySelector("main")
    const navContainers = document.querySelectorAll(".fixed.top-4, nav, header")

    if (mainEl) {
      mainEl.style.filter = "blur(10px)"
      mainEl.style.transition = "filter 0.3s ease"
    }

    navContainers.forEach((el) => {
      ;(el as HTMLElement).style.filter = "blur(10px)"
      ;(el as HTMLElement).style.transition = "filter 0.3s ease"
    })

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      if (mainEl) mainEl.style.filter = ""
      navContainers.forEach((el) => {
        ;(el as HTMLElement).style.filter = ""
      })
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const generateWhatsAppMessage = () => {
    return (
      `*NEW SUPPORT REQUEST - YaPaze Technologies*\n` +
      `───────────────────────────\n` +
      `*Full Name:* ${formData.fullName || "Not provided"}\n` +
      `*Mobile / WhatsApp:* ${formData.phone || "Not provided"}\n` +
      `*Email:* ${formData.email || "Not provided"}\n` +
      `*Country:* ${formData.country || "Not provided"}\n` +
      `*City:* ${formData.city || "Not provided"}\n` +
      `*Issue Type:* ${formData.issueType || "General Support"}\n` +
      `*Support Type:* ${formData.supportType}\n` +
      `*This is for:* ${formData.thisIsFor}\n` +
      `*Urgency:* ${formData.urgency}\n` +
      `───────────────────────────\n` +
      `*Describe the Problem:*\n${formData.problem || "Need technical assistance."}`
    )
  }

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.phone || !formData.problem) {
      alert("Please fill in your Full Name, Mobile/WhatsApp number, and Problem Description.")
      return
    }

    setIsSubmitting(true)
    const phoneNumber = "918714414438"
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      onClose()
    }, 1800)
  }

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.fullName || !formData.phone || !formData.problem) {
      alert("Please fill in your Full Name, Mobile/WhatsApp number, and Problem Description.")
      return
    }

    setIsSubmitting(true)
    const phoneNumber = "918714414438"
    const message = generateWhatsAppMessage()
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, "_blank")
    setIsSubmitting(false)
    setIsSuccess(true)
    setTimeout(() => {
      setIsSuccess(false)
      onClose()
    }, 1800)
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
          {/* Heavy Backdrop Blur covering everything including Navbar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-2xl"
            onClick={onClose}
          />

          {/* Modal Container in YaPaze Brand Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-[28px] sm:rounded-[36px] bg-[#090914] border border-[#8066f7]/30 shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_60px_rgba(128,102,247,0.25)] overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col"
          >
            {/* Ambient glows inside modal */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 z-30 cursor-pointer"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto flex-1 p-5 sm:p-7 lg:p-9 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                {/* Left Side: Dark Context & Trust Points */}
                <div className="lg:col-span-5 flex flex-col justify-between pr-0 lg:pr-2">
                  <div>
                    {/* Badge in YaPaze Theme */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-semibold mb-5 sm:mb-6">
                      <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                      RAISE A SUPPORT REQUEST
                    </div>

                    {/* Headline */}
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.18] mb-3">
                      Tell Us the Problem. <br className="hidden sm:inline" />
                      <span className="gradient-text">We&apos;ll Handle the Rest.</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6 sm:mb-8">
                      Send it on WhatsApp for the fastest reply, or submit the form and we&apos;ll call or email you.
                    </p>

                    {/* 3 Trust points */}
                    <div className="space-y-4 sm:space-y-5">
                      {/* Point 1 */}
                      <div className="flex items-start gap-3.5">
                        <div className="h-9 w-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 text-primary mt-0.5 shadow-[0_0_15px_rgba(128,102,247,0.3)]">
                          <Zap className="h-4 w-4 fill-current" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Fast response</h4>
                          <p className="text-xs text-slate-400 font-light mt-0.5 leading-relaxed">
                            Callback within 30 minutes during working hours.
                          </p>
                        </div>
                      </div>

                      {/* Point 2 */}
                      <div className="flex items-start gap-3.5">
                        <div className="h-9 w-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 text-primary mt-0.5 shadow-[0_0_15px_rgba(128,102,247,0.3)]">
                          <ShieldCheck className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Private & secure</h4>
                          <p className="text-xs text-slate-400 font-light mt-0.5 leading-relaxed">
                            We connect only with your permission, and you can end the session any time.
                          </p>
                        </div>
                      </div>

                      {/* Point 3 */}
                      <div className="flex items-start gap-3.5">
                        <div className="h-9 w-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center shrink-0 text-primary mt-0.5 shadow-[0_0_15px_rgba(128,102,247,0.3)]">
                          <MessageSquare className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Support in your language</h4>
                          <p className="text-xs text-slate-400 font-light mt-0.5 leading-relaxed">
                            English, Malayalam, Arabic and Hindi.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Left Bottom Contacts */}
                  <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-white/10">
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-white">
                      <a
                        href="https://wa.me/918714414438"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors flex items-center gap-1.5"
                      >
                        <Phone className="w-3.5 h-3.5 text-primary" />
                        <span>+91 8714414438</span>
                      </a>
                      <a
                        href="mailto:info@yapaze.net"
                        className="hover:text-primary transition-colors flex items-center gap-1.5"
                      >
                        <Mail className="w-3.5 h-3.5 text-primary" />
                        <span>info@yapaze.net</span>
                      </a>
                    </div>
                    <p className="text-[11px] text-slate-400 font-mono mt-1.5 flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>Mon–Sat · 9 AM – 9 PM</span>
                    </p>
                  </div>
                </div>

                {/* Right Side: Form Card in YaPaze Dark Theme */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl sm:rounded-3xl bg-[#0e0e1c]/95 border border-white/10 p-5 sm:p-7 lg:p-8 text-white shadow-2xl relative backdrop-blur-xl">
                    {/* Header */}
                    <div className="mb-5 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                        Support request
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Takes less than a minute. Fields marked * are required.
                      </p>
                    </div>

                    {/* Success Notice if submitted */}
                    {isSuccess && (
                      <div className="mb-4 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Support request submitted! Opening WhatsApp connection...</span>
                      </div>
                    )}

                    {/* Form */}
                    <form className="space-y-3.5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {/* Full name * */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Full name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="Your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-[#07070d] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:bg-[#0a0a14] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all"
                          />
                        </div>

                        {/* Mobile / WhatsApp * */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Mobile / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="05X XXX XXXX / +91..."
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-[#07070d] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:bg-[#0a0a14] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-[#07070d] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:bg-[#0a0a14] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all"
                          />
                        </div>

                        {/* Issue type * */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Issue type *
                          </label>
                          <div className="relative">
                            <select
                              name="issueType"
                              value={formData.issueType}
                              onChange={handleChange}
                              required
                              className="w-full appearance-none rounded-xl border border-white/10 bg-[#07070d] px-3.5 py-2.5 pr-8 text-xs sm:text-sm text-white focus:bg-[#0a0a14] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all cursor-pointer"
                            >
                              <option value="" disabled className="bg-[#0e0e1c] text-slate-500">
                                Select an issue
                              </option>
                              <option value="Website & Web App Issue" className="bg-[#0e0e1c] text-white">Website & Web App Issue</option>
                              <option value="Software / Business ERP Bug" className="bg-[#0e0e1c] text-white">Software / Business ERP Bug</option>
                              <option value="Cloud / Server Downtime" className="bg-[#0e0e1c] text-white">Cloud / Server Downtime</option>
                              <option value="Cybersecurity Threat / Malware" className="bg-[#0e0e1c] text-white">Cybersecurity Threat / Malware</option>
                              <option value="Email / DNS Configuration" className="bg-[#0e0e1c] text-white">Email / DNS Configuration</option>
                              <option value="Database / API Error" className="bg-[#0e0e1c] text-white">Database / API Error</option>
                              <option value="Hardware / Device Support" className="bg-[#0e0e1c] text-white">Hardware / Device Support</option>
                              <option value="Other IT Problem" className="bg-[#0e0e1c] text-white">Other IT Problem</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          </div>
                        </div>

                        {/* Country - Text Box */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Country
                          </label>
                          <input
                            type="text"
                            name="country"
                            placeholder="e.g. United Arab Emirates, India, UK..."
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-[#07070d] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:bg-[#0a0a14] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all"
                          />
                        </div>

                        {/* City - Text Box */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            City
                          </label>
                          <input
                            type="text"
                            name="city"
                            placeholder="e.g. Dubai, Abu Dhabi, Kochi..."
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full rounded-xl border border-white/10 bg-[#07070d] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:bg-[#0a0a14] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all"
                          />
                        </div>

                        {/* Support type */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Support type
                          </label>
                          <div className="relative">
                            <select
                              name="supportType"
                              value={formData.supportType}
                              onChange={handleChange}
                              className="w-full appearance-none rounded-xl border border-white/10 bg-[#07070d] px-3.5 py-2.5 pr-8 text-xs sm:text-sm text-white focus:bg-[#0a0a14] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all cursor-pointer"
                            >
                              <option value="Remote Support" className="bg-[#0e0e1c] text-white">Remote Support</option>
                              <option value="On-Site Support" className="bg-[#0e0e1c] text-white">On-Site Support</option>
                              <option value="Emergency Triage" className="bg-[#0e0e1c] text-white">Emergency Triage</option>
                              <option value="Consultation / Audit" className="bg-[#0e0e1c] text-white">Consultation / Audit</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          </div>
                        </div>

                        {/* Urgency */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Urgency
                          </label>
                          <div className="relative">
                            <select
                              name="urgency"
                              value={formData.urgency}
                              onChange={handleChange}
                              className="w-full appearance-none rounded-xl border border-white/10 bg-[#07070d] px-3.5 py-2.5 pr-8 text-xs sm:text-sm text-white focus:bg-[#0a0a14] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all cursor-pointer"
                            >
                              <option value="Low" className="bg-[#0e0e1c] text-white">Low</option>
                              <option value="Normal" className="bg-[#0e0e1c] text-white">Normal</option>
                              <option value="High" className="bg-[#0e0e1c] text-white">High</option>
                              <option value="Critical / Emergency" className="bg-[#0e0e1c] text-white">Critical / Emergency</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          </div>
                        </div>

                        {/* This is for */}
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            This is for
                          </label>
                          <div className="relative">
                            <select
                              name="thisIsFor"
                              value={formData.thisIsFor}
                              onChange={handleChange}
                              className="w-full appearance-none rounded-xl border border-white/10 bg-[#07070d] px-3.5 py-2.5 pr-8 text-xs sm:text-sm text-white focus:bg-[#0a0a14] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all cursor-pointer"
                            >
                              <option value="Home / Personal" className="bg-[#0e0e1c] text-white">Home / Personal</option>
                              <option value="Startup / SME" className="bg-[#0e0e1c] text-white">Startup / SME</option>
                              <option value="Business / Enterprise" className="bg-[#0e0e1c] text-white">Business / Enterprise</option>
                              <option value="Agency / Partner" className="bg-[#0e0e1c] text-white">Agency / Partner</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                          </div>
                        </div>
                      </div>

                      {/* Describe the problem * */}
                      <div className="pt-1">
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Describe the problem *
                        </label>
                        <textarea
                          name="problem"
                          rows={3}
                          required
                          placeholder="E.g. My website is down, database connectivity issue, email configuration error..."
                          value={formData.problem}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-[#07070d] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:bg-[#0a0a14] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/60 transition-all resize-none"
                        />
                      </div>

                      {/* Action Buttons in YaPaze Palette */}
                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        {/* Send via WhatsApp */}
                        <button
                          type="button"
                          onClick={handleSendWhatsApp}
                          disabled={isSubmitting}
                          className="flex-1 rounded-full bg-gradient-to-r from-[#25D366] to-[#1ebe5d] hover:from-[#2ae870] hover:to-[#22d167] py-3.5 px-5 font-bold text-black text-xs sm:text-sm shadow-[0_0_20px_rgba(37,211,102,0.35)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>Send via WhatsApp</span>
                        </button>

                        {/* Submit Request */}
                        <button
                          type="button"
                          onClick={handleSubmitRequest}
                          disabled={isSubmitting}
                          className="flex-1 rounded-full bg-gradient-to-r from-[#8066f7] via-[#7557f7] to-[#5d38eb] hover:from-[#8f74f8] hover:to-[#6d46f0] py-3.5 px-5 font-bold text-white text-xs sm:text-sm shadow-[0_0_25px_rgba(128,102,247,0.45)] hover:shadow-[0_0_35px_rgba(128,102,247,0.7)] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer border border-white/15"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Request</span>
                        </button>
                      </div>

                      {/* Legal text */}
                      <p className="text-[10px] text-slate-500 text-center pt-2">
                        By submitting, you agree that YaPaze Technologies may contact you about this request.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
