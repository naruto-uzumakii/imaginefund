"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"

const returns = [
  { tier: "Base", multiple: "3×", desc: "1–2 modest exits from 20." },
  { tier: "Target", multiple: "5–8×", desc: "One breakout. Several solid outcomes." },
  { tier: "Outlier", multiple: "15×+", desc: "Category-defining company." },
]

export default function ReturnModel() {
  return (
    <section id="returns" className="relative w-full py-44 px-6 sm:px-8 md:px-12 bg-[var(--color-bg)]">

      <div className="max-w-[1200px] mx-auto">

        <div className="border-t border-[var(--color-border)] pt-8 mb-16">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
              09 &mdash; Returns
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-12">
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)]">
                Fund I proves the system. <em className="italic text-[var(--color-text-secondary)]">Fund II scales it.</em>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[480px]">
                Fund II target: $50M. After proof, after breakouts, after the corridor is real enough that LPs can walk through it.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="w-full flex flex-col">
          {returns.map((r, i) => (
            <motion.div
              key={r.tier}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.7 }}
              className={`w-full grid grid-cols-1 md:grid-cols-12 border-t border-[var(--color-border)] py-6 row-hover ${
                i === returns.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="col-span-1 md:col-span-2 flex items-baseline">
                <span className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                  {r.tier}
                </span>
              </div>
              <div className="col-span-1 md:col-span-3 flex items-baseline mt-1 md:mt-0">
                <span className="font-[family-name:var(--font-display)] text-[clamp(1.2rem,1.8vw,1.6rem)] leading-none text-[var(--color-text)]">
                  {r.multiple}
                </span>
              </div>
              <div className="col-span-1 md:col-span-7 flex items-baseline mt-2 md:mt-0">
                <span className="font-[family-name:var(--font-body)] text-[0.8rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  {r.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
