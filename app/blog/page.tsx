"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Future of Cloud Computing in 2025",
    excerpt: "Explore the latest trends and innovations shaping the cloud computing landscape.",
    author: "Sarah Johnson",
    date: "March 15, 2025",
    category: "Cloud",
    image: "/cloud-computing-future.jpg",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Enterprises",
    excerpt: "Essential security measures every enterprise should implement to protect their data.",
    author: "Michael Chen",
    date: "March 12, 2025",
    category: "Security",
    image: "/cybersecurity-protection.png",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "AI and Machine Learning: Transforming Business",
    excerpt: "How artificial intelligence is revolutionizing business operations and decision-making.",
    author: "Emily Rodriguez",
    date: "March 10, 2025",
    category: "AI",
    image: "/artificial-intelligence-machine-learning.png",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Web Development Trends to Watch",
    excerpt: "Latest frameworks, tools, and practices in modern web development.",
    author: "David Park",
    date: "March 8, 2025",
    category: "Development",
    image: "/web-development-coding.png",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Digital Transformation Success Stories",
    excerpt: "Real-world examples of companies successfully transforming their digital infrastructure.",
    author: "Lisa Anderson",
    date: "March 5, 2025",
    category: "Transformation",
    image: "/digital-transformation-business.png",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Mobile App Development Best Practices",
    excerpt: "Tips and strategies for building high-performance mobile applications.",
    author: "James Wilson",
    date: "March 1, 2025",
    category: "Mobile",
    image: "/mobile-app-development.png",
    readTime: "6 min read",
  },
]

export default function BlogPage() {
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
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tech <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and best practices in technology and digital
              transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                className="group glassmorphism rounded-2xl overflow-hidden hover:border-primary/50 transition-all cursor-pointer"
                whileHover={{ y: -10 }}
              >
                {/* Post Image */}
                <div className="relative h-48 overflow-hidden bg-secondary/50">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Post Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 leading-relaxed">{post.excerpt}</p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 text-xs text-foreground/60 mb-4 pb-4 border-b border-primary/10">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  {/* Read More */}
                  <motion.button
                    className="flex items-center gap-2 text-primary font-semibold group/btn"
                    whileHover={{ x: 5 }}
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}
