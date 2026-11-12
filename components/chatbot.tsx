"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Mail, Sparkles, ChevronRight } from "lucide-react"

interface Message {
  id: string
  sender: "user" | "ai"
  text: string
  timestamp: Date
}

interface FAQItem {
  id: string
  question: string
  answer: string
  icon: string
}

// Preset Q&A Database for YaPaze Technologies
const FAQS: FAQItem[] = [
  {
    id: "services",
    question: "What digital services do you offer?",
    answer: "YaPaze specializes in premium, next-gen technology services:\n\n• Custom Web & App Development (Next.js, React, Tailwind, premium responsive animations)\n• Impenetrable Cybersecurity (Stateful firewalls, deep scanners, AES-256 data protection)\n• Enterprise Cloud Architecture (Kubernetes, AWS clusters, serverless scaling)\n• Intelligent AI Systems & Digital Transformations.",
    icon: "💼",
  },
  {
    id: "security",
    question: "Tell me about your CyberShield security.",
    answer: "Our CyberShield protocols implement advanced stateful firewalls, absolute end-to-end data encryption pipelines, automated API security vulnerability scans, and rigid compliance checks to safeguard your enterprise data against external threat vectors.",
    icon: "🔒",
  },
  {
    id: "cloud",
    question: "What are your cloud infrastructure uptimes?",
    answer: "We deploy clustered, multi-region container architectures across AWS, Google Cloud, and Azure. Backed by automated load balancers and auto-scaling serverless nodes, we guarantee 99.9% uptime and zero latency under peak workloads.",
    icon: "☁️",
  },
  {
    id: "stats",
    question: "What are your completed project statistics?",
    answer: "YaPaze stands out as an elite technological ecosystem. We have successfully completed over 100+ high-end projects for 75+ happy clients globally. Our systems operations are powered by a team of 20+ active engineers.",
    icon: "📈",
  },
  {
    id: "contact",
    question: "How do I contact sales or support?",
    answer: "For customized projects, quotes, or to chat with our solutions architects, you can email us directly at hello@yapaze.net or call +91 8714414438.\n\nYou can also click the direct Chat with Sales button located just below this contact form!",
    icon: "✉️",
  },
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState(false)
  const [hasNewMessage, setHasNewMessage] = useState(true) // Pulses a "1" badge on load

  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Initialize with welcome message
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        sender: "ai",
        text: "Welcome to YaPaze Technologies! 👋 Click any of the fixed questions below to get instant, accurate details regarding our services, security systems, cloud networks, and sales contacts.",
        timestamp: new Date(),
      },
    ])
  }, [])

  // Robust, crash-free scrolling to the bottom of the container
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleFAQClick = (faq: FAQItem) => {
    // Avoid double clicks during active typing wait
    if (isTyping) return

    // 1. Add User Question Bubble
    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: faq.question,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMsg])
    setHasNewMessage(false)
    setIsTyping(true)

    // 2. Add AI Answer Bubble after brief typing delay
    setTimeout(() => {
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text: faq.answer,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMsg])
      setIsTyping(false)
    }, 700)
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans text-white select-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            className="w-[calc(100vw-32px)] sm:w-[380px] h-[80vh] max-h-[500px] rounded-3xl overflow-hidden border border-[#8066f7]/40 bg-[#07070b]/98 shadow-[0_20px_50px_rgba(0,0,0,0.6),_0_0_30px_rgba(128,102,247,0.15)] flex flex-col relative mb-4 z-50"
          >
            {/* Header Panel */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/5 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-[#8066f7]/10 rounded-lg border border-[#8066f7]/30">
                  <Sparkles className="w-4 h-4 text-[#8066f7] filter drop-shadow-[0_0_6px_rgba(128,102,247,0.5)] animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-white">YaPaze Help Desk</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">ONLINE</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Viewport (Scroll Container) */}
            <div
              ref={scrollContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10 relative z-10"
            >
              {messages.map((msg) => {
                const isAI = msg.sender === "ai"
                return (
                  <div
                    key={msg.id}
                    className={`flex gap-2.5 max-w-[85%] ${isAI ? "mr-auto" : "ml-auto flex-row-reverse"}`}
                  >
                    {/* Avatar */}
                    {isAI && (
                      <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center border border-[#8066f7]/30 bg-[#8066f7]/10">
                        <MessageCircle className="w-3.5 h-3.5 text-[#8066f7]" />
                      </div>
                    )}

                    {/* Bubble */}
                    <div
                      className={`rounded-2xl p-3 text-xs leading-relaxed ${
                        isAI
                          ? "bg-white/5 border border-white/10 text-slate-100 rounded-tl-none text-left"
                          : "bg-[#8066f7] text-white rounded-tr-none shadow-[0_4px_12px_rgba(128,102,247,0.3)] ml-auto text-left"
                      }`}
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {msg.text}
                    </div>
                  </div>
                )
              })}

              {/* Simulated Typing State */}
              {isTyping && (
                <div className="flex gap-2.5 max-w-[85%] mr-auto">
                  <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center border border-[#8066f7]/30 bg-[#8066f7]/10 animate-pulse">
                    <MessageCircle className="w-3.5 h-3.5 text-[#8066f7]" />
                  </div>
                  <div className="bg-white/5 border border-white/10 text-slate-400 rounded-2xl rounded-tl-none p-3 text-xs flex items-center gap-1.5">
                    <span>Syncing answer</span>
                    <span className="flex gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Fixed FAQ Questions Panel - Premium Horizontal Card Slider */}
            <div className="p-3 border-t border-white/10 bg-[#0a0a0f]/95 space-y-1.5 relative z-10 w-full shrink-0">
              <div className="flex items-center justify-between px-1">
                <p className="text-[9px] font-bold tracking-widest text-slate-500 font-mono uppercase">
                  Select a Topic:
                </p>
                <span className="text-[9px] font-mono text-[#8066f7]/80 animate-pulse">Swipe →</span>
              </div>
              <div className="flex flex-row overflow-x-auto gap-2 pb-2 select-none w-full scroll-smooth [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#8066f7]/30 hover:[&::-webkit-scrollbar-thumb]:bg-[#8066f7]/60 [&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-width:thin] [scrollbar-color:rgba(128,102,247,0.3)_rgba(255,255,255,0.05)]">
                {FAQS.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleFAQClick(faq)}
                    disabled={isTyping}
                    className="w-[135px] h-[64px] shrink-0 text-left px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#8066f7]/40 flex flex-col justify-center transition-all duration-200 cursor-pointer disabled:opacity-50 group font-sans"
                  >
                    <div className="flex items-center gap-1.5 mb-1 shrink-0">
                      <span className="text-sm shrink-0">{faq.icon}</span>
                      <span className="text-[8px] font-mono font-bold tracking-wider text-slate-400 uppercase">FAQ</span>
                    </div>
                    <span className="text-[9.5px] font-semibold text-slate-200 group-hover:text-white transition-colors leading-snug line-clamp-2">
                      {faq.question}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Action Footer Email Redirection */}
            <div className="p-2.5 border-t border-white/10 bg-white/5 flex items-center justify-center relative z-10">
              <a
                href="mailto:hello@yapaze.net"
                className="text-[10px] font-mono font-bold text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Direct Sales Inquiries: hello@yapaze.net</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher trigger orb */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen)
          setHasNewMessage(false)
        }}
        className="w-14 h-14 bg-gradient-to-tr from-[#8066f7] to-cyan-400 p-[1px] rounded-full shadow-[0_10px_30px_rgba(128,102,247,0.35)] hover:shadow-[0_15px_35px_rgba(128,102,247,0.5)] cursor-pointer flex items-center justify-center relative group"
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#8066f7] to-cyan-400 rounded-full animate-ping opacity-25 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
        
        {/* Launcher Core Face */}
        <div className="w-full h-full bg-[#0a0a0f] rounded-full flex items-center justify-center text-white relative">
          <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300 filter drop-shadow-[0_0_8px_rgba(128,102,247,0.6)]" />
        </div>

        {/* Unread Alert Badge */}
        {hasNewMessage && (
          <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white shadow-lg border-2 border-[#0a0a0f]">
            1
          </span>
        )}
      </motion.button>
    </div>
  )
}
