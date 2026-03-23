"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  Zap,
  Users,
  Shield,
  Target,
  Lightbulb,
  RefreshCw,
  HeartHandshake,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission')

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
          className="grid md:grid-cols-2 gap-12 items-center "
        >
          {/* Left side - Content */}
          <motion.div variants={itemVariants} className="space-y-6 ">

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              About <span className="gradient-text">Us</span>
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
              <Link href="/about">
                <button className="px-4 flex   cursor-pointer items-center gap-2 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all">
                  More Info <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
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

        <div className="mt-32 relative py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 relative">

              {/* Left Side: Glowing Sphere Toggle */}
              <div
                className="relative group cursor-pointer"
                onClick={() => setActiveTab(activeTab === 'mission' ? 'vision' : 'mission')}
                onMouseEnter={() => setActiveTab(activeTab === 'mission' ? 'vision' : 'mission')}
              >
                {/* Outer Glow */}
                <motion.div
                  className="absolute inset-0 bg-primary/30 rounded-full blur-[80px]"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* The Sphere */}
                <motion.div
                  className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-black via-[#0a0a2e] to-[#1a1a4e] flex items-center justify-center p-8 border border-white/10 shadow-2xl overflow-hidden shadow-primary/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Inner Shadow for 3D effect */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(128,102,247,0.3)] pointer-events-none" />

                  {/* Subtle highlight */}
                  <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent)] pointer-events-none" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="flex items-center gap-4 pointer-events-none"
                    >
                      <div className="flex flex-col text-left">
                        <span className="text-5xl md:text-6xl opacity-80 font-black tracking-tighter text-white leading-[0.8] flex items-center gap-2">Our <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-16 md:h-16">
                          <path d="M14 14L34 34M34 34V14M34 34H14" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg></span>
                        <h3 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.8]">
                          {activeTab === 'mission' ? 'Mission' : 'Vision'}
                        </h3>
                      </div>
                      <motion.div
                        animate={{ rotate: activeTab === 'mission' ? 0 : 180 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6 md:mt-10"
                      >

                      </motion.div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Decorative curved line behind the sphere */}
                  <div className="absolute -left-20 -bottom-20 w-[150%] h-[150%] border-[40px] border-primary/5 rounded-full -z-10" />
                </motion.div>

                {/* Info tool-tip-like text */}

              </div>

              {/* Right Side: Content Wrapper */}
              <div className="flex-1 space-y-12 relative">
                {/* Brand Mark in Top Right */}
                <div className="absolute -top-12 -right-4 md:-top-20 md:right-0 opacity-40">
                  <div className="w-16 h-16 md:w-24 md:h-24 text-primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="relative pl-12"
                  >
                    {/* Vertical Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20" />

                    <div className="space-y-12 pb-8">
                      {activeTab === 'mission' ? (
                        <>
                          <div className="relative pt-2">
                            <div className="absolute -left-[53px] top-4 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_15px_rgba(128,102,247,0.8)]" />
                            <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed">
                              We&apos;re working to ensure that <span className="text-primary font-bold">Advanced intelligence</span> remains a shared and accessible resource for all.
                            </p>
                          </div>

                          <div className="relative">
                            <div className="absolute -left-[53px] top-3 w-2.5 h-2.5 bg-primary/60 rounded-full" />
                            <div className="space-y-2">
                              {["Decentralise AI.", "Build with Ethical Intelligence.", "Scale. Innovate. Share."].map((text, i) => (
                                <p key={i} className="text-xl md:text-2xl text-foreground font-light leading-tight opacity-80">
                                  {text}
                                </p>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="relative pt-2">
                            <div className="absolute -left-[53px] top-4 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_15px_rgba(128,102,247,0.8)]" />
                            <p className="text-xl md:text-2xl text-foreground/90 font-light leading-relaxed">
                              To become a <span className="text-primary font-bold">trusted global partner</span>, delivering intelligent and scalable IT solutions that empower businesses.
                            </p>
                          </div>

                          <div className="relative">
                            <div className="absolute -left-[53px] top-3 w-2.5 h-2.5 bg-primary/60 rounded-full" />
                            <div className="space-y-2">
                              {["Leading the future through", "Digital Innovation.", "Customer Success. Excellence."].map((text, i) => (
                                <p key={i} className="text-xl md:text-2xl text-foreground font-light leading-tight opacity-80">
                                  {text}
                                </p>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>


        {/* Core Values */}

      </div>
    </section>
  )
}
