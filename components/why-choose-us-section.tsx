"use client"

import { motion } from "framer-motion"
import { MessageCircle, Users, Cog, Zap, TrendingUp } from "lucide-react"

const features = [
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Round-the-clock customer support to assist you anytime.",
  },
  {
    icon: Users,
    title: "Skilled Professionals",
    description: "Expert team with years of industry experience.",
  },
  {
    icon: Cog,
    title: "End-to-End Solutions",
    description: "Complete solutions from planning to implementation.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising quality.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Solutions that grow with your business needs.",
  },
]

export function WhyChooseUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            We stand out through our commitment to excellence and client success.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glassmorphism p-6 rounded-xl text-center hover:border-primary/50 transition-all"
                whileHover={{ y: -5 }}
              >
                <motion.div className="mb-4 flex justify-center" whileHover={{ scale: 1.2, rotate: 10 }}>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </motion.div>

                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Animated stats section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "100+", label: "Happy Clients" },
            { number: "50+", label: "Team Members" },
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="glassmorphism p-8 rounded-2xl text-center">
              <motion.div
                className="text-4xl font-bold gradient-text mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-foreground/70">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
