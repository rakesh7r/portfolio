import { cn } from "@/lib/utils"
import { Reveal } from "@/components/motion/reveal"
import { type ReactNode } from "react"

/** Shared max-width shell with consistent horizontal rhythm. */
export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 md:px-10", className)}>
      {children}
    </div>
  )
}

/** Mono eyebrow + large heading, revealed on scroll. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
}: {
  eyebrow: string
  title: string
  lede?: string
  className?: string
}) {
  return (
    <Reveal className={cn("max-w-2xl", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 text-lg leading-relaxed text-fg-muted">{lede}</p>
      ) : null}
    </Reveal>
  )
}
