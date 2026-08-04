"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowDown, ArrowRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { useRef } from "react"

import { content } from "@/data/content"
import { Magnetic } from "@/components/motion/magnetic"
import { MaskedLines } from "@/components/motion/masked-lines"
import { ParticleField } from "@/components/particle-field"

gsap.registerPlugin(ScrollTrigger)

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { hero } = content
  const root = useRef<HTMLElement>(null)
  const inner = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  // Cinematic exit: hero content recedes and dims as the next section
  // slides over it — the first "scene cut" of the page.
  useGSAP(
    () => {
      if (reduced) return
      gsap.to(inner.current, {
        opacity: 0,
        scale: 0.94,
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "85% top",
          scrub: true,
        },
      })
    },
    { scope: root }
  )

  return (
    <section
      ref={root}
      id="top"
      className="relative flex min-h-svh flex-col overflow-hidden"
    >
      {/* Ambient background layers */}
      <div className="absolute inset-0 grid-dots opacity-40" aria-hidden />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(900px 500px at 50% 20%, var(--glow), transparent 70%), radial-gradient(700px 400px at 80% 80%, var(--glow-2), transparent 70%)",
        }}
      />
      <ParticleField className="absolute inset-0 h-full w-full" />
      {/* Fade the backdrop into the page background at the bottom */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg"
        aria-hidden
      />

      <div
        ref={inner}
        className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-24 will-change-transform md:px-10"
      >
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.3em] text-fg-muted md:text-sm"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.15 }}
        >
          {hero.eyebrow}
        </motion.p>

        <div className="mt-6 text-[clamp(2.75rem,9vw,6.5rem)] font-semibold leading-[1.02] tracking-tight">
          <MaskedLines
            as="h1"
            lines={hero.headline}
            delay={0.3}
            lineClassName={(i) =>
              i === hero.gradientLine ? "text-gradient pb-[0.08em]" : undefined
            }
          />
        </div>

        <motion.p
          className="mt-8 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
        >
          <Magnetic>
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-transform duration-300 hover:scale-[1.03]"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={hero.secondaryCta.href}
              className="hairline inline-flex items-center rounded-full px-6 py-3 text-sm font-medium text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              {hero.secondaryCta.label}
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="relative mx-auto mb-10 flex flex-col items-center gap-2 text-fg-faint"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        aria-hidden
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          scroll
        </span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.div>
    </section>
  )
}
