"use client"

import React from "react"
import Image from "next/image"

interface BrandLogoItem {
  name: string
  file: string
}

// First row: Cloud, Infrastructure, Compute & Enterprise Cybersecurity (scrolling to the right)
const brandLogosRow1: BrandLogoItem[] = [
  { name: "AWS", file: "AWS.png" },
  { name: "Microsoft Azure", file: "Azure.png" },
  { name: "Google Cloud", file: "Google_Cloud.png" },
  { name: "Cisco", file: "Cisco.png" },
  { name: "Fortinet", file: "Fortinet.png" },
  { name: "Palo Alto", file: "Palo_Alto.png" },
  { name: "CrowdStrike", file: "CrowdStrike.png" },
  { name: "Cloudflare", file: "Cloudflare.png" },
  { name: "Kubernetes", file: "Kubernetes.png" },
  { name: "Docker", file: "Docker.png" },
  { name: "Linux", file: "Linux.png" },
  { name: "Red Hat", file: "Red_Hat.png" },
  { name: "VMware", file: "VMware.png" },
  { name: "NVIDIA", file: "NVIDIA.png" },
  { name: "Intel", file: "Intel.png" },
  { name: "AMD", file: "AMD.png" },
  { name: "Dell Technologies", file: "Dell.png" },
  { name: "HP Enterprise", file: "HP.png" },
  { name: "IBM", file: "IBM.png" },
  { name: "Oracle", file: "Oracle.png" },
  { name: "Broadcom", file: "Broadcom.png" },
  { name: "Fujitsu", file: "Fujitsu.png" },
  { name: "Huawei", file: "Huawei.png" },
  { name: "Hyper-V", file: "Hyper_V.png" },
  { name: "Lenovo", file: "Lenovo.png" },
  { name: "NetApp", file: "NetApp.png" },
  { name: "Netgear", file: "Netgear.png" },
  { name: "Qualcomm", file: "Qualcomm.png" },
  { name: "Windows Server", file: "Windows.png" },
  { name: "Fibrenetix", file: "Fibrenetix.png" },
]

// Second row: Networking, Security Operations, Software & Development (scrolling to the left)
const brandLogosRow2: BrandLogoItem[] = [
  { name: "Microsoft", file: "Microsoft.png" },
  { name: "Google", file: "Google.png" },
  { name: "Sophos", file: "Sophos.png" },
  { name: "CyberArk", file: "CyberArk.png" },
  { name: "Okta", file: "Okta.png" },
  { name: "Veeam", file: "Veeam.png" },
  { name: "Nutanix", file: "Nutanix.png" },
  { name: "Juniper Networks", file: "Juniper.png" },
  { name: "MikroTik", file: "MikroTik.png" },
  { name: "Arista Networks", file: "Arista_Networks.png" },
  { name: "Honeywell", file: "Honeywell.png" },
  { name: "Hikvision", file: "Hikvision.png" },
  { name: "Dahua", file: "Dahua.png" },
  { name: "Genetec", file: "Genetec.png" },
  { name: "Milestone", file: "Milestone.png" },
  { name: "Bosch BVMS", file: "Bosch_BVMS.png" },
  { name: "Gallagher", file: "Gallagher.png" },
  { name: "Motorola Avigilon", file: "Motorola_Solutions_Avigilon.png" },
  { name: "Grundig", file: "Grundig.png" },
  { name: "ZKTeco", file: "ZKTeco.png" },
  { name: "SAP", file: "SAP.png" },
  { name: "Odoo", file: "Odoo.png" },
  { name: "Zoho", file: "Zoho.png" },
  { name: "Zendesk", file: "Zendesk.png" },
  { name: "Tally Solutions", file: "Tally.png" },
  { name: "Python", file: "Python.png" },
  { name: "Node.js", file: "Node_js.png" },
  { name: "Kali Linux", file: "Kali.png" },
  { name: "BlackArch", file: "BlackArch.png" },
  { name: "Parrot OS", file: "Parrot.png" },
]

// Duplicated for seamless infinite loop
const duplicatedRow1 = [...brandLogosRow1, ...brandLogosRow1]
const duplicatedRow2 = [...brandLogosRow2, ...brandLogosRow2]

export function ClientsMarquee() {
  const maskStyle: React.CSSProperties = {
    WebkitMaskImage:
      "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.18) 5%, rgba(0, 0, 0, 0.6) 14%, rgba(0, 0, 0, 1) 24%, rgba(0, 0, 0, 1) 76%, rgba(0, 0, 0, 0.6) 86%, rgba(0, 0, 0, 0.18) 95%, rgba(0, 0, 0, 0) 100%)",
    maskImage:
      "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.18) 5%, rgba(0, 0, 0, 0.6) 14%, rgba(0, 0, 0, 1) 24%, rgba(0, 0, 0, 1) 76%, rgba(0, 0, 0, 0.6) 86%, rgba(0, 0, 0, 0.18) 95%, rgba(0, 0, 0, 0) 100%)",
  }

  return (
    /* Outer container with padding / margin on the 2 sides */
    <div className="w-full px-4 sm:px-8 md:px-14 lg:px-20 py-2 sm:py-3 select-none">
      {/* 
        Marquee track with low opacity on both sides via linear-gradient mask 
        (No colored or black boxes - 100% natural background blending)
      */}
      <div
        className="marquee-fade-mask overflow-hidden space-y-2 sm:space-y-3"
        style={maskStyle}
      >
        {/* ROW 1: Scrolling RIGHT side */}
        <div className="group overflow-hidden select-none py-1">
          <div className="animate-marquee-right flex items-center gap-5 sm:gap-7 w-max group-hover:[animation-play-state:paused]">
            {duplicatedRow1.map((item, idx) => (
              <div key={`r1-${idx}`} className="flex items-center gap-5 sm:gap-7 shrink-0">
                <div className="flex items-center gap-2.5 sm:gap-3 group/item cursor-default">
                  <div className="relative h-6 w-6 sm:h-7 sm:w-7 flex items-center justify-center shrink-0">
                    <Image
                      src={`/brandlogos/${item.file}`}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="max-h-6 max-w-6 sm:max-h-7 sm:max-w-7 w-auto h-auto object-contain opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 filter brightness-95 contrast-105 transition-all duration-300"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 group-hover/item:text-primary transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
                <span
                  className="text-primary/40 text-xs sm:text-sm font-mono select-none"
                  aria-hidden="true"
                >
                  |
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling LEFT side */}
        <div className="group overflow-hidden select-none py-1">
          <div className="animate-marquee-left flex items-center gap-5 sm:gap-7 w-max group-hover:[animation-play-state:paused]">
            {duplicatedRow2.map((item, idx) => (
              <div key={`r2-${idx}`} className="flex items-center gap-5 sm:gap-7 shrink-0">
                <div className="flex items-center gap-2.5 sm:gap-3 group/item cursor-default">
                  <div className="relative h-6 w-6 sm:h-7 sm:w-7 flex items-center justify-center shrink-0">
                    <Image
                      src={`/brandlogos/${item.file}`}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="max-h-6 max-w-6 sm:max-h-7 sm:max-w-7 w-auto h-auto object-contain opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 filter brightness-95 contrast-105 transition-all duration-300"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 group-hover/item:text-cyan-400 transition-colors whitespace-nowrap">
                    {item.name}
                  </span>
                </div>
                <span
                  className="text-cyan-400/40 text-xs sm:text-sm font-mono select-none"
                  aria-hidden="true"
                >
                  |
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
