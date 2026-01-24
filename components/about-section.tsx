"use client"

import { motion } from "framer-motion"
import {
  Zap,
  Users,
  Shield,
  Target,
  Lightbulb,
  RefreshCw,
  HeartHandshake
} from "lucide-react"

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
          <motion.div variants={itemVariants} className="relative h-[185px] md:h-[265px]">
            <div className="absolute inset-0 glassmorphism rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  backgroundImage: "url('/about01.png')",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              // animate={{
              //   backgroundPosition: ["100% 100%", "0% 100%"],
              // }}
              // transition={{
              //   duration: 8,
              //   repeat: Number.POSITIVE_INFINITY,
              //   repeatType: "reverse",
              // }}
              >

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
              Our mission is to build reliable, secure, and customer-centric technology solutions that simplify business operations. We aim to deliver innovation with quality, ensure long-term support, and create digital value that drives success for every client.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glassmorphism p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h3>
            <p className="text-foreground/80 leading-relaxed">
              To become a trusted global technology partner, delivering intelligent and scalable IT solutions that empower businesses to grow, innovate, and transform the future.
            </p>
          </motion.div>
        </motion.div>

        {/* Core Values */}
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
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group glassmorphism rounded-2xl p-6 border border-white/10 hover:border-primary/60 
                       backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className="p-4 rounded-full bg-gradient-to-br from-primary/20 
                           group-hover:from-primary/40 transition-all duration-500"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-foreground">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
