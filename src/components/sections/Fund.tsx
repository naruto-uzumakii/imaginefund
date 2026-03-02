"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { useCountUp } from "@/hooks/useCountUp"

function StatItem({ numValue, prefix = "", suffix = "", label, sublabel, delay = 0 }: {
  numValue: number
  prefix?: string
  suffix?: string
  label: string
  sublabel: string
  delay?: number
}) {
  const { count, ref } = useCountUp(numValue, 2200)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="flex flex-col gap-3"
    >
      <div className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
        {label}
      </div>
      <div className="w-8 h-px bg-[var(--color-text)] opacity-15 mb-4" />
      <div className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.5rem)] leading-none tracking-tight tabular-nums text-[var(--color-text)]">
        {prefix}{count}{suffix}
      </div>
      <p className="font-[family-name:var(--font-body)] text-[0.8rem] leading-[1.6] text-[var(--color-text-secondary)] max-w-[240px]">
        {sublabel}
      </p>
    </motion.div>
  )
}

const fundTerms = [
  { label: "Total Raise", value: "$10,000,000" },
  { label: "Vehicle", value: "Imagine Fund" },
  { label: "Deployment", value: "~$9M across ~20 co." },
  { label: "Check Range", value: "$100K – $500K" },
  { label: "Min LP", value: "$100,000" },
]

export default function Fund() {
  return (
    <section id="fund" className="relative w-full py-44 px-6 sm:px-8 md:px-12 bg-[var(--color-bg)]">

      <div className="max-w-[1200px] mx-auto">

        <div className="border-t border-[var(--color-border)] pt-8 mb-16">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
              03 &mdash; The Capital
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-12">
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)]">
                One raise. One race. <em className="italic text-[var(--color-text-secondary)]">Creative capital.</em>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[480px]">
                Imagine Fund operates as a highly concentrated pool of capital. We don&rsquo;t spray and pray. We take concentrated positions and build alongside our founders.
                <CiteMark cardKey="fund-structure" number={4} />
              </p>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <StatItem numValue={9} prefix="$" suffix="M" label="Deployable Capital" sublabel="Directed to ~20 investments." delay={0.3} />
          <StatItem numValue={1} prefix="$" suffix="M" label="Mgmt Fee" sublabel="Funds operations, programs, and team." delay={0.4} />
          <StatItem numValue={20} prefix="~" suffix="" label="Target Companies" sublabel="Category-defining founders at earliest stage." delay={0.5} />
        </div>

        <div className="border-t border-[var(--color-border)] pt-8">
          <Reveal delay={0.5}>
            <div className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.12em] uppercase text-[var(--color-text-secondary)] mb-6">
              Terms Overview
            </div>
            <div className="flex flex-col max-w-[400px]">
              {fundTerms.map((item) => (
                <div key={item.label} className="flex justify-between items-baseline py-2.5 border-b border-[var(--color-border)] last:border-0">
                  <span className="font-[family-name:var(--font-body)] text-[0.75rem] text-[var(--color-text-secondary)]">{item.label}</span>
                  <span className="font-[family-name:var(--font-mono)] text-[0.7rem] text-[var(--color-text)]">{item.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
