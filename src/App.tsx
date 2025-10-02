import { useEffect, useState } from 'react'
import { ThemeProvider } from '@/components/theme/ThemeProvider'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { GradientBackground } from '@/components/ui/gradient-bg'
import { Hero } from '@/components/sections/Hero'
import { Experience } from '@/components/sections/Experience'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Blogs } from '@/components/sections/Blogs'
import { Footer } from '@/components/sections/Footer'

interface PortfolioData {
  name: string
  title: string
  tagline: string
  bio: string
  experience: Array<{
    company: string
    role: string
    duration: string
    description: string
    technologies: string[]
  }>
  projects: Array<{
    title: string
    description: string
    tech: string[]
    github: string
    demo: string
    featured: boolean
  }>
  blogs: Array<{
    title: string
    description: string
    date: string
    readTime: string
    tags: string[]
    url: string
    featured: boolean
  }>
  skills: Array<{
    category: string
    technologies: string[]
  }>
  socials: {
    github: string
    linkedin: string
    twitter: string
    email: string
  }
}

function App() {
  const [portfolioData, setPortfolioData] = useState<PortfolioData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        const response = await fetch('/src/data/portfolio.json')
        const data = await response.json()
        setPortfolioData(data)
      } catch (error) {
        console.error('Failed to load portfolio data:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPortfolioData()
  }, [])

  if (loading) {
    return (
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading portfolio...</p>
          </div>
        </div>
      </ThemeProvider>
    )
  }

  if (!portfolioData) {
    return (
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <p className="text-destructive">Failed to load portfolio data</p>
          </div>
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden min-w-screen">
        <GradientBackground />
        <ThemeToggle />
        
        <main>
          <Hero data={portfolioData} />
          <Experience data={portfolioData.experience} />
          <Projects data={portfolioData.projects} />
          <Blogs data={portfolioData.blogs} />
          <Skills data={portfolioData.skills} />
        </main>
        
        <Footer socials={portfolioData.socials} />
      </div>
    </ThemeProvider>
  )
}

export default App