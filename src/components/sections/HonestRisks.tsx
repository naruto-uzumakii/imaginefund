"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"

const risks = [
  { title: "First-time fund manager", desc: "A decade of creative capital, but no prior fund track record. You're betting on the operator, not a spreadsheet." },
  { title: "VC cycles are compressing", desc: "The traditional 10-year cycle may not apply. Markets move in ~2-year windows now." },
  { title: "The agentic future is uncharted", desc: "Nobody has a playbook. The companies we back may be building for a world that hasn't fully arrived." },
  { title: "Traditional building may not work", desc: "If AI collapses software costs to near-zero, distribution and taste become the moats." },
  { title: "Geography thesis is early", desc: "The India–SF corridor exists as a pattern. But nobody has packaged it as fund infrastructure before." },
]

export default function HonestRisks() {
  return (
    <section id="risks" className="relative w-full py-44 px-6 sm:px-8 md:px-12 bg-[var(--color-bg)]">

      <div className="max-w-[1200px] mx-auto">

        <div className="border-t border-[var(--color-border)] pt-8 mb-16">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
              10 &mdash; Honest Risks
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)] mb-8 max-w-[500px]">
            Why you should <em className="italic text-[var(--color-text-secondary)]">not</em> invest.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[520px] mb-12">
            If these feel like dealbreakers, I respect that. If they feel like the kind of risk worth taking early — we should talk.
          </p>
        </Reveal>

        <div className="w-full flex flex-col">
          {risks.map((risk, i) => (
            <motion.div
              key={risk.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.7 }}
              className={`w-full grid grid-cols-1 md:grid-cols-12 border-t border-[var(--color-border)] py-6 row-hover ${
                i === risks.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="col-span-1 md:col-span-1 flex items-baseline">
                <span className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--color-text-secondary)] tracking-[0.1em]">
                  0{i + 1}
                </span>
              </div>
              <div className="col-span-1 md:col-span-4 flex items-baseline mt-1 md:mt-0">
                <span className="font-[family-name:var(--font-display)] text-[clamp(1rem,1.5vw,1.3rem)] leading-[1.15] text-[var(--color-text)]">
                  {risk.title}
                </span>
              </div>
              <div className="col-span-1 md:col-span-7 flex items-baseline mt-2 md:mt-0">
                <span className="font-[family-name:var(--font-body)] text-[0.8rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  {risk.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
