// app/terms-of-service/page.tsx   (or app/terms/page.tsx)

"use client"   // ← THIS LINE FIXES THE ERROR!

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Shield, FileText, Mail, MessageCircle, Phone } from "lucide-react"


const termsSections = [
  {
    number: "1",
    title: "Acceptance of Terms",
    content: (
      <>
        By using our services or signing a quotation/project agreement, you:
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>Accept all terms mentioned here</li>
          <li>Agree to follow service policies and legal guidelines</li>
          <li>Confirm that you are authorized to act on behalf of your business (if applicable)</li>
        </ul>
        <p className="mt-4 font-medium text-primary">If you do not agree, you must not use our services.</p>
      </>
    ),
  },
  {
    number: "2",
    title: "Services Provided",
    content: (
      <>
        YaPaze Technologies provides IT services including but not limited to:
        <ul className="list-disc list-inside mt-3 space-y-1">
          <li>Website & Software Development</li>
          <li>Mobile & Web Application Development</li>
          <li>IT Support & Maintenance</li>
          <li>Cloud Deployment / Server Support</li>
          <li>UI/UX Design</li>
          <li>Automation & Tech Consulting</li>
        </ul>
      </>
    ),
  },
  {
    number: "3",
    title: "Project Requirements",
    content: (
      <>
        Clients must provide clear requirements and access (logo, content, images, hosting/domain credentials, etc.).
        <br />
        <strong className="text-primary">We are not liable for delays caused by incomplete client information.</strong>
      </>
    ),
  },
  {
    number: "4",
    title: "Pricing & Payment Terms",
    content: (
      <>
        • Work begins only after receiving advance payment
        <br />
        • Payments follow agreed milestones
        <br />
        • Extra features = extra charges
        <br />
        <strong className="text-orange-500">Non-payment may lead to project suspension.</strong>
      </>
    ),
  },
  {
    number: "5",
    title: "Refund & Cancellation",
    content: (
      <>
        • No refunds once work has started
        <br />
        • Design drafts and delivered work are non-refundable
      </>
    ),
  },
  {
    number: "6",
    title: "Intellectual Property & Ownership",
    content: (
      <>
        Final deliverables become yours <strong>only after 100% payment</strong>.
        Until then, all code and designs remain property of YaPaze Technologies.
      </>
    ),
  },
  {
    number: "7",
    title: "Third-Party Tools & Services",
    content: (
      <>
        We are <strong>not responsible</strong> for third-party outages, price changes, or data issues (hosting, APIs, etc.).
      </>
    ),
  },
  {
    number: "8",
    title: "Support, Warranty & Maintenance",
    content: (
      <>
        Free support covers bugs only. New features or ongoing help require a paid plan.
      </>
    ),
  },
  {
    number: "9",
    title: "Confidentiality",
    content: "We protect your data and never share it without consent (except when required by law).",
  },
  {
    number: "10",
    title: "Limitation of Liability",
    content: "Maximum liability limited to the amount paid. No responsibility for indirect losses.",
  },
  {
    number: "11",
    title: "Termination",
    content: "We may suspend services for non-payment, abuse, or violation of terms.",
  },
  {
    number: "12",
    title: "Changes to Terms",
    content: "We may update these terms. Continued use means acceptance.",
  },
]

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="relative py-20 px-6 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full mb-8"
            >
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Last Updated: December 2025</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto space-y-12">


            {termsSections.map((section, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glassmorphism rounded-2xl p-8 border border-white/10 hover:border-primary/30 transition-all"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-primary text-3xl">{section.number}.</span>
                  {section.title}
                </h3>
                <div className="text-foreground/80 leading-relaxed space-y-3">
                  {section.content}
                </div>
              </motion.article>
            ))}

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glassmorphism rounded-3xl p-10 text-center border border-primary/20"
            >
              <h3 className="text-3xl font-bold mb-6">Questions?</h3>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="mailto:info@yapaze.net" className="flex items-center gap-3 px-6 py-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition">
                  <Mail className="w-5 h-5 text-primary" />
                  info@yapaze.net
                </a>
                <a href="https://wa.me/97339362634" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-4 bg-green-500/10 rounded-xl hover:bg-green-500/20 transition">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  +973 3936 2634
                </a>
                <a href="tel:+918714414438" className="flex items-center gap-3 px-6 py-4 bg-purple-500/10 rounded-xl hover:bg-purple-500/20 transition">
                  <Phone className="w-5 h-5 text-purple-500" />
                  +91 87144 14438
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}