"use client"

import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { motion } from "framer-motion"

const floors = [
  { position: "Top", name: "Build", description: "Founders and engineers in density. Speed becomes contagious." },
  { position: "Middle", name: "Design", description: "The taste engine. Ideas get form, identity, and conviction." },
  { position: "Ground", name: "Launch", description: "Production studio. Professional video and platform-native distribution." },
]

export default function Sanctuary() {
  return (
    <section id="parc" className="relative w-full py-44 px-6 sm:px-8 md:px-12 bg-[var(--color-bg)]">

      <div className="max-w-[1200px] mx-auto">

        <div className="border-t border-[var(--color-border)] pt-8 mb-16">
          <Reveal>
            <p className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)] flex items-center gap-2.5">
              <span className="w-1 h-1 rounded-full bg-[var(--color-text-secondary)] opacity-40" />
              03b &mdash; The Space
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-12">
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <h2 className="font-[family-name:var(--font-display)] font-normal text-[clamp(1.5rem,2.2vw,2.2rem)] leading-[1.15] tracking-tight-editorial text-[var(--color-text)]">
                A physical building for <em className="italic text-[var(--color-text-secondary)]">builders.</em>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={0.2}>
              <p className="font-[family-name:var(--font-body)] text-[0.85rem] leading-[1.7] text-[var(--color-text-secondary)] max-w-[480px]">
                A building in Koramangala, Bangalore. Ten-year lease. Three floors structured as a single continuous loop: build, design, launch.
                <CiteMark cardKey="sanctuary-vision" number={5} />
              </p>
            </Reveal>
          </div>
        </div>

        <div className="w-full flex flex-col">
          {floors.map((floor, i) => (
            <motion.div
              key={floor.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.7 }}
              className={`w-full grid grid-cols-1 md:grid-cols-12 border-t border-[var(--color-border)] py-6 row-hover ${
                i === floors.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="col-span-1 md:col-span-2 flex items-baseline">
                <span className="font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.15em] text-[var(--color-text-secondary)]">
                  {floor.position}
                </span>
              </div>
              <div className="col-span-1 md:col-span-3 flex items-baseline mt-1 md:mt-0">
                <span className="font-[family-name:var(--font-display)] text-[clamp(1.2rem,1.8vw,1.6rem)] leading-none text-[var(--color-text)]">
                  {floor.name}
                </span>
              </div>
              <div className="col-span-1 md:col-span-7 flex items-baseline mt-2 md:mt-0">
                <span className="font-[family-name:var(--font-body)] text-[0.8rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  {floor.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
