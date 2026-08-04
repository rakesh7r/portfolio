import { ArrowUpRight } from "lucide-react"

import { ArchDiagram } from "@/components/arch-diagram"
import { CountUp } from "@/components/motion/count-up"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { Container, SectionHeading } from "@/components/section"
import { content } from "@/data/content"
import type { Project } from "@/data/types"
import { cn } from "@/lib/utils"

function ProjectCase({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1

  return (
    <article
      className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
      aria-labelledby={`project-${project.slug}`}
    >
      {/* Sticky visual — stays pinned while the narrative scrolls past */}
      <div
        className={cn(
          "lg:sticky lg:top-28",
          flip ? "lg:order-2" : "lg:order-1"
        )}
      >
        <Reveal>
          <ArchDiagram project={project} />
        </Reveal>
      </div>

      {/* Narrative */}
      <div className={flip ? "lg:order-1" : "lg:order-2"}>
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-xs text-fg-faint">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-line-strong" aria-hidden />
            <span>{project.year}</span>
            <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] text-accent">
              {project.status}
            </span>
          </div>
          <h3
            id={`project-${project.slug}`}
            className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl"
          >
            {project.name}
          </h3>
          <p className="mt-2 text-lg text-fg-muted">{project.tagline}</p>
          <p className="mt-6 leading-relaxed text-fg-muted">
            {project.description}
          </p>
        </Reveal>

        {/* Metrics */}
        <RevealGroup className="mt-8 grid grid-cols-3 gap-4">
          {project.metrics.map((m) => (
            <RevealItem key={m.label}>
              <p className="text-xl font-semibold tracking-tight md:text-2xl">
                <CountUp value={m.value} />
              </p>
              <p className="mt-1 text-xs leading-snug text-fg-faint">
                {m.label}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Challenges → solutions */}
        <RevealGroup className="mt-10 space-y-4">
          {project.challenges.map((c, i) => (
            <RevealItem
              key={i}
              className="hairline rounded-xl bg-bg-raised/40 p-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">
                Challenge
              </p>
              <p className="mt-1.5 text-sm leading-relaxed">{c.problem}</p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                Solution
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                {c.solution}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* Outcome */}
        <Reveal className="mt-8 border-l-2 border-accent pl-5">
          <p className="text-sm leading-relaxed text-fg-muted">
            <span className="font-medium text-fg">Outcome — </span>
            {project.outcome}
          </p>
        </Reveal>

        {/* Stack + links */}
        <Reveal className="mt-8 flex flex-wrap items-center gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="hairline rounded-full px-3 py-1 font-mono text-[11px] text-fg-muted"
            >
              {tech}
            </span>
          ))}
        </Reveal>
        {(project.links.live || project.links.code) && (
          <Reveal className="mt-6 flex gap-5">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Live <ArrowUpRight className="size-3.5" />
              </a>
            )}
            {project.links.code && (
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-fg-muted hover:text-fg"
              >
                Source <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </Reveal>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="work" className="section-glow relative scroll-mt-24 py-24 md:py-36">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Systems, not side projects."
          lede="Each of these runs in production, has real users, and taught me something a tutorial never could. Full architecture, honest trade-offs, measured outcomes."
        />
        <div className="mt-20 space-y-32 md:mt-28 md:space-y-44">
          {content.projects.map((project, i) => (
            <ProjectCase key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
