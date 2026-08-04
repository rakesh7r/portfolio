"use client"

import { useInView, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"

/**
 * Animates the numeric portion of a stat string ("1M+", "<200ms", "99.9%")
 * counting up when it enters the viewport. Non-numeric prefix/suffix are
 * preserved verbatim.
 */
export function CountUp({
  value,
  duration = 1.4,
  className,
}: {
  value: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-10% 0px" })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(value)

  useEffect(() => {
    const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/)
    if (!match || reduced) {
      setDisplay(value)
      return
    }
    const [, prefix, num, suffix] = match
    const target = parseFloat(num)
    const decimals = num.includes(".") ? num.split(".")[1].length : 0
    if (!inView) {
      setDisplay(`${prefix}${(0).toFixed(decimals)}${suffix}`)
      return
    }
    let raf: number
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / (duration * 1000), 1)
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      setDisplay(`${prefix}${(target * eased).toFixed(decimals)}${suffix}`)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration, reduced])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
