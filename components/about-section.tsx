"use client"

import { motion } from "framer-motion"

export function AboutSection() {
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
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              About <span className="gradient-text">YaPaze</span>
            </h2>

            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                At YaPaze Technologies, we empower businesses with next-gen digital solutions. From IT and Web
                Development to Cloud, Cybersecurity, and Digital Transformation, we deliver reliable and innovative
                services tailored to your needs.
              </p>
              <p>
                Our client-first approach means we go beyond services—we build partnerships that drive measurable
                results. By combining innovation, security, and adaptability, we ensure your business thrives in a
                fast-changing digital world.
              </p>
            </div>

            <motion.div className="pt-4" whileHover={{ x: 10 }}>
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all">
                Discover Our Story
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div variants={itemVariants} className="relative h-96">
            <div className="absolute inset-0 glassmorphism rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                <div className="text-6xl font-bold gradient-text opacity-20">YaPaze</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mission & Vision Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Our Mission</h3>
            <p className="text-foreground/80 leading-relaxed">
              To empower businesses with next-gen digital solutions by combining innovation, reliability, and
              expertise—helping them grow, adapt, and thrive in an ever-changing digital world.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
            <p className="text-foreground/80 leading-relaxed">
              To be a global leader in technology innovation, recognized for delivering transformative IT, web, and
              digital solutions that shape the future of businesses and communities.
            </p>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-8 text-center">
            Core <span className="gradient-text">Values</span>
          </motion.h3>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Innovation",
              "Integrity",
              "Client Success",
              "Excellence",
              "Collaboration",
              "Continuous Learning",
              "Responsibility",
            ].map((value, index) => (
              <motion.div
                key={value}
                variants={itemVariants}
                className="glassmorphism p-4 rounded-lg text-center hover:border-primary/50 transition-all"
              >
                <p className="font-semibold text-primary">{value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
