"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-cover bg-center bg-no-repeat bg-[url('/backgroundimglogo.webp')] md:bg-[url('/yapazelandingimg.png')]">
      {/* Dark overlay for contrast and depth (desktop only) */}
      <div className="hidden md:block absolute inset-0 bg-black/45 -z-10" />

      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Floating tech icons background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-20 h-20 border border-primary/20 rounded-lg"
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${10 + i * 10}%`,
              }}
            />
          ))}
        </div>



      </motion.div>

      {/* Mobile Card - Bottom Right Old Style */}
      <div className="md:hidden absolute bottom-2 right-2 m-5 max-w-sm w-[calc(100%-2.5rem)] z-20">
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg text-left"
        >
          <h1 className="text-xl font-bold mb-2 leading-tight">
            Innovating <span className="gradient-text">Next-Gen</span>
          </h1>

          <h2 className="text-lg font-bold mb-3 gradient-text">
            SOLUTIONS
          </h2>

          <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
            Smart, secure, and scalable IT solutions in Web & App Development, Cybersecurity, Cloud, and Digital
            Transformation.
          </p>
        </motion.div>
      </div>

      {/* Desktop Card - Center Left Glassmorphic Style */}
      <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-16 lg:left-24 max-w-sm w-full z-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="glassmorphism rounded-2xl p-8 shadow-[0_8px_32px_0_rgba(128,102,247,0.2)] text-left hover:border-[#8066f7]/50 transition-all duration-300 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#8066f7]/5 to-[#8066f7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <h1 className="text-xl md:text-2xl font-bold mb-2 leading-tight text-white">
            Innovating <span className="gradient-text">Next-Gen</span>
          </h1>

          <h2 className="text-lg md:text-xl font-bold mb-3 gradient-text">
            SOLUTIONS
          </h2>

          <p className="text-sm text-slate-200/90 mb-4 leading-relaxed">
            Smart, secure, and scalable IT solutions in Web & App Development, Cybersecurity, Cloud, and Digital
            Transformation.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
