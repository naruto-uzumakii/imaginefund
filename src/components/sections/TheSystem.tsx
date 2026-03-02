"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"

const fundDetails = [
  { label: "Structure", value: "$9M Pre-seed & Seed Vehicle" },
  { label: "Check Size", value: "$100K — $500K" },
  { label: "Focus Areas", value: "Agentic Infrastructure, Developer Tools, Applied AI" },
  { label: "Geography", value: "Bangalore & San Francisco" },
  { label: "Target Portfolio", value: "~20 Category-defining companies" },
]

export default function TheSystem() {
  return (
    <section id="system" className="relative w-full py-44 px-6 sm:px-8 md:px-12 bg-[var(--color-bg)]">

      <div className="max-w-[1200px] mx-auto">

        <div className="border-t border-[var(--color-border)] pt-8 mb-16">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
              02 &mdash; The Fund
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)] mb-12 max-w-[560px]">
            Designed for the earliest stages of conviction.
          </h2>
        </Reveal>

        <div className="w-full flex flex-col">
          {fundDetails.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * i, duration: 0.7 }}
              className={`w-full grid grid-cols-1 md:grid-cols-12 border-t border-[var(--color-border)] py-5 row-hover ${
                i === fundDetails.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="col-span-1 md:col-span-3 flex items-baseline">
                <span className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                  {item.label}
                </span>
              </div>
              <div className="col-span-1 md:col-span-9 flex items-baseline mt-1 md:mt-0">
                <span className="font-[family-name:var(--font-body)] text-[0.9rem] text-[var(--color-text)]">
                  {item.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
