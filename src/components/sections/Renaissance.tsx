"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"
import CiteMark from "@/components/ui/CiteMark"

const phases = [
  { month: "Month 1", name: "Clarity", description: "Thesis, prototype, first user calls. The foundational sprint to find the signal in the noise." },
  { month: "Month 2", name: "Product", description: "Core loop, design system, messaging. Hardening the infrastructure for scale." },
  { month: "Month 3", name: "Distribution", description: "Launch assets, video, channel tests. Building the organic wedge." },
  { month: "Month 4", name: "Momentum", description: "Public drop, pilots, GTM sprint. Activating the network and scaling." },
]

export default function Renaissance() {
  return (
    <section id="renaissance" className="relative w-full py-44 px-6 sm:px-8 md:px-12 bg-[var(--color-bg)]">

      <div className="max-w-[1200px] mx-auto">

        <div className="border-t border-[var(--color-border)] pt-8 mb-16">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
              04 &mdash; The Program
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-12">
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)]">
                120 days from zero to launch.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[480px]">
                Structured hours every week. Design, growth, creative direction, introductions. Output, not advice. 24-hour build sprints. Drop Nights for public shipping.
                <CiteMark cardKey="renaissance-how" number={6} />
              </p>
            </Reveal>
          </div>
        </div>

        <div className="w-full flex flex-col">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.7 }}
              className={`w-full grid grid-cols-1 md:grid-cols-12 border-t border-[var(--color-border)] py-6 row-hover ${
                i === phases.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="col-span-1 md:col-span-2 flex items-baseline">
                <span className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                  {phase.month}
                </span>
              </div>
              <div className="col-span-1 md:col-span-3 flex items-baseline mt-1 md:mt-0">
                <span className="font-[family-name:var(--font-display)] text-[clamp(1.2rem,1.8vw,1.6rem)] leading-none text-[var(--color-text)]">
                  {phase.name}
                </span>
              </div>
              <div className="col-span-1 md:col-span-7 flex items-baseline mt-2 md:mt-0">
                <span className="font-[family-name:var(--font-body)] text-[0.8rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  {phase.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
