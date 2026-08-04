"use client"

import { ChevronDown } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"

import { Reveal } from "@/components/motion/reveal"
import { Container, SectionHeading } from "@/components/section"
import { content } from "@/data/content"
import { cn } from "@/lib/utils"

const EASE = [0.22, 1, 0.36, 1] as const

export function Experience() {
  const [open, setOpen] = useState(0)
  const reduced = useReducedMotion()

  return (
    <section id="experience" className="relative scroll-mt-24 py-24 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where the systems shipped."
          lede="Roles measured by what went to production, not by time served."
        />

        <div className="mt-16 space-y-4">
          {content.experience.map((entry, i) => {
            const isOpen = open === i
            return (
              <Reveal key={`${entry.company}-${entry.period}`} delay={i * 0.08}>
                <div
                  className={cn(
                    "hairline overflow-hidden rounded-2xl transition-colors duration-500",
                    isOpen ? "bg-bg-raised/60 shadow-premium" : "bg-transparent"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`experience-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left md:px-8"
                  >
                    <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-4">
                      <span className="text-lg font-semibold tracking-tight md:text-xl">
                        {entry.company}
                      </span>
                      <span className="text-sm text-fg-muted">
                        {entry.role}
                      </span>
                    </div>
                    <div className="flex shrink-0 items-center gap-4">
                      <span className="hidden font-mono text-xs text-fg-faint md:block">
                        {entry.period}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="text-fg-faint"
                      >
                        <ChevronDown className="size-4" />
                      </motion.span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`experience-panel-${i}`}
                        initial={reduced ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={
                          reduced ? undefined : { height: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.5, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-line px-6 pb-8 pt-6 md:px-8">
                          <p className="max-w-2xl text-sm leading-relaxed text-fg-muted md:text-base">
                            {entry.summary}
                          </p>
                          <ul className="mt-6 space-y-3">
                            {entry.highlights.map((h, j) => (
                              <motion.li
                                key={j}
                                className="flex gap-3 text-sm leading-relaxed text-fg-muted"
                                initial={
                                  reduced ? false : { opacity: 0, x: -12 }
                                }
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.5,
                                  delay: 0.15 + j * 0.08,
                                  ease: EASE,
                                }}
                              >
                                <span
                                  className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                                  aria-hidden
                                />
                                {h}
                              </motion.li>
                            ))}
                          </ul>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {entry.stack.map((tech) => (
                              <span
                                key={tech}
                                className="hairline rounded-full px-3 py-1 font-mono text-[11px] text-fg-muted"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <p className="mt-6 font-mono text-xs text-fg-faint md:hidden">
                            {entry.period} · {entry.location}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
