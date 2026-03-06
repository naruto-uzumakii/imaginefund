"use client"

import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { motion } from "framer-motion"

const floors = [
  { position: "Top Floor", name: "BUILD", description: "Founders and engineers in density. Speed becomes contagious." },
  { position: "Middle", name: "DESIGN", description: "The taste engine. Ideas get form, identity, and conviction." },
  { position: "Ground", name: "LAUNCH", description: "Production studio. Professional video and platform-native distribution." },
]

export default function Sanctuary() {
  return (
    <section id="parc" className="relative w-full bg-[var(--color-bg)] hairline-t">

      <div className="section-pad container-base">

        {/* Top Report Header Bar similar to the screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-12 flex justify-between items-center border-b border-black/10 pb-6">
            <span className="text-eyebrow text-black font-semibold">
              Imagine Fund
            </span>
            <span className="text-eyebrow text-black">
              The Space — Koramangala
            </span>
            <span className="text-eyebrow text-black font-semibold">
              03B
            </span>
          </div>
        </div>

        {/* 50/50 split layout brought inside the master grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[80vh]">

          {/* Left: Context container representing the image area */}
          <div className="lg:col-span-5 relative bg-[#EBEBEB] min-h-[50vh] flex flex-col justify-end p-8 md:p-12 border border-black/5">
            {/* Subtle photographic noise/grain */}
            <div className="absolute inset-0 opacity-[0.4] mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

            <Reveal delay={0.1}>
              <h2 className="text-h2 text-black mb-8 bg-white/40 p-6 backdrop-blur-md inline-block mix-blend-luminosity relative z-10 w-full h-full flex flex-col justify-end">
                <span>A physical</span>
                <span>building for</span>
                <em className="italic opacity-80">builders.</em>
              </h2>
            </Reveal>
          </div>

          {/* Right: Pitch black panel with massive stacked data points */}
          <div className="lg:col-span-7 bg-[#121210] p-8 md:p-16 flex flex-col justify-between border border-black/5 text-white">

            {/* Top right description section */}
            <div className="mb-20">
              <Reveal delay={0.15}>
                <h3 className="text-h3 text-white mb-8">
                  A BUILDING IN KORAMANGALA.
                </h3>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-body-lg text-white/80 max-w-[420px]">
                  Ten-year lease. Three floors structured as a single continuous loop: build, design, launch. We exist to provide creative infrastructure to category-defining companies from day zero.
                  <CiteMark cardKey="sanctuary-vision" number={5} />
                </p>
              </Reveal>
            </div>

            {/* Massive stacked stats mimicking On Ambassadors */}
            <div className="flex flex-col border-t border-white/20">
              {floors.map((floor, i) => (
                <motion.div
                  key={floor.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + 0.15 * i, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className={`py-8 md:py-12 flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-16 border-b border-white/20`}
                >
                  {/* The massive Floor Name replacing the number */}
                  <div className="text-massive text-white shrink-0 tracking-tighter">
                    {floor.name}
                  </div>

                  {/* The small descriptive chunk on the right */}
                  <div className="flex flex-col gap-2 xl:max-w-[200px]">
                    <span className="text-eyebrow text-white/60">
                      {floor.position} floor
                    </span>
                    <span className="text-body-sm text-white/80">
                      {floor.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
