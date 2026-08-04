"use client"

import { motion, useReducedMotion, type Variants } from "motion/react"
import { type ReactNode } from "react"

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Cinematic masked text reveal: each child renders inside an
 * overflow-hidden line and rises into view with a stagger.
 *
 * The in-view trigger observes the (always visible) parent element and
 * propagates to lines via variants — observing the translated lines
 * themselves would never fire, since they start fully clipped by the
 * overflow-hidden mask.
 */
export function MaskedLines({
  lines,
  as = "span",
  delay = 0,
  stagger = 0.12,
  duration = 1.1,
  lineClassName,
  inView = false,
}: {
  lines: ReactNode[]
  as?: "span" | "h1" | "h2" | "p"
  delay?: number
  stagger?: number
  duration?: number
  lineClassName?: (index: number) => string | undefined
  /** Animate when scrolled into view instead of on mount */
  inView?: boolean
}) {
  const reduced = useReducedMotion()
  const MotionTag = motion[as]

  const lineVariants: Variants = {
    hidden: { y: "110%" },
    show: (i: number) => ({
      y: "0%",
      transition: { duration, delay: delay + i * stagger, ease: EASE },
    }),
  }

  const trigger = inView
    ? {
        whileInView: "show" as const,
        viewport: { once: true, margin: "-10% 0px" },
      }
    : { animate: "show" as const }

  return (
    <MotionTag initial={reduced ? "show" : "hidden"} {...trigger}>
      {lines.map((line, i) => (
        <span className="mask-line" key={i}>
          <motion.span
            className={`block will-change-transform ${lineClassName?.(i) ?? ""}`}
            variants={lineVariants}
            custom={i}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
