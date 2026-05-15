import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

import { projects } from '../../data'
import Container from '../ui/Container'

const ProjectsSection = () => {
  return (
    <section
      id="projects"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="
            text-primary
            uppercase
            tracking-[0.3em]
            text-sm
            mb-4
          ">
            Featured Projects
          </p>

          <h2 className="section-title max-w-5xl">
            Production-grade platforms built for real-world systems.
          </h2>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                grid
                lg:grid-cols-2
                gap-10
                glass-card
                rounded-[32px]
                overflow-hidden
                p-6
                lg:p-8
                transition-all
                duration-500
                hover:border-primary/20
                hover:shadow-[0_10px_60px_rgba(0,0,0,0.35)]
              "
            >
              {/* Image */}
              <div className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-border
                bg-secondary/20
              ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-[260px]
                    md:h-full
                    object-cover
                    hover:scale-105
                    transition-transform
                    duration-700
                  "
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <p className="
                    text-primary
                    text-sm
                    uppercase
                    tracking-[0.2em]
                    mb-4
                  ">
                    {project.category}
                  </p>

                  <h3 className="card-title mb-6">
                    {project.title}
                  </h3>

                  <p className="
                    body-lg
                    text-muted-foreground
                    mb-8
                  ">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-4
                          py-2
                          rounded-full
                          border
                          border-border
                          bg-secondary/30
                          small-text
                          text-foreground/80
                          backdrop-blur-xl
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="
                          px-4
                          py-3
                          rounded-2xl
                          bg-primary/10
                          border
                          border-primary/20
                          text-primary
                          small-text
                        "
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                {project.github && (
                    <a
                    href={project.github}
                    target="_blank"
                    className="
                        flex
                        items-center
                        gap-2
                        border
                        border-border
                        bg-secondary/30
                        hover:bg-secondary/50
                        transition-all
                        duration-300
                        px-5
                        py-3
                        rounded-2xl
                    "
                    >
                    <FaGithub size={18} />
                    GitHub
                    </a>
                )}

                {project.live ? (
                    <a
                    href={project.live}
                    target="_blank"
                    className="
                        flex
                        items-center
                        gap-2
                        bg-primary
                        text-primary-foreground
                        hover:opacity-90
                        transition-all
                        duration-300
                        px-5
                        py-3
                        rounded-2xl
                        font-medium
                    "
                    >
                    Live Demo
                    <ArrowUpRight size={18} />
                    </a>
                ) : (
                    <div
                className="
                    relative
                    overflow-hidden

                    flex
                    items-center
                    gap-2

                    px-5
                    py-3

                    rounded-2xl

                    border
                    border-white/[0.08]

                    bg-card/80
                    backdrop-blur-2xl

                    text-foreground

                    text-sm
                    font-medium

                    shadow-[0_8px_30px_rgba(0,0,0,0.18)]
                "
                >
                {/* Glow */}
                <div
                    className="
                    absolute
                    inset-0

                    bg-gradient-to-r
                    from-primary/[0.08]
                    via-transparent
                    to-primary/[0.08]

                    pointer-events-none
                    "
                />

                {/* Dot */}
                <span
                    className="
                    relative
                    z-10

                    w-2
                    h-2

                    rounded-full

                    bg-primary

                    shadow-[0_0_12px_rgba(168,85,247,0.8)]
                    "
                />

                <span className="relative z-10">
                    Enterprise Confidential
                </span>
                </div>
                )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProjectsSection