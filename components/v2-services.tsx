"use client"

import { motion } from "framer-motion"
import { Monitor, Shield, Cloud, BrainCircuit, ArrowUpRight, Code, Database, Lock, Server } from "lucide-react"

export function V2Services() {
  const services = [
    {
      title: "Web & App Development",
      description: "We engineer highly responsive, fast, and feature-rich web and mobile platforms with robust backend integrations.",
      icon: Monitor,
      tech: ["Next.js", "React Native", "TypeScript", "Node.js"],
      color: "from-violet-500/20 to-purple-500/5",
      borderColor: "group-hover:border-violet-500/40",
      iconColor: "text-violet-400",
      glowColor: "rgba(139, 92, 246, 0.15)",
    },
    {
      title: "Cybersecurity Systems",
      description: "Our security engineers provide penetration testing, active firewall shields, vulnerability assessments, and threat containment.",
      icon: Shield,
      tech: ["Zero Trust", "IAM", "SOC Operations", "Pen Testing"],
      color: "from-pink-500/20 to-rose-500/5",
      borderColor: "group-hover:border-pink-500/40",
      iconColor: "text-pink-400",
      glowColor: "rgba(236, 72, 153, 0.15)",
    },
    {
      title: "Cloud & DevOps Operations",
      description: "Architecting serverless cloud infrastructures, automated CI/CD pipelines, and high-availability database cluster setups.",
      icon: Cloud,
      tech: ["AWS", "Kubernetes", "Docker", "Terraform"],
      color: "from-emerald-500/20 to-teal-500/5",
      borderColor: "group-hover:border-emerald-500/40",
      iconColor: "text-emerald-400",
      glowColor: "rgba(16, 185, 129, 0.15)",
    },
    {
      title: "Intelligent AI & ML Solutions",
      description: "Integrating advanced neural networks, LLM integrations, autonomous agents, and intelligence analytics to optimize pipelines.",
      icon: BrainCircuit,
      tech: ["PyTorch", "OpenAI API", "Vector DBs", "Deep Learning"],
      color: "from-cyan-500/20 to-blue-500/5",
      borderColor: "group-hover:border-cyan-500/40",
      iconColor: "text-cyan-400",
      glowColor: "rgba(6, 182, 212, 0.15)",
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8">
      {/* Decorative vector background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Text */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold text-primary tracking-widest uppercase"
          >
            OUR TECHNOLOGICAL CAPABILITIES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Futuristic IT Ecosystems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 font-light text-base sm:text-lg"
          >
            We assemble cutting-edge technological frameworks to engineer agile, modern systems that scale seamlessly.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`group relative glassmorphism border border-white/5 rounded-3xl p-8 hover:shadow-[0_15px_40px_${service.glowColor}] transition-all duration-500 overflow-hidden text-left`}
              >
                {/* Background lighting gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                <div className={`absolute inset-0 border border-transparent rounded-3xl transition-colors duration-500 ${service.borderColor}`} />
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-3xl flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-white/10 transition-all duration-300 pointer-events-none">
                  <ArrowUpRight className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                </div>

                {/* Service Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-black/40 border border-white/10 shadow-inner group-hover:border-white/20 transition-all duration-300">
                    <IconComponent className={`w-8 h-8 ${service.iconColor} filter drop-shadow-[0_0_8px_${service.glowColor}]`} />
                  </div>
                </div>

                {/* Service Content */}
                <div className="relative space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">
                    {service.title
                  }</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                {/* Service Tech Tags */}
                <div className="relative pt-6 border-t border-white/5 mt-6 flex flex-wrap gap-2">
                  {service.tech.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] font-mono text-slate-300 tracking-wider hover:bg-white/10 hover:text-white transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
