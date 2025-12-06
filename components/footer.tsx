"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: "Web Development", href: "/#services" },
      { name: "Cloud Solutions", href: "/#services" },
      { name: "Cybersecurity", href: "/#services" },
      { name: "Digital Transformation", href: "/#services" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/contact" },
      { name: "Contact", href: "/contact" },
    ],
    Resources: [
      { name: "Documentation", href: "/terms" },
      { name: "Case Studies", href: "/about" },
      { name: "Pricing", href: "/contact" },
      { name: "FAQ", href: "/contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/terms" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/terms" },
    ],
  }

  const socialLinks = [
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/yapaze", name: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/yapazetech", name: "Twitter" },
    { icon: Mail, href: "mailto:info@yapaze.com", name: "Email" },
  ]

  return (
    <footer className="relative bg-secondary/30 border-t border-primary/10 py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start flex-col text-center md:text-left">
              <Image
                src="/logoo.png"
                alt="YaPaze Technologies Logo"
                width={40}
                height={40}
                className="mb-3"
              />
              <h3 className="text-2xl font-bold gradient-text mb-4">YaPaze Technologies</h3>
            </div>

            <p className="text-foreground/60 text-sm leading-relaxed">
              Empowering businesses with next-gen digital solutions.
            </p>

            <div className="flex gap-4 mt-6 justify-center md:justify-start">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-4 text-foreground/90">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-foreground/60 hover:text-primary transition-colors text-sm block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/60 text-sm">
            Copyright © {currentYear} YaPaze Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 flex-wrap justify-center">
            <Link href="/privacy-policy" className="text-foreground/60 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-foreground/60 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/cookie-policy" className="text-foreground/60 hover:text-primary transition-colors text-sm">
              Cookie Policy
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}