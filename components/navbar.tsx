"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "WORKS", href: "/portfolio" },
    { label: "ABOUT", href: "/about" },
    { label: "SERVICES", href: "/services" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT", href: "/contact" },
  ]

  const socialLinks = [
    { label: "Awwwards", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Linkedin", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Email", href: "#" },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "glassmorphism py-4 shadow-lg shadow-primary/10" : "py-6"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div className="text-2xl font-bold gradient-text glow" whileHover={{ scale: 1.05 }}>
              YaPaze
            </motion.div>
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden  items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Right side: CTA Button and Toggle */}
          <div className="flex items-center gap-4">
            <motion.button
              className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors hidden sm:block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            <motion.button
              className="p-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                  <span className="w-6 h-0.5 bg-foreground transition-all" />
                  <span className="w-6 h-0.5 bg-foreground transition-all" />
                  <span className="w-6 h-0.5 bg-foreground transition-all" />
                </div>
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
              {/* Main content area */}
              <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
                {/* Left side - Tagline */}
                <motion.div
                  className="text-lg font-medium text-foreground/60 max-w-xs"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Innovating next-gen IT solutions for your business
                </motion.div>

                {/* Center - Menu Items */}
                <motion.div
                  className="flex flex-col gap-8 md:gap-12 flex-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {navItems.map((item, index) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-4xl md:text-5xl font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>

                {/* Right side - Social Links */}
                <motion.div
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm font-semibold text-primary border border-primary rounded-full px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                    >
                      {link.label}
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* Close button in top right */}
              <motion.button
                className="absolute top-6 right-6 p-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
