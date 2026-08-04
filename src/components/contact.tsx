import { ArrowUpRight, Mail } from "lucide-react"

import { Magnetic } from "@/components/motion/magnetic"
import { MaskedLines } from "@/components/motion/masked-lines"
import { Reveal } from "@/components/motion/reveal"
import { Container } from "@/components/section"
import { content } from "@/data/content"

export function Contact() {
  const { contact, meta, social } = content
  const socials = [
    social.github && { label: "GitHub", href: social.github },
    social.linkedin && { label: "LinkedIn", href: social.linkedin },
    social.twitter && { label: "Twitter", href: social.twitter },
    social.resume && { label: "Résumé", href: social.resume },
  ].filter(Boolean) as { label: string; href: string }[]

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-28 md:py-40"
    >
      {/* Closing glow — the page ends on light, not on darkness */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(800px 480px at 50% 100%, var(--glow), transparent 70%)",
        }}
      />
      <Container className="relative">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
          {contact.eyebrow}
        </p>
        <div className="mt-6 text-[clamp(2.25rem,6.5vw,4.5rem)] font-semibold leading-[1.05] tracking-tight">
          <MaskedLines as="h2" inView lines={[contact.heading]} />
        </div>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
            {contact.body}
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href={`mailto:${meta.email}`}
              className="group inline-flex items-center gap-2.5 rounded-full bg-fg px-7 py-3.5 text-sm font-medium text-bg transition-transform duration-300 hover:scale-[1.03]"
            >
              <Mail className="size-4" />
              {contact.ctaLabel}
            </a>
          </Magnetic>
          <span className="font-mono text-sm text-fg-faint">{meta.email}</span>
        </Reveal>

        <Reveal delay={0.35} className="mt-24">
          <footer className="flex flex-col gap-6 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-fg-faint">
              © {new Date().getFullYear()} {meta.name} · {meta.location}
            </p>
            <div className="flex gap-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-fg-muted transition-colors duration-300 hover:text-fg"
                >
                  {s.label}
                  <ArrowUpRight className="size-3" />
                </a>
              ))}
            </div>
          </footer>
        </Reveal>
      </Container>
    </section>
  )
}
