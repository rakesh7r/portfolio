/**
 * Schema for content.json — the single source of truth for every word,
 * link, and number on the site. Edit content.json; never hard-code copy
 * in components.
 */

export interface SiteMeta {
  name: string
  role: string
  /** Used in <title> and OG tags */
  title: string
  /** SEO description */
  description: string
  url: string
  location: string
  email: string
  /** Shown in the nav wordmark, e.g. initials */
  mark: string
}

export interface SocialLinks {
  github?: string
  linkedin?: string
  twitter?: string
  resume?: string
}

export interface Hero {
  eyebrow: string
  /** Each entry renders as one masked-reveal line of the headline */
  headline: string[]
  /** Index into `headline` that gets the gradient treatment */
  gradientLine: number
  subheadline: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export interface Metric {
  value: string
  label: string
}

export interface ProjectChallenge {
  problem: string
  solution: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  year: string
  status: string
  description: string
  metrics: Metric[]
  /** Ordered layers of the animated architecture diagram, top to bottom */
  architecture: { name: string; detail: string }[]
  challenges: ProjectChallenge[]
  outcome: string
  stack: string[]
  links: { live?: string; code?: string }
}

export interface ExperienceEntry {
  company: string
  role: string
  period: string
  location: string
  summary: string
  highlights: string[]
  stack: string[]
}

export interface SkillDomain {
  title: string
  blurb: string
  items: { name: string; note: string }[]
}

export interface Principle {
  title: string
  body: string
}

export interface Contact {
  eyebrow: string
  heading: string
  body: string
  ctaLabel: string
}

export interface Content {
  meta: SiteMeta
  social: SocialLinks
  hero: Hero
  /** Proof strip under the hero */
  metrics: Metric[]
  projects: Project[]
  experience: ExperienceEntry[]
  skills: SkillDomain[]
  principles: Principle[]
  currentFocus: string
  contact: Contact
}
