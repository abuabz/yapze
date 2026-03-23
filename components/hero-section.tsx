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
    <section style={{ backgroundImage: "url('/backgroundimglogo.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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

        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block mb-20 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary">
            Welcome to the Future
          </span>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg absolute bottom-2 right-2 md:right-2 md:bottom-2  m-5 max-w-sm text-left">
          <motion.h1 variants={itemVariants} className="text-xl md:text-2xl font-bold mb-2 leading-tight">
            Innovating <span className="gradient-text">Next-Gen</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-lg md:text-xl font-bold mb-3 gradient-text">
            SOLUTIONS
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm text-foreground/70 mb-4 leading-relaxed"
          >
            Smart, secure, and scalable IT solutions in Web & App Development, Cybersecurity, Cloud, and Digital
            Transformation.
          </motion.p>
        </div>


      </motion.div>

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
