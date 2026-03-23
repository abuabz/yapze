"use client"
import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"
import { Twitter, Facebook, Instagram, Send } from "lucide-react"
import { useState } from "react"

export default function SkillLabPage() {
    const [contact, setContact] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!contact) return
        const message = `Hello YaPaze! I'm interested in joining the Skill Lab waitlist. My contact: ${contact}`
        const whatsappUrl = `https://wa.me/918714414438?text=${encodeURIComponent(message)}`
        window.open(whatsappUrl, "_blank")
    }

    return (
        <div className="relative min-h-screen w-full bg-[#030303] overflow-hidden flex flex-col font-sans selection:bg-primary/30">
            <Navbar />

            {/* Background Logo / Element */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.08, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center"
                >
                    <img
                        src="/logoandnamewhite.svg"
                        alt="Logo Background"
                        className="w-[80vw] h-auto grayscale opacity-50"
                    />
                </motion.div>

                {/* Light Streaks / Gradients - Unified to Violet Theme */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-transparent blur-[120px] -mr-40 -mt-20 rotate-12" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 to-transparent blur-[150px] -ml-60 -mb-40" />
            </div>

            <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-20">
                {/* Waitlist Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full glassmorphism border border-white/10 mb-8"
                >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">welcome to future</span>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight mb-4 leading-none">
                        Coming soon!
                    </h1>
                </motion.div>

                {/* Waitlist Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="w-full max-w-xl glassmorphism rounded-[2.5rem] p-8 md:p-12 border border-white/5 relative overflow-hidden group shadow-2xl"
                >
                    {/* Inner highlight */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

                    <div className="relative z-10 text-center space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Join our waitlist!
                        </h2>
                        <p className="text-white/40 text-sm md:text-base max-w-[280px] md:max-w-md mx-auto leading-relaxed">
                            Sign up for our newsletter to receive the latest updates<br className="hidden md:block" /> and insights straight to your inbox.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-4 items-center justify-center">
                            <div className="relative group/input w-full max-w-xs">
                                <input
                                    type="text"
                                    required
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    placeholder="Enter Email/Phone No"
                                    className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-white/30 transition-all placeholder:text-white/20"
                                />
                            </div>
                            <button type="submit" className="whitespace-nowrap bg-white text-black font-bold h-[58px] px-8 rounded-full hover:bg-[#eaeaea] transition-all flex items-center justify-center gap-2 group/btn">
                                Join Waitlist
                                <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 flex items-center gap-6"
                >
                    {[
                        { icon: Twitter, href: "#" },
                        { icon: Facebook, href: "#" },
                        { icon: Instagram, href: "#" }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            className="p-3 rounded-full glassmorphism border border-white/10 text-white/50 hover:text-white hover:border-white/30 transition-all"
                        >
                            <social.icon className="w-5 h-5" />
                        </a>
                    ))}
                </motion.div>
            </main>

            {/* Huge Watermark Text at Bottom - Half off-screen (adjusted for visibility) */}
            <div className="absolute bottom-[-10%] md:bottom-[-15%] left-1/2 -translate-x-1/2 z-0 pointer-events-none whitespace-nowrap overflow-hidden w-full text-center">
                <span className="text-[12rem] md:text-[20rem] font-black text-transparent stroke-text opacity-[0.15] select-none">
                    Waitlist
                </span>
            </div>



            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px white;
                }
            `}</style>
        </div>
    )
}
