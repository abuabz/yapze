"use client"

import { motion } from "framer-motion"
import { Globe, Cloud, Shield, Zap, Lightbulb, Palette } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Custom web and mobile applications built with cutting-edge technologies.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets.",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description: "Transform your business processes with innovative digital strategies.",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description: "Expert guidance on technology strategy and implementation.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful and intuitive user experiences that drive engagement.",
  },
]

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            At YaPaze, we provide tailored solutions to meet your unique needs.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group glassmorphism p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 40px rgba(128, 102, 247, 0.2)",
                }}
              >
                <motion.div
                  className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{service.description}</p>

                <motion.div
                  className="mt-6 flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 5 }}
                >
                  Learn More →
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.6 }}
        >
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:bg-primary/90 transition-all">
            Explore All Services
          </button>
        </motion.div>
      </div>
    </section>
  )
}
