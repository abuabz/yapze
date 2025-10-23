import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "YaPaze Technologies - Next-Gen IT Solutions",
  description:
    "Smart, secure, and scalable IT solutions in Web & App Development, Cybersecurity, Cloud, and Digital Transformation.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${montserrat.className} font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}
