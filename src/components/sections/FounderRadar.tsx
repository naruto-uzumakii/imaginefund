"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"

const founders = [
  {
    name: "Stealth Founder 1 & 2",
    desc: "Seasoned tech founders. Deep systems thinking and relentless execution.",
    cardKey: "founder-1",
    citeNum: 10,
  },
  {
    name: "Stealth Founder 3",
    desc: "Repeat founder. Potential unicorn trajectory. Navigated scale before.",
    cardKey: "founder-2",
    citeNum: 11,
  },
  {
    name: "Stealth Founder 4",
    desc: "Ex-unicorn. End-to-end fintech ecosystem knowledge. First principles.",
    cardKey: "founder-3",
    citeNum: 12,
  },
  {
    name: "Stealth Founder 5",
    desc: "Growth at unicorn. Idea to pilots in weeks. Pure velocity.",
    cardKey: "founder-4",
    citeNum: 13,
  },
]

export default function FounderRadar() {
  return (
    <section id="founders" className="relative w-full py-44 px-6 sm:px-8 md:px-12 bg-[var(--color-bg)]">

      <div className="max-w-[1200px] mx-auto">

        <div className="border-t border-[var(--color-border)] pt-8 mb-16">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
              07 &mdash; Founder Radar
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)] mb-12 max-w-[500px]">
            We optimise for <em className="italic text-[var(--color-text-secondary)]">founders</em>, not ideas.
          </h2>
        </Reveal>

        <div className="w-full flex flex-col">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.7 }}
              className={`w-full grid grid-cols-1 md:grid-cols-12 border-t border-[var(--color-border)] py-6 row-hover ${
                i === founders.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="col-span-1 md:col-span-4 flex items-baseline">
                <span className="font-[family-name:var(--font-display)] text-[clamp(1rem,1.5vw,1.3rem)] leading-[1.15] text-[var(--color-text)]">
                  {f.name}
                </span>
              </div>
              <div className="col-span-1 md:col-span-6 flex items-baseline mt-2 md:mt-0">
                <span className="font-[family-name:var(--font-body)] text-[0.8rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  {f.desc}
                  <CiteMark cardKey={f.cardKey} number={f.citeNum} />
                </span>
              </div>
              <div className="col-span-1 md:col-span-2 flex items-baseline md:justify-end mt-1 md:mt-0">
                <span className="font-[family-name:var(--font-mono)] text-[0.55rem] tracking-[0.15em] uppercase text-[var(--color-text-secondary)] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] pulse-dot" />
                  Stealth
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
