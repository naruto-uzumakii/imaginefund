"use client"

import { motion } from "framer-motion"
import Reveal from "@/components/animations/Reveal"
import CiteMark from "@/components/ui/CiteMark"

const phases = [
  { month: "Month 1", name: "Clarity", description: "Thesis, prototype, first user calls. The foundational sprint to find the signal in the noise." },
  { month: "Month 2", name: "Product", description: "Core loop, design system, messaging. Hardening the infrastructure for scale." },
  { month: "Month 3", name: "Distribution", description: "Launch assets, video, channel tests. Building the organic wedge." },
  { month: "Month 4", name: "Momentum", description: "Public drop, pilots, GTM sprint. Activating the network and scaling." },
]

export default function Renaissance() {
  return (
    <section id="renaissance" className="relative w-full bg-white hairline-t">

      <div className="section-pad container-base">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 min-h-[70vh]">

          {/* Left column — heading + description */}
          <div className="lg:col-span-5 flex flex-col justify-between">

            <div className="pt-8">
              <Reveal>
                <span className="text-eyebrow text-black/50 mb-4 block">
                  Market
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-h2 text-black max-w-[400px]">
                  120 days from zero to launch.
                </h2>
              </Reveal>
            </div>

            <div className="pb-16 pt-24">
              <Reveal delay={0.3}>
                <p className="text-body-base text-black/60 max-w-[320px]">
                  Structured hours every week. Design, growth, creative direction, introductions. Output, not advice. 24-hour build sprints. Drop Nights for public shipping.
                  <CiteMark cardKey="renaissance-how" number={6} />
                </p>
              </Reveal>
            </div>
          </div>

          {/* Right column — The minimal light timeline panel */}
          <div className="lg:col-span-7 bg-[var(--color-bg)] rounded-3xl p-12 lg:p-24 border border-black/5 relative overflow-hidden">

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

            <div className="relative">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1 + 0.1 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-start"
                >
                  {/* Left phase name */}
                  <div className="w-[120px] shrink-0 text-right pr-8 md:pr-12 pt-0.5">
                    <span className="text-body-base font-medium text-black block">
                      {phase.name}
                    </span>
                  </div>

                  {/* Center Dot and vertical line */}
                  <div className="flex flex-col items-center shrink-0 relative w-3 pt-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-black relative z-10" />
                    {/* The continuous line spanning down */}
                    <div className={`w-[1px] bg-black/10 absolute top-4 ${i === phases.length - 1 ? 'h-[100px]' : 'h-[calc(100%+64px)]'}`} />
                  </div>

                  {/* Right description */}
                  <div className="flex-1 pl-8 md:pl-12 pb-16">
                    <p className="text-body-base text-black/60 max-w-[380px]">
                      {phase.description}
                    </p>
                    <span className="text-mono-sm text-black/40 mt-3 block">
                      {phase.month}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Bottom arrow tip */}
              <div className="flex items-start opacity-30 mt-8">
                <div className="w-[120px] shrink-0 pr-8 md:pr-12" />
                <div className="flex flex-col items-center shrink-0 relative w-3 pt-4">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L0.535898 0H7.4641L4 6Z" fill="black" />
                  </svg>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
