"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"
import { easings } from "@/lib/easings"

const ease = easings.dramatic

export default function CloseCTA() {
  return (
    <section
      id="close"
      className="w-full flex flex-col justify-center items-center text-center px-6 sm:px-8 md:px-12 py-44 bg-[var(--color-bg)] relative"
    >
      {/* Decorative corner brackets */}
      <span className="hidden md:block absolute top-16 left-[6%] w-[16px] h-[16px] border-t border-l border-[var(--color-text)] opacity-[0.06] pointer-events-none" />
      <span className="hidden md:block absolute top-16 right-[6%] w-[16px] h-[16px] border-t border-r border-[var(--color-text)] opacity-[0.06] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto w-full border-t border-[var(--color-border)] pt-16 flex flex-col items-center">

        <Reveal>
          <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] mb-16 flex items-center gap-2.5">
            <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
            Connect
          </p>
        </Reveal>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)] max-w-[600px] mb-8"
        >
          <em className="italic text-[var(--color-text-secondary)]">Imagine Fund</em> — creative capital as infrastructure.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[440px] mb-12"
        >
          The earliest stage is where the highest-leverage work happens. Before startups exist. Before anyone else would bet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease }}
        >
          <a
            href="mailto:p@spacekayak.xyz"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-body)] text-[0.9rem] text-[var(--color-text)] border-b border-[var(--color-text)] pb-1 hover:text-[var(--color-text-secondary)] hover:border-[var(--color-text-secondary)] transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text)] pulse-dot" />
            p@spacekayak.xyz
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease }}
          className="mt-16 flex gap-8 font-[family-name:var(--font-mono)] text-[0.55rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]"
        >
          <span>spacekayak.xyz</span>
          <span>@imaginefund</span>
        </motion.div>

      </div>
    </section>
  )
}
