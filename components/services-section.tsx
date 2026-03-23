"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Cpu,
  Shield,
  Cloud,
  Search,
  Zap,
  RefreshCw,
  HeartHandshake,
  Users,
  Target,
  Lightbulb,
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
const values = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    desc: "We constantly explore new ideas and emerging technologies to deliver future-ready digital solutions.",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Customer Focus",
    desc: "We place our clients at the heart of every decision, delivering value-driven technology that meets real business needs.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Integrity",
    desc: "We operate with transparency, honesty, and ethical responsibility in every interaction and project.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Quality Excellence",
    desc: "We maintain high standards and deliver reliable, secure, and scalable IT solutions with precision.",
  },
  {
    icon: <Shield className="w-9 h-9" />,
    // Slightly bigger for emphasis
    title: "Security First",
    desc: "We prioritize data protection and cybersecurity to ensure safe and trusted digital environments.",
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Continuous Improvement",
    desc: "We learn, evolve, and invest in our skills and processes to stay ahead in a fast-changing tech world.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8" />,
    title: "Collaboration",
    desc: "We believe in teamwork—working closely with clients and partners to unlock innovation and achieve shared goals.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Empowerment",
    desc: "We empower businesses with the tools and knowledge to leverage technology for growth and success.",
  }
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
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our<span className="gradient-text"> Services</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            At YaPaze Technologies, we take pride in delivering innovative, secure, and scalable solutions across industries.
            <br className="hidden md:block" />
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
                whileHover={{ y: -8, transition: { duration: 0.4 } }}
                className="group glassmorphism rounded-2xl p-6 border border-white/10 
                           hover:border-primary/50 backdrop-blur-xl
                           transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} p-3 mb-4 
                              group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </h3>

                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-foreground/70"
                    >
                      <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm leading-tight">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="mt-6 flex items-center gap-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 
                             translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500"
                >
                  <span>Explore Service</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        <motion.section
          className="mt-20 py-16 px-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Core Values of <span className="gradient-text">YaPaze Technologies</span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group glassmorphism rounded-xl p-5 border border-white/10 hover:border-primary/60 
                       backdrop-blur-xl transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div
                    className="p-3 rounded-full bg-gradient-to-br from-primary/20 
                           group-hover:from-primary/40 transition-all duration-500"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {/* Using smaller icons for core values as well */}
                      <div className="w-6 h-6 flex items-center justify-center">
                        {value.icon}
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-xs leading-normal">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </section>
  )
}