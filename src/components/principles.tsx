import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { Container, SectionHeading } from "@/components/section"
import { content } from "@/data/content"

/** Engineering philosophy — the "why" behind every project above it. */
export function Principles() {
  return (
    <section id="principles" className="relative scroll-mt-24 py-24 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Engineering philosophy"
          title="Opinions, earned in production."
        />

        <RevealGroup className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {content.principles.map((p, i) => (
            <RevealItem key={p.title} className="group">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-xs text-fg-faint transition-colors duration-300 group-hover:text-accent">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight md:text-xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted md:text-base">
                    {p.body}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-20">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-line-strong to-transparent" />
        </Reveal>
      </Container>
    </section>
  )
}
