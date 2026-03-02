"use client"

import { Suspense, lazy } from "react"
import { motion } from "framer-motion"
import { easings } from "@/lib/easings"

const Globe = lazy(() => import("@/components/three/Globe"))

const ease = easings.dramatic || [0.76, 0, 0.24, 1]

export default function Hero() {
  return (
    <section className="min-h-[100svh] w-full flex flex-col relative overflow-hidden bg-[var(--color-bg)] pt-32 pb-16">

      {/* Decorative corner marks */}
      <span className="absolute top-8 left-6 sm:left-8 md:left-12 w-[20px] h-[20px] border-t border-l border-[var(--color-text)] opacity-[0.06] pointer-events-none" />
      <span className="absolute top-8 right-6 sm:right-8 md:right-12 w-[20px] h-[20px] border-t border-r border-[var(--color-text)] opacity-[0.06] pointer-events-none" />

      <div className="flex-1 w-full max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col justify-end relative z-10">

        {/* Globe sits in the whitespace between nav and content */}
        <div className="flex-1 min-h-[40vh] relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 2.5, ease }}
            className="w-[min(55vw,480px)] h-[min(55vw,480px)] pointer-events-none"
          >
            <Suspense fallback={null}>
              <Globe />
            </Suspense>
          </motion.div>
        </div>

        <div className="border-b border-[var(--color-border)] pb-12 mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2, ease }}
            className="font-[family-name:var(--font-display)] font-normal text-[var(--color-text)] text-[clamp(1.6rem,2.8vw,2.8rem)] leading-[1.15] tracking-tight-editorial max-w-[720px]"
          >
            We are a pre-seed firm anchored in Bangalore and San Francisco. We back technical founders building the foundation of an agentic world.
          </motion.h1>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5, ease }}
          className="absolute bottom-8 right-6 sm:right-8 md:right-12 flex flex-col items-center gap-2"
        >
          <span className="font-[family-name:var(--font-mono)] text-[0.5rem] tracking-[0.2em] uppercase text-[var(--color-text-secondary)] [writing-mode:vertical-lr]">Scroll</span>
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-[var(--color-text-secondary)] opacity-30"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease }}
          className="flex flex-wrap justify-between items-start gap-8 pt-4 font-[family-name:var(--font-mono)] text-[0.6rem] tracking-[0.15em] uppercase text-[var(--color-text-secondary)]"
        >
          <div className="flex flex-col gap-1.5">
            <span className="text-[var(--color-text)]">Status</span>
            <span>Deploying Fund I</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[var(--color-text)]">Stage</span>
            <span>Pre-seed & Seed</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[var(--color-text)]">Locations</span>
            <span>Bangalore / San Francisco</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[var(--color-text)]">Focus</span>
            <span>Infrastructure / Agentic AI</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
