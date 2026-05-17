"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Construct WhatsApp message
    const phoneNumber = "918714414438"
    const text = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`

    // Simulate a short delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Open WhatsApp
    window.open(whatsappUrl, "_blank")

    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="contact" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left side - Content (only content changed) */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-lg text-foreground/70">
                Can you imagine a project with us? At YaPaze, we offer digital solutions tailored to your needs and help
                you stand out from the competition.
              </p>
            </div>

            <p className="text-foreground/70 leading-relaxed">
              Whether you have a small business or a large company, YaPaze has the perfect solution for you. Contact us
              today to learn more and get started on your project.
            </p>

            {/* Highly interactive Chat with Sales VIP Card */}

            {/* Contact Info Cards - Only content updated */}
            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@yapaze.net",
                  href: "mailto:info@yapaze.net",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: "+973 3936 2634",
                  href: "https://wa.me/97339362634",
                },
                {
                  icon: Phone,
                  label: "Mobile",
                  value: "+91 8714414438",
                  href: "tel:+918714414438",
                },
                {
                  icon: MapPin,
                  label: "Website",
                  value: "www.yapaze.net",
                  href: "https://www.yapaze.net",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 glassmorphism rounded-lg hover:border-primary/50 transition-all cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Right side - Form & Sales VIP Card (grouped in space-y-6) */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="glassmorphism p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 transition-colors text-foreground placeholder:text-foreground/40"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 transition-colors text-foreground placeholder:text-foreground/40"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary/50 transition-colors text-foreground placeholder:text-foreground/40 resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>

            {/* Highly interactive Chat with Sales VIP Card - Emerald Theme */}
            <motion.a
              href="mailto:hello@yapaze.net"
              variants={itemVariants}
              className="relative p-[1px] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group transition-all duration-300 flex"
              whileHover={{ y: -4, scale: 1.01 }}
            >
              {/* Spinning glassmorphism border sweep - ALWAYS ACTIVE */}
              <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_45%,#10b981_70%,#06b6d4_90%,transparent_100%)] opacity-100 -z-10 animate-[spin_3s_linear_infinite]" />

              {/* Card Content body */}
              <div className="relative bg-[#07070b]/90 backdrop-blur-xl w-full h-full rounded-[15px] p-6 text-left z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30 group-hover:bg-emerald-500/25 transition-all">
                    <MessageCircle className="w-8 h-8 text-emerald-400 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-[9px] font-mono font-bold text-emerald-400 tracking-wider">
                      SALES SUPPORT
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight">Chat with Sales</h3>
                    <p className="text-xs text-slate-300 leading-normal font-light">
                      Speak directly with our solutions architects about pricing & custom engineering.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto mt-2 sm:mt-0 gap-1 select-none">
                  <span className="text-[11px] sm:text-xs font-mono text-emerald-400 group-hover:text-cyan-400 font-bold transition-colors">
                    hello@yapaze.net
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/5 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    ONLINE
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}