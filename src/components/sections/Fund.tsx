"use client"

import CiteMark from "@/components/ui/CiteMark"
import Reveal from "@/components/animations/Reveal"
import { useCountUp } from "@/hooks/useCountUp"
import { motion } from "framer-motion"

function HugeTypographyBlock({ numValue, prefix = "", suffix = "", label, delay = 0, isBordered = true }: {
  numValue: number
  prefix?: string
  suffix?: string
  label: string
  delay?: number
  isBordered?: boolean
}) {
  const { count, ref } = useCountUp(numValue, 1500)
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={`pb-8 ${isBordered ? 'border-b border-black/10' : ''}`}
    >
      <div className="text-massive tabular-nums text-black origin-left tracking-tighter">
        {prefix}{count}<span className="text-[0.6em] tracking-tight whitespace-nowrap">{suffix}</span>
      </div>
      <p className="text-body-base text-black/80 mt-6 max-w-[320px]">
        {label}
      </p>
    </motion.div>
  )
}

export default function Fund() {
  return (
    <section id="fund" className="relative w-full bg-[var(--color-bg)] text-black hairline-t">

      <div className="section-pad container-base">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative mt-16">

          {/* Left: Stack of massive Nike-style heavy numbers */}
          <div className="lg:col-span-6 flex flex-col gap-8 lg:pr-12 xl:pr-24 lg:border-r lg:border-black/10">

            {/* The Green INTRODUCTION label */}
            <Reveal>
              <div className="text-eyebrow text-[var(--color-accent)] mb-12">
                03 — The Capital
              </div>
            </Reveal>

            <HugeTypographyBlock
              numValue={9}
              prefix="$"
              suffix="M"
              label="deployable capital directed to ~20 investments in owned or operated facilities"
              delay={0.1}
            />
            <HugeTypographyBlock
              numValue={100}
              suffix="%"
              label="creative infrastructure committed to every portfolio company from day zero"
              delay={0.2}
            />
            <HugeTypographyBlock
              numValue={20}
              prefix="~"
              suffix=""
              label="target companies at the earliest stage of conviction in our extended network"
              delay={0.3}
              isBordered={false}
            />
          </div>

          {/* Right: Dense editorial prose matching the Nike report right side */}
          <div className="lg:col-span-6 pt-0 lg:pt-20">
            <Reveal delay={0.2}>
              <div className="columns-1 md:columns-2 gap-10">
                <p className="text-body-base text-black/90 mb-6 break-inside-avoid">
                  Imagine Fund operates as a highly concentrated pool of capital. We see it in saturated markets, crowded pitches, and in limited runway for founders. To address the urgency of building and its impact on the market, IF is committed to innovating and partnering to find solutions that help protect the founder&apos;s vision, and with it, the future of the product.
                  <CiteMark cardKey="fund-structure" number={4} />
                </p>
                <p className="text-body-base text-black/90 mb-6 break-inside-avoid">
                  Our goal is to reduce the operational friction, and — to do this — we focus on our areas of greatest impact. We don&apos;t spray and pray. We take concentrated positions and build alongside our founders. We are prioritizing better design and making products that are easier to launch or scale.
                </p>
                <p className="text-body-base text-black/90 mb-6 break-inside-avoid">
                  Every dollar deployed comes with creative infrastructure: brand, narrative, launch assets, and distribution. IF takes the same innovative approach to reducing friction across our entire value chain. From the way we operate our own facilities to how we use our influence to improve the footprint of the places where our product is manufactured.
                </p>
                <p className="text-body-base text-black/90 mb-6 break-inside-avoid">
                  This is not advisory. This is hands-on production work that compounds the value of every check we write. While we increase our impact, we also work to create positive change through efforts such as video production and by bringing builders around the world along with us on our journey.
                </p>
              </div>
            </Reveal>

            {/* Subtext footnote as seen in the bottom right of the Nike screenshot */}
            <Reveal delay={0.4}>
              <div className="mt-32 pt-6 border-t border-black/10 md:ml-auto md:w-1/2">
                <p className="text-body-sm text-black/60">
                  46 Infrastructure refers to IF brand production, launch video assets, and distribution support that aren&apos;t fit for standard VC support.
                </p>
              </div>
            </Reveal>
          </div>

        </div>

      </div>
    </section>
  )
}
