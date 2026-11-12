import {
  Globe,
  Cpu,
  Shield,
  Cloud,
  TrendingUp,
  GraduationCap,
  type LucideIcon,
} from "lucide-react"

export interface ServiceFeature {
  title: string
  desc: string
}

export interface ServiceItem {
  id: string
  number: string
  title: string
  tagline: string
  icon: LucideIcon
  gradient: string
  accent: string
  description: string
  features: ServiceFeature[]
  outcomes: string[]
  tech: string[]
  cta: { label: string; href: string }
}

export const services: ServiceItem[] = [
  {
    id: "web-app-development",
    number: "01",
    title: "Web & App Development",
    tagline: "Digital Experiences. Engineered to Perform.",
    icon: Globe,
    gradient: "from-sky-500 to-cyan-400",
    accent: "#22d3ee",
    description:
      "From brand-defining websites to high-performance mobile apps, we design and engineer digital products that load fast, feel effortless and turn visitors into customers.",
    features: [
      {
        title: "Responsive Business Websites",
        desc: "Modern UI/UX, SEO-ready architecture and blazing-fast performance on every device.",
      },
      {
        title: "E-commerce Platforms",
        desc: "Scalable storefronts with secure payments, inventory and order management built in.",
      },
      {
        title: "Mobile Apps (iOS & Android)",
        desc: "Custom native and cross-platform apps tailored to your industry and users.",
      },
      {
        title: "Web Apps & Customer Portals",
        desc: "Dashboards, SaaS products and self-service portals engineered to scale.",
      },
    ],
    outcomes: [
      "A product your customers genuinely enjoy using",
      "Faster load times and better search visibility",
      "A codebase that is easy to extend as you grow",
    ],
    tech: ["Next.js", "React", "React Native", "TypeScript", "Node.js", "Tailwind CSS"],
    cta: { label: "Start a Web or App Project", href: "/contact" },
  },
  {
    id: "software-business-solutions",
    number: "02",
    title: "Software & Business Solutions",
    tagline: "Intelligent Software. Smarter Operations.",
    icon: Cpu,
    gradient: "from-violet-500 to-fuchsia-500",
    accent: "#c084fc",
    description:
      "We build custom software that fits the way your business actually works, automating the repetitive, connecting your systems and turning raw data into clear decisions.",
    features: [
      {
        title: "Custom ERP & CRM Systems",
        desc: "Tailored platforms for SMEs and enterprises covering sales, finance, HR and operations.",
      },
      {
        title: "Workflow Automation",
        desc: "Process optimisation tools that remove manual effort and human error.",
      },
      {
        title: "Analytics Dashboards",
        desc: "Real-time reporting and KPIs so every team sees what matters, when it matters.",
      },
      {
        title: "Integrations & APIs",
        desc: "Seamless connections between your existing tools, partners and data sources.",
      },
    ],
    outcomes: [
      "Fewer manual tasks and faster turnaround",
      "One trusted source of truth for your data",
      "Decisions backed by real-time insight",
    ],
    tech: ["Python", "Node.js", "PostgreSQL", "REST & GraphQL", "Power BI", "AI Automation"],
    cta: { label: "Plan Your Business Solution", href: "/contact" },
  },
  {
    id: "cybersecurity-solutions",
    number: "03",
    title: "Cybersecurity Solutions",
    tagline: "Protecting What Moves You Forward.",
    icon: Shield,
    gradient: "from-rose-500 to-orange-400",
    accent: "#fb7185",
    description:
      "Security is built into everything we deliver. We find weaknesses before attackers do, watch your environment around the clock and keep you ready for audits.",
    features: [
      {
        title: "Network Security & Penetration Testing",
        desc: "End-to-end assessments that expose and close vulnerabilities across your stack.",
      },
      {
        title: "Threat Detection & Response",
        desc: "Continuous monitoring with rapid incident response when it counts.",
      },
      {
        title: "Data Protection & Encryption",
        desc: "Safeguard sensitive data at rest and in transit with strong access controls.",
      },
      {
        title: "Compliance & Security Audits",
        desc: "Readiness for GDPR, HIPAA, ISO 27001 and other industry standards.",
      },
    ],
    outcomes: [
      "Reduced risk of breaches and downtime",
      "Clear visibility into your security posture",
      "Confidence for customers, partners and regulators",
    ],
    tech: ["Zero Trust", "VAPT", "SIEM", "IAM", "Firewalls", "Encryption"],
    cta: { label: "Secure Your Business", href: "/contact" },
  },
  {
    id: "cloud-managed-it",
    number: "04",
    title: "Cloud & Managed IT Solutions",
    tagline: "Smarter Infrastructure. Seamless Performance.",
    icon: Cloud,
    gradient: "from-indigo-500 to-blue-400",
    accent: "#60a5fa",
    description:
      "We move, run and look after your infrastructure so your team can focus on the business, with cloud that scales on demand and IT support that never sleeps.",
    features: [
      {
        title: "Cloud Migration",
        desc: "Planned, low-risk moves to AWS, Azure or Google Cloud with minimal disruption.",
      },
      {
        title: "24/7 Managed IT Support",
        desc: "Proactive monitoring and a responsive helpdesk for your entire infrastructure.",
      },
      {
        title: "Virtualisation & Disaster Recovery",
        desc: "Resilient backups and recovery plans that keep operations running.",
      },
      {
        title: "DevOps & Automation",
        desc: "CI/CD pipelines and infrastructure-as-code for faster, safer releases.",
      },
    ],
    outcomes: [
      "Infrastructure that scales with demand",
      "Predictable IT costs and fewer outages",
      "A team that is always one call away",
    ],
    tech: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    cta: { label: "Modernise Your Infrastructure", href: "/contact" },
  },
  {
    id: "seo-digital-marketing",
    number: "05",
    title: "SEO & Digital Marketing",
    tagline: "Turn Digital Presence Into Business Growth.",
    icon: TrendingUp,
    gradient: "from-emerald-500 to-teal-400",
    accent: "#34d399",
    description:
      "Great technology deserves to be found. We grow your visibility and your pipeline with search, paid media, content and analytics working together.",
    features: [
      {
        title: "SEO Strategy",
        desc: "Technical, on-page and local SEO that builds lasting organic traffic.",
      },
      {
        title: "Performance Marketing",
        desc: "High-ROI Google Ads and social campaigns focused on qualified leads.",
      },
      {
        title: "Content & Branding",
        desc: "Consistent messaging and creative that make your brand memorable.",
      },
      {
        title: "Analytics & Conversion Optimisation",
        desc: "Clear reporting and continuous testing to improve every rupee spent.",
      },
    ],
    outcomes: [
      "More of the right people finding you online",
      "Campaigns measured against real business goals",
      "A stronger, more recognisable brand",
    ],
    tech: ["Google Analytics", "Search Console", "Google Ads", "Meta Ads", "Semrush", "Content Strategy"],
    cta: { label: "Grow Your Presence", href: "/contact" },
  },
  {
    id: "future-skills-innovation",
    number: "06",
    title: "Future Skills & Innovation",
    tagline: "Learn Today. Innovate Tomorrow. Engineer the Future.",
    icon: GraduationCap,
    gradient: "from-amber-500 to-yellow-400",
    accent: "#fbbf24",
    description:
      "Technology moves fast, so we help people and teams keep up. Hands-on programmes, live projects and innovation workshops prepare the next generation of engineers.",
    features: [
      {
        title: "Industry-Led Training",
        desc: "Practical courses in web, cloud, cybersecurity and AI taught by working engineers.",
      },
      {
        title: "Internships & Live Projects",
        desc: "Real-world experience on production-grade work, not just theory.",
      },
      {
        title: "Corporate Upskilling",
        desc: "Custom programmes that bring your team up to speed on modern technology.",
      },
      {
        title: "Innovation Labs & Workshops",
        desc: "Hackathons and experimentation sessions that turn ideas into prototypes.",
      },
    ],
    outcomes: [
      "Job-ready skills built on real projects",
      "Teams that adopt new technology with confidence",
      "A pipeline of fresh ideas and talent",
    ],
    tech: ["Full-Stack", "Cloud", "Cybersecurity", "AI & ML", "DevOps", "Mentorship"],
    cta: { label: "Explore Edu Lab", href: "/skill-lab" },
  },
]
