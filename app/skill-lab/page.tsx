"use client"

import { Navbar } from "@/components/navbar"
import { motion } from "framer-motion"

export default function SkillLabPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
            <Navbar />
            <motion.div
                className="text-center space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    className="text-6xl md:text-9xl font-bold tracking-tighter text-foreground"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                >
                    COMING
                    <br />
                    <span className="text-primary">SOON</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    We are crafting something extraordinary for our Skill Lab.
                    <br />
                    Stay tuned for the revolution in learning.
                </motion.p>

                <motion.div
                    className="flex justify-center gap-2 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 rounded-full bg-primary"
                            animate={{
                                y: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}
