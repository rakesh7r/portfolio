"use client"

import { motion, useReducedMotion } from "motion/react"

import type { Project } from "@/data/types"

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * Animated system diagram built purely from content.json data: the
 * project's layers cascade in and stay connected by pulsing data links.
 * Serves as each project's "large visual" without needing image assets.
 */
export function ArchDiagram({ project }: { project: Project }) {
  const reduced = useReducedMotion()

  return (
    <div className="hairline relative overflow-hidden rounded-2xl bg-bg-raised/60 p-6 shadow-premium md:p-8">
      {/* Ambient glow inside the panel */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(420px 260px at 70% 0%, var(--glow), transparent 70%)",
        }}
      />
      {/* Terminal-style chrome */}
      <div className="relative mb-6 flex items-center justify-between">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-faint">
          {project.slug}.system
        </span>
      </div>

      <div className="relative flex flex-col items-stretch">
        {project.architecture.map((layer, i) => (
          <div key={layer.name} className="flex flex-col items-center">
            {i > 0 && (
              <motion.div
                className="relative h-5 w-px overflow-hidden bg-line-strong"
                initial={reduced ? false : { scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.4, delay: i * 0.14, ease: EASE }}
                aria-hidden
              >
                {/* Data pulse traveling down the link */}
                {!reduced && (
                  <motion.span
                    className="absolute left-0 top-0 h-2 w-px bg-accent"
                    animate={{ y: [-8, 24] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeIn",
                    }}
                  />
                )}
              </motion.div>
            )}
            <motion.div
              className="hairline w-full rounded-xl bg-bg-inset/80 px-5 py-3.5 backdrop-blur-sm transition-colors duration-300 hover:border-accent"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.14, ease: EASE }}
            >
              <p className="text-sm font-medium">{layer.name}</p>
              <p className="mt-0.5 font-mono text-[11px] text-fg-faint">
                {layer.detail}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
