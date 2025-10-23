"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with payment integration and inventory management.",
    image: "/ecommerce-dashboard.png",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "Cloud Migration Suite",
    category: "Cloud Solutions",
    description: "Enterprise cloud migration tool helping businesses transition to AWS.",
    image: "/cloud-infrastructure-dashboard.png",
    tags: ["AWS", "Python", "Docker", "Kubernetes"],
  },
  {
    id: 3,
    title: "Security Audit Platform",
    category: "Cybersecurity",
    description: "Comprehensive security audit and vulnerability assessment platform.",
    image: "/security-dashboard-analytics.jpg",
    tags: ["Security", "Python", "React", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Mobile Banking App",
    category: "App Development",
    description: "Secure mobile banking application with biometric authentication.",
    image: "/mobile-banking-app.png",
    tags: ["React Native", "Firebase", "Security"],
  },
  {
    id: 5,
    title: "AI Analytics Engine",
    category: "Digital Transformation",
    description: "Machine learning-powered analytics platform for business intelligence.",
    image: "/ai-analytics-dashboard.png",
    tags: ["Python", "TensorFlow", "React", "BigQuery"],
  },
  {
    id: 6,
    title: "Real-time Collaboration Tool",
    category: "Web Development",
    description: "Real-time document collaboration platform with live editing.",
    image: "/collaboration-tool-interface.png",
    tags: ["WebSocket", "React", "Node.js", "Redis"],
  },
]

export default function PortfolioPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-20 overflow-hidden pt-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped businesses transform through technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group glassmorphism rounded-2xl overflow-hidden hover:border-primary/50 transition-all"
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-secondary/50">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 bg-secondary/50 rounded text-foreground/60">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-primary/10">
                    <motion.button
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-primary hover:bg-primary/10 rounded transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </motion.button>
                    <motion.button
                      className="flex-1 flex items-center justify-center gap-2 py-2 text-primary hover:bg-primary/10 rounded transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
