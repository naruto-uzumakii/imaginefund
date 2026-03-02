"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { useCountUp } from "@/hooks/useCountUp"

function StatItem({ numValue, prefix = "", suffix = "", label, desc, delay = 0 }: {
  numValue: number
  prefix?: string
  suffix?: string
  label: string
  desc: string
  delay?: number
}) {
  const { count, ref } = useCountUp(numValue, 2000)
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      ref={ref}
      className="flex flex-col gap-3"
    >
      <div className="w-8 h-px bg-[var(--color-text)] opacity-15 mb-4" />
      <div className="font-[family-name:var(--font-display)] text-[clamp(1.8rem,3vw,2.8rem)] leading-none tracking-tight tabular-nums text-[var(--color-text)]">
        {prefix}{count}{suffix}
      </div>
      <div className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
        {label}
      </div>
      <p className="font-[family-name:var(--font-body)] text-[0.8rem] leading-[1.6] text-[var(--color-text-secondary)] max-w-[260px]">
        {desc}
      </p>
    </motion.div>
  )
}

const companies = [
  "Emergent", "Composio", "Sentient AI", "Nerve AI", "Sarvam AI",
]

export default function Founder() {
  return (
    <section id="who" className="relative w-full py-44 px-6 sm:px-8 md:px-12 bg-[var(--color-bg)]">

      <div className="max-w-[1200px] mx-auto">

        <div className="border-t border-[var(--color-border)] pt-8 mb-16">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
              01 &mdash; The Founder
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-14">
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)]">
                A decade of creative infrastructure built <em className="italic text-[var(--color-text-secondary)]">before</em> the cheque.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[480px] mb-10">
                We are anchored by Spacekayak, a 20-person creative practice serving as early partners for category definers. We built the brand for BFI and serve as the creative arm for Vanagon Ventures and Flog Ventures in Europe.
                <CiteMark cardKey="sk-europe" number={2} />
              </p>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.12em] text-[var(--color-text-secondary)] mr-3">Select Partners</span>
                {companies.map(c => (
                  <span key={c} className="text-[0.65rem] px-2.5 py-1 border border-[var(--color-border)] text-[var(--color-text-secondary)]">{c}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          <StatItem
            numValue={80}
            suffix="+"
            label="Ventures Shaped"
            desc="Deep operational involvement from day zero to launch and beyond."
            delay={0.3}
          />
          <StatItem
            numValue={1}
            prefix="$"
            suffix="B+"
            label="Capital Raised"
            desc="Total capital raised collectively by our design and infrastructure partners."
            delay={0.4}
          />
        </div>

      </div>
    </section>
  )
}
