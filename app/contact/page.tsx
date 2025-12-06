// app/contact/page.tsx

"use client"                     // ← This fixes the error!

import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"


const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer a wide range of IT solutions including website & mobile app development, custom software, ERP/CRM, automation tools, cloud services, cybersecurity, IT support, and tech consulting.",
  },
  {
    question: "Do you work with small businesses or only large companies?",
    answer:
      "We work with everyone — startups, small businesses, and large enterprises. Our solutions are flexible and customized for every budget and size.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes! We are a 100% remote freelance IT company delivering high-quality services worldwide.",
  },
  {
    question: "How do I get a quotation?",
    answer:
      "Just message us on WhatsApp (+973 3936 2634), call, or email info@yapaze.com. We’ll discuss your project and send a detailed quote within 24 hours.",
  },
  {
    question: "How is payment handled?",
    answer:
      "We use milestone-based payments:\n• 20–30% advance\n• Progress payments\n• Final payment on delivery\nAccepted: UPI, Bank Transfer, PayPal, Wise, Crypto (USDT), etc.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Depends on scope:\n• Landing page: 3–7 days\n• Business website: 2–4 weeks\n• Web/Mobile app: 4–12 weeks\n• Custom software: 2–6+ months",
  },
  {
    question: "Do you provide support after project completion?",
    answer:
      "Yes! We offer maintenance, updates, bug fixes, security monitoring, and flexible monthly support plans.",
  },
  {
    question: "Can you work on long-term/ongoing projects?",
    answer:
      "Absolutely. We offer monthly retainers, dedicated developers, and managed IT services.",
  },
  {
    question: "What if I don’t know the technical requirements?",
    answer:
      "No worries! We help you define everything from scratch and recommend the best, most cost-effective solution.",
  },
  {
      "question": "Why choose YaPaze Technologies?",
      "answer": "• Affordable pricing with enterprise quality\n• Transparent & honest communication\n• Fast and secure delivery\n• Customer-first approach\n• Professional standards at freelance rates"
    }
  ]


function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Everything you need to know before working with us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-96 pb-6 pt-2" : "max-h-0"
                }`}
              >
                <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ContactSection />
        <FAQSection />
      </div>
      <Footer />
    </main>
  )
}