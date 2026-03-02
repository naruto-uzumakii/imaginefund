"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"

const milestones = [
  { date: "March 2026", text: "Fundraise opens. Incubation underway." },
  { date: "June 2026", text: "Fund closes. First cheques deployed." },
  { date: "Summer 2026", text: "3–4 investments. Production live." },
  { date: "Winter 2026", text: "~6 investments. SF corridor pilot." },
  { date: "24 Months", text: "~20 investments complete. Fund I proof documented." },
]

export default function Deployment() {
  return (
    <section id="roadmap" className="relative w-full py-44 px-6 sm:px-8 md:px-12 bg-[var(--color-bg)]">

      <div className="max-w-[1200px] mx-auto">

        <div className="border-t border-[var(--color-border)] pt-8 mb-16">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
              08 &mdash; Deployment
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)] mb-12 max-w-[500px]">
            Start March. Close June. <em className="italic text-[var(--color-text-secondary)]">Proof by winter.</em>
          </h2>
        </Reveal>

        <div className="w-full flex flex-col">
          {milestones.map((m, i) => (
            <motion.div
              key={m.date}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.7 }}
              className={`w-full grid grid-cols-1 md:grid-cols-12 border-t border-[var(--color-border)] py-6 row-hover ${
                i === milestones.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="col-span-1 md:col-span-1 flex items-baseline">
                <span className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--color-text-secondary)] tracking-[0.1em]">
                  0{i + 1}
                </span>
              </div>
              <div className="col-span-1 md:col-span-4 flex items-baseline mt-1 md:mt-0">
                <span className="font-[family-name:var(--font-display)] text-[clamp(1rem,1.5vw,1.3rem)] leading-none text-[var(--color-text)]">
                  {m.date}
                </span>
              </div>
              <div className="col-span-1 md:col-span-7 flex items-baseline mt-2 md:mt-0">
                <span className="font-[family-name:var(--font-body)] text-[0.8rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  {m.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
