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
          className="text-3xl font-extrabold leading-tight min-[400px]:text-4xl tracking-tight text-white sm:text-6xl"
        >
          What <span className="gradient-text">We Do</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-5 max-w-2xl text-base font-light sm:mt-6 sm:text-lg leading-relaxed text-slate-300"
        >
          Six integrated capabilities, from the first line of code to the last mile of growth. Pick a service to see
          exactly how we can help.
        </motion.p>

     
      </div>
    </section>
  )
}
