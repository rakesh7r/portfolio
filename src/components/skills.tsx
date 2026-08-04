import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { Container, SectionHeading } from "@/components/section"
import { content } from "@/data/content"

/**
 * Production stack map: three capability domains, each item paired with a
 * one-line note proving depth — no progress bars, no star ratings.
 */
export function Skills() {
  return (
    <section id="stack" className="section-glow relative scroll-mt-24 py-24 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Capability map"
          title="Depth over breadth."
          lede="Not a logo wall. Three domains I work in daily, and what I actually do with each tool in production."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {content.skills.map((domain, i) => (
            <Reveal key={domain.title} delay={i * 0.12} className="h-full">
              <div className="hairline group relative h-full overflow-hidden rounded-2xl bg-bg-raised/40 p-7 transition-shadow duration-500 hover:shadow-premium md:p-8">
                {/* Hover glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(360px 200px at 50% 0%, var(--glow), transparent 70%)",
                  }}
                />
                <div className="relative">
                  <p className="font-mono text-xs text-fg-faint">
                    0{i + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {domain.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {domain.blurb}
                  </p>
                  <RevealGroup className="mt-7 space-y-5">
                    {domain.items.map((item) => (
                      <RevealItem key={item.name}>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="mt-0.5 font-mono text-xs leading-relaxed text-fg-faint">
                          {item.note}
                        </p>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Current focus */}
        <Reveal className="mt-10">
          <div className="hairline flex flex-col gap-2 rounded-2xl bg-accent-soft p-7 md:flex-row md:items-center md:gap-6 md:p-8">
            <span className="shrink-0 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              Now
            </span>
            <p className="text-sm leading-relaxed text-fg-muted md:text-base">
              {content.currentFocus}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
