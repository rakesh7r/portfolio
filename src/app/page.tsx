import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Hero } from "@/components/hero"
import { MetricsBand } from "@/components/metrics-band"
import { Nav } from "@/components/nav"
import { Principles } from "@/components/principles"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MetricsBand />
        <Projects />
        <Experience />
        <Skills />
        <Principles />
        <Contact />
      </main>
    </>
  )
}
