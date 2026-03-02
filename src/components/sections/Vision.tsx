"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"

const corridorStats = [
  { label: "Cost of Ops", india: "1/5th", us: "1×", description: "India engineering costs vs. US equivalents." },
  { label: "Runway", india: "7 years", us: "18 months", description: "Extended burn rate advantage vs. typical US runway." },
  { label: "Team Density", india: "15 engineers", us: "3 engineers", description: "At the exact same capital deployment." },
]

export default function Vision() {
  return (
    <section id="vision" className="relative w-full py-44 px-6 sm:px-8 md:px-12 bg-[var(--color-bg)]">

      <div className="max-w-[1200px] mx-auto">

        <div className="border-t border-[var(--color-border)] pt-8 mb-16">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
              06 &mdash; The Corridor
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-12">
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)]">
                Geography is not <em className="italic text-[var(--color-text-secondary)]">destiny.</em>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[480px]">
                Only 5–10% of qualified Indian founders get the infrastructure to break out globally. The rest plateau from lack of leverage, not lack of ambition.
                <CiteMark cardKey="india-corridor" number={9} />
              </p>
              <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[480px] mt-5">
                Imagine Fund builds the corridor: engineering density in Bangalore, GTM in San Francisco, distribution everywhere.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="w-full flex flex-col">
          {/* Table header */}
          <div className="grid grid-cols-12 pb-3 mb-0">
            <div className="col-span-3">
              <span className="font-[family-name:var(--font-mono)] text-[0.55rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                Metric
              </span>
            </div>
            <div className="col-span-3">
              <span className="font-[family-name:var(--font-mono)] text-[0.55rem] uppercase tracking-[0.15em] text-[var(--color-text)]">
                India
              </span>
            </div>
            <div className="col-span-3">
              <span className="font-[family-name:var(--font-mono)] text-[0.55rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] opacity-40">
                US
              </span>
            </div>
            <div className="col-span-3" />
          </div>

          {corridorStats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.7 }}
              className={`grid grid-cols-12 border-t border-[var(--color-border)] py-5 items-baseline row-hover ${
                i === corridorStats.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="col-span-3">
                <span className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                  {item.label}
                </span>
              </div>
              <div className="col-span-3">
                <span className="font-[family-name:var(--font-display)] text-[clamp(1rem,1.5vw,1.4rem)] leading-none text-[var(--color-text)]">
                  {item.india}
                </span>
              </div>
              <div className="col-span-3">
                <span className="font-[family-name:var(--font-body)] text-[0.8rem] text-[var(--color-text-secondary)] opacity-40">
                  {item.us}
                </span>
              </div>
              <div className="col-span-3">
                <span className="font-[family-name:var(--font-body)] text-[0.75rem] leading-[1.5] text-[var(--color-text-secondary)]">
                  {item.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
