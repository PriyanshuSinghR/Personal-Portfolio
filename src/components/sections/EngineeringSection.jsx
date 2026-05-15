import { motion } from 'framer-motion'

import {
  BrainCircuit,
  Workflow,
  Boxes,
  Cpu,
} from 'lucide-react'

import Container from '../ui/Container'

const engineeringItems = [
  {
    title: 'AI Workflow Systems',
    description:
      'Building intelligent workflow automation systems powered by LLM pipelines, contextual retrieval, and document intelligence.',
    icon: BrainCircuit,
  },
  {
    title: 'Scalable Platforms',
    description:
      'Designing production-grade full stack applications with reusable architecture and high-performance systems.',
    icon: Boxes,
  },
  {
    title: 'Real-Time Systems',
    description:
      'Creating live operational workflows using streaming updates, synchronized state management, and event-driven architecture.',
    icon: Workflow,
  },
  {
    title: 'Developer Tooling',
    description:
      'Building secure runtime systems, execution pipelines, and engineering productivity platforms.',
    icon: Cpu,
  },
]

const EngineeringSection = () => {
  return (
    <section
      id="engineering"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="
            text-primary
            uppercase
            tracking-[0.3em]
            text-sm
            mb-4
          ">
            Engineering Focus
          </p>

          <h2 className="section-title max-w-5xl">
            Building systems that solve real operational problems.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {engineeringItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="
                  relative
                  overflow-hidden
                  glass-card
                  rounded-[32px]
                  p-8
                  transition-all
                  duration-500
                  hover:border-primary/20
                  hover:-translate-y-1
                "
              >
                <div className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-primary/5
                  to-transparent
                  opacity-0
                  hover:opacity-100
                  transition
                  duration-500
                " />

                <div className="relative z-10">
                  <div className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-primary/10
                    border
                    border-primary/20
                    flex
                    items-center
                    justify-center
                    mb-8
                  ">
                    <Icon
                      className="text-primary"
                      size={30}
                    />
                  </div>

                  <h3 className="card-title mb-5">
                    {item.title}
                  </h3>

                  <p className="body-lg text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default EngineeringSection