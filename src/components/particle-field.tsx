"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

/**
 * Ambient neural-field canvas behind the hero: slow-drifting nodes with
 * hairline links, gently repelled by the cursor. Theme-aware (reads the
 * accent CSS variable), DPR-capped, paused when off-screen, and disabled
 * entirely under prefers-reduced-motion.
 */
export function ParticleField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let width = 0
    let height = 0
    let particles: Particle[] = []
    let raf = 0
    let running = true
    const mouse = { x: -9999, y: -9999 }

    const LINK_DIST = 110
    const MOUSE_DIST = 140

    function accentRGB() {
      // Resolve the theme accent once per frame batch; cheap parse of #rrggbb
      const hex = getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim()
      const n = parseInt(hex.slice(1), 16)
      return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`
    }

    let rgb = accentRGB()
    const themeObserver = new MutationObserver(() => {
      rgb = accentRGB()
    })
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    function resize() {
      if (!canvas) return
      width = canvas.offsetWidth
      height = canvas.offsetHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(90, Math.floor((width * height) / 16000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    function frame() {
      if (!running) return
      ctx!.clearRect(0, 0, width, height)

      for (const p of particles) {
        // Cursor repulsion — subtle
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const d2 = dx * dx + dy * dy
        if (d2 < MOUSE_DIST * MOUSE_DIST && d2 > 0.01) {
          const d = Math.sqrt(d2)
          const f = ((MOUSE_DIST - d) / MOUSE_DIST) * 0.02
          p.vx += (dx / d) * f
          p.vy += (dy / d) * f
        }
        // Drift + soft speed cap
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.995
        p.vy *= 0.995
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20
      }

      // Links
      ctx!.lineWidth = 1
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.14
            ctx!.strokeStyle = `rgba(${rgb}, ${alpha})`
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      // Nodes
      for (const p of particles) {
        ctx!.fillStyle = `rgba(${rgb}, 0.5)`
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fill()
      }

      raf = requestAnimationFrame(frame)
    }

    function onPointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function onPointerLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    // Pause when the hero scrolls out of view — zero cost further down the page
    const visibility = new IntersectionObserver(([entry]) => {
      const visible = entry.isIntersecting
      if (visible && !running) {
        running = true
        raf = requestAnimationFrame(frame)
      } else if (!visible) {
        running = false
        cancelAnimationFrame(raf)
      }
    })
    visibility.observe(canvas)

    resize()
    raf = requestAnimationFrame(frame)
    window.addEventListener("resize", resize)
    window.addEventListener("pointermove", onPointerMove)
    document.addEventListener("pointerleave", onPointerLeave)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      themeObserver.disconnect()
      visibility.disconnect()
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onPointerMove)
      document.removeEventListener("pointerleave", onPointerLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
