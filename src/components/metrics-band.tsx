import { content } from "@/data/content"
import { CountUp } from "@/components/motion/count-up"
import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { Container } from "@/components/section"

/** Proof strip — hard numbers before a single adjective. */
export function MetricsBand() {
  return (
    <section aria-label="Key metrics" className="relative py-20 md:py-28">
      <Container>
        <RevealGroup className="hairline grid grid-cols-2 divide-x divide-y divide-line rounded-2xl bg-bg-raised/50 md:grid-cols-4 md:divide-y-0">
          {content.metrics.map((metric) => (
            <RevealItem
              key={metric.label}
              className="flex flex-col gap-2 p-8 md:p-10"
            >
              <span className="text-3xl font-semibold tracking-tight md:text-4xl">
                <CountUp value={metric.value} />
              </span>
              <span className="text-sm leading-snug text-fg-muted">
                {metric.label}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  )
}
