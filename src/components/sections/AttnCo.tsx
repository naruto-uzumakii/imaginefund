"use client"

import { motion } from "framer-motion"
import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { useCountUp } from "@/hooks/useCountUp"

function StatItem({ numValue, suffix = "", label, delay = 0 }: {
  numValue: number
  suffix?: string
  label: string
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
      <div className="font-[family-name:var(--font-display)] text-[clamp(2rem,3.5vw,3.5rem)] leading-none tracking-tight tabular-nums text-[var(--color-text)]">
        {count}{suffix}
      </div>
      <div className="font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.12em] uppercase text-[var(--color-text-secondary)]">
        {label}
      </div>
    </motion.div>
  )
}

const attentionStack = [
  { num: "01", name: "Capture", desc: "IRL & launch films. Founder-led narrative that builds trust." },
  { num: "02", name: "Explain", desc: "Motion, 3D, product demos. Clarity and conviction." },
  { num: "03", name: "Multiply", desc: "AI-scaled content & promos. One shoot, dozens of assets." },
]

export default function AttnCo() {
  return (
    <section id="attn" className="relative w-full py-44 px-6 sm:px-8 md:px-12 bg-[var(--color-bg)]">

      <div className="max-w-[1200px] mx-auto">

        <div className="border-t border-[var(--color-border)] pt-8 mb-16">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
              05 &mdash; Distribution
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-12">
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)]">
                Attention, <em className="italic text-[var(--color-text-secondary)]">engineered.</em>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[480px]">
                Every Imagine Fund company gets professional video, founder-led narrative, and platform-native distribution as core infrastructure. We&rsquo;re building the producer-VC model for the earliest stage.
                <CiteMark cardKey="attn-thesis" number={7} />
              </p>
            </Reveal>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-12 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <StatItem numValue={30} suffix="M+" label="Organic Views" delay={0.3} />
          <StatItem numValue={55} suffix="+" label="Videos Shipped" delay={0.4} />
        </div>

        <div className="w-full flex flex-col">
          {attentionStack.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i, duration: 0.7 }}
              className={`w-full grid grid-cols-1 md:grid-cols-12 border-t border-[var(--color-border)] py-6 row-hover ${
                i === attentionStack.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="col-span-1 md:col-span-1 flex items-baseline">
                <span className="font-[family-name:var(--font-mono)] text-[0.6rem] text-[var(--color-text-secondary)] tracking-[0.1em]">
                  {item.num}
                </span>
              </div>
              <div className="col-span-1 md:col-span-3 flex items-baseline mt-1 md:mt-0">
                <span className="font-[family-name:var(--font-display)] text-[clamp(1.2rem,1.8vw,1.6rem)] leading-none text-[var(--color-text)]">
                  {item.name}
                </span>
              </div>
              <div className="col-span-1 md:col-span-8 flex items-baseline mt-2 md:mt-0">
                <span className="font-[family-name:var(--font-body)] text-[0.8rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  {item.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
