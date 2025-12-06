"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Cpu,
  Shield,
  Cloud,
  Search,
  Zap,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    title: "Web & App Development",
    items: [
      "Responsive business websites with modern UI/UX",
      "Scalable e-commerce platforms with secure payments",
      "Custom mobile apps (iOS & Android) for all industries",
    ],
  },
  {
    icon: Cpu,
    gradient: "from-purple-500 to-pink-500",
    title: "Software Solutions",
    items: [
      "Custom ERP & CRM systems for SMEs and enterprises",
      "Workflow automation & process optimization tools",
      "Real-time analytics dashboards and reporting",
    ],
  },
  {
    icon: Shield,
    gradient: "from-red-500 to-orange-500",
    title: "Cybersecurity Services",
    items: [
      "End-to-end network security & penetration testing",
      "Threat detection, monitoring & incident response",
      "Data encryption and compliance (GDPR, HIPAA, etc.)",
    ],
  },
  {
    icon: Cloud,
    gradient: "from-indigo-500 to-blue-600",
    title: "Cloud Computing & IT Services",
    items: [
      "Cloud migration (AWS, Azure, Google Cloud)",
      "24/7 managed IT support and infrastructure monitoring",
      "Virtualization & disaster recovery planning",
    ],
  },
  {
    icon: Search,
    gradient: "from-green-500 to-emerald-600",
    title: "Digital Marketing",
    items: [
      "SEO strategies that tripled organic traffic for clients",
      "High-ROI social media & Google Ads campaigns",
      "Complete branding, content & online presence growth",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-10 px-6 overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header – Fixed syntax error was here */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Next-Gen <span className="gradient-text">Solutions</span> That Deliver Results
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            At YaPaze Technologies, we take pride in delivering innovative, secure, and scalable solutions across industries.
            <br className="hidden md:block" />
            Our portfolio reflects our commitment to quality, performance, and measurable business impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -12, transition: { duration: 0.4 } }}
                className="group glassmorphism rounded-3xl p-8 border border-white/10 
                           hover:border-primary/50 backdrop-blur-xl
                           transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-6 
                              group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <ul className="space-y-4">
                  {service.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-8 flex items-center gap-3 text-primary font-bold opacity-0 group-hover:opacity-100 
                             translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500"
                >
                  <span>Explore Service</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <button className="px-5 py-5 bg-primary text-white text-lg font-bold rounded-full 
                             hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 
                             transform hover:scale-105 transition-all duration-300">
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  )
}