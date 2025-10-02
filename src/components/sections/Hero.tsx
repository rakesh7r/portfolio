import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HeroProps {
  data: {
    name: string
    title: string
    tagline: string
    bio: string
    socials: {
      github: string
      linkedin: string
      twitter: string
      email: string
    }
  }
}

export function Hero({ data }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 blur-3xl rounded-full" />
            <h1 className="relative text-6xl md:text-8xl font-bold bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
              {data.name}
            </h1>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-muted-foreground font-medium"
          >
            {data.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground/90 font-light max-w-3xl mx-auto"
          >
            {data.tagline}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {data.bio}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-background/50 backdrop-blur-sm border-border/50 hover:bg-accent/10"
              asChild
            >
              <a href={data.socials.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-background/50 backdrop-blur-sm border-border/50 hover:bg-accent/10"
              asChild
            >
              <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-background/50 backdrop-blur-sm border-border/50 hover:bg-accent/10"
              asChild
            >
              <a href={data.socials.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              asChild
            >
              <a href={`mailto:${data.socials.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}