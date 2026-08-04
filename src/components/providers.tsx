"use client"

import Lenis from "lenis"
import { ThemeProvider } from "next-themes"
import { useEffect, type ReactNode } from "react"

/** Smooth (Lenis) scrolling — disabled for reduced-motion users. */
function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const lenis = new Lenis({
      lerp: 0.12,
      anchors: true,
    })
    let raf: number
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return children
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  )
}
