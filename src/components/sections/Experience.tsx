import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Section } from '@/components/ui/section'

interface ExperienceItem {
  company: string
  role: string
  duration: string
  description: string[] | string
  technologies: string[]
}

interface ExperienceProps {
  data: ExperienceItem[]
}

export function Experience({ data }: ExperienceProps) {
  return (
    <Section id="experience" className="px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made
          </p>
        </motion.div>

        <div className="space-y-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-teal-500/5" />
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-1">{item.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground/80">
                        {item.company}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="self-start sm:self-center">
                      {item.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                {Array.isArray(item.description) ? (
                    <ul className="list-disc list-inside mb-4 text-foreground/90">
                      {item.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mb-4 text-foreground/90">{item.description}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}