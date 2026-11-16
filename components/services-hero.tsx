"use client"

import { motion } from "framer-motion"
import { services } from "@/lib/services-data"

export function ServicesHero() {
  return (
    <section className="relative px-4 pb-10 pt-28 sm:pb-16 sm:pt-36 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white text-center"
        >
          What <span className="gradient-text">We Do</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-5 max-w-2xl text-base sm:text-lg font-light leading-relaxed text-slate-300 text-center"
        >
          End-to-End Digital Engineering, Intelligent Cloud Solutions, and Cybersecurity Architecture Tailored to Fuel Enterprise Growth.
        </motion.p>
      </div>
    </section>
  )
}
