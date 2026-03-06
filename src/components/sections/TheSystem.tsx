"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"

const fundDetails = [
  { label: "Structure", value: "$9M Pre-seed & Seed Vehicle", col: "lg:col-span-4", delay: 0.1 },
  { label: "Check Size", value: "$100K — $500K", col: "lg:col-span-4", delay: 0.2 },
  { label: "Location", value: "Bangalore & San Francisco", col: "lg:col-span-4", delay: 0.3 },
  { label: "Focus Areas", value: "Agentic Infrastructure, Developer Tools, Applied AI", col: "lg:col-span-6", delay: 0.4 },
  { label: "Target Portfolio", value: "~20 Category-defining companies", col: "lg:col-span-6", delay: 0.5 },
]

export default function TheSystem() {
  return (
    <section id="system" className="relative w-full bg-[var(--color-bg)] text-black hairline-t">

      <div className="section-pad container-base">

        {/* Decorative Top */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          <div className="lg:col-span-12 flex justify-between items-end border-b border-black/10 pb-6">
            <Reveal>
              <span className="text-eyebrow text-black/40">
                01 — The Fund
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <span className="text-mono-sm text-black">
                IF.1
              </span>
            </Reveal>
          </div>
        </div>

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          <div className="lg:col-span-8">
            <Reveal delay={0.2}>
              <h2 className="text-h2 text-black max-w-[800px]">
                Designed for the <em className="italic text-black/50">earliest stages</em> of conviction.
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Dense Grid Data Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {fundDetails.map((detail, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: detail.delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`${detail.col} bg-white border border-black/5 p-8 flex flex-col justify-between gap-12 hover:shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-shadow duration-500`}
            >
              <span className="text-eyebrow text-black/40">
                {detail.label}
              </span>
              <span className="text-h3 text-black">
                {detail.value}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
