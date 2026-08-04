"use client"

import { Moon, Sun } from "lucide-react"
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import { content } from "@/data/content"
import { cn } from "@/lib/utils"

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Principles", href: "#principles" },
  { label: "Contact", href: "#contact" },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="hairline flex size-9 items-center justify-center rounded-full text-fg-muted transition-colors duration-300 hover:text-fg"
    >
      {mounted ? (
        resolvedTheme === "dark" ? (
          <Sun className="size-4" />
        ) : (
          <Moon className="size-4" />
        )
      ) : (
        <span className="size-4" />
      )}
    </button>
  )
}

export function Nav() {
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50"
      initial={reduced ? false : { y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "transition-[background-color,backdrop-filter,box-shadow] duration-500",
          scrolled &&
            "bg-bg/70 shadow-[inset_0_-1px_0_var(--line)] backdrop-blur-xl"
        )}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
          <a
            href="#top"
            className="font-mono text-sm font-semibold tracking-widest text-fg"
            aria-label={`${content.meta.name} — home`}
          >
            {content.meta.mark}
            <span className="text-accent">.</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-fg-muted transition-colors duration-300 hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </nav>
      </div>
      {/* Reading progress hairline */}
      <motion.div
        className="h-px origin-left bg-accent"
        style={{ scaleX: progress }}
        aria-hidden
      />
    </motion.header>
  )
}
