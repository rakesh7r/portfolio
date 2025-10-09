import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FooterProps {
  socials: {
    github: string
    linkedin: string
    twitter: string
    email: string
  }
}

export function Footer({ socials }: FooterProps) {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent/10"
              asChild
            >
              <a href={socials.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent/10"
              asChild
            >
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent/10"
              asChild
            >
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-accent/10"
              asChild
            >
              <a href={`mailto:${socials.email}`}>
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground">
            © {new Date().getFullYear() } Built with React, Framer Motion, and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  )
}