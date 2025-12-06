import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  // Basic
  title: {
    default: "YaPaze Technologies - Next-Gen IT Solutions",
    template: "%s | YaPaze Technologies",
  },
  description:
    "Smart, secure, and scalable IT solutions in Web & App Development, Cybersecurity, Cloud Computing, AI/ML, and Digital Transformation. Future-proof your business with YaPaze.",
  
  // Viewport & Mobile
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.yapaze.com",
    siteName: "YaPaze Technologies",
    title: "YaPaze Technologies - Next-Gen IT Solutions",
    description:
      "Leading provider of secure web & mobile apps, cybersecurity, cloud infrastructure, and digital transformation services.",
    images: [
      {
        url: "https://www.yapaze.com/logoo.jpg",
        width: 1200,
        height: 630,
        alt: "YaPaze Technologies - Innovating the Future of IT",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@yapazetech", // change if you have a handle
    creator: "@yapazetech",
    title: "YaPaze Technologies - Next-Gen IT Solutions",
    description:
      "Web & App Development • Cybersecurity • Cloud • AI & Digital Transformation",
    images: ["https://www.yapaze.com/twitter-image.jpg"],
  },

  // Icons & Manifest
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",

  // Theme & UI
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],

  // Robots & Verification
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional
  generator: "Next.js",
  applicationName: "YaPaze Technologies",
  keywords: [
    "web development",
    "mobile app development",
    "cybersecurity",
    "cloud computing",
    "digital transformation",
    "AI solutions",
    "devops",
    "IT consulting",
    "software development company",
  ],
  authors: [{ name: "YaPaze Technologies", url: "https://www.yapaze.com" }],
  creator: "YaPaze Technologies",
  publisher: "YaPaze Technologies",
  alternates: {
    canonical: "https://www.yapaze.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional meta tags that can't go in <head> directly */}
        <meta name="format-detection" content="telephone=no, date=no, email=no" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.yapaze.com" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </head>
      <body
        className={`${montserrat.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  )
}
