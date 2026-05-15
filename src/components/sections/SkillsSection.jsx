import { motion } from 'framer-motion'
import { skills } from '../../data'
import Container from '../ui/Container'

const SkillsSection = () => {
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category

    if (!acc[category]) {
      acc[category] = []
    }

    acc[category].push(skill)

    return acc
  }, {})

  return (
    <section
      id="skills"
    >
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="
            text-primary
            uppercase
            tracking-[0.35em]
            text-sm
            mb-5
          ">
            Tech Stack
          </p>

          <h2 className="section-title max-w-5xl">
            Engineering tools used to build scalable intelligent systems.
          </h2>
        </motion.div>

        {/* GROUPS */}
        <div className="space-y-10">
          {Object.entries(groupedSkills).map(
            ([category, categorySkills], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="
                  relative
                  overflow-hidden
                  glass-card
                  rounded-[36px]
                  p-8
                  md:p-10
                "
              >
                {/* Glow */}
                <div className="
                  absolute
                  top-0
                  right-0
                  w-72
                  h-72
                  bg-primary/10
                  blur-3xl
                  rounded-full
                  pointer-events-none
                " />

                <div className="relative z-10">
                  {/* CATEGORY */}
                  <div className="mb-10">
                    <p className="
                      text-xs
                      uppercase
                      tracking-[0.3em]
                      text-primary
                      mb-3
                    ">
                      Category
                    </p>

                    <h3 className="
                      text-3xl
                      md:text-4xl
                      font-black
                      tracking-tight
                    ">
                      {category}
                    </h3>
                  </div>

                  {/* SKILLS */}
                  <div className="
                    grid
                    sm:grid-cols-2
                    lg:grid-cols-3
                    gap-4
                  ">
                    {categorySkills.map((skill) => {
                      const Icon = skill.icon

                      return (
                        <motion.div
                          key={skill.id}
                          whileHover={{
                            y: -4,
                            scale: 1.02,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="
                            group
                            flex
                            items-center
                            gap-4
                            rounded-2xl
                            border
                            border-border
                            bg-secondary/30
                            hover:bg-secondary/50
                            p-4
                            transition-all
                            duration-300
                          "
                        >
                          {/* ICON */}
                          <div className="
                            w-12
                            h-12
                            rounded-2xl
                            bg-background/50
                            border
                            border-border
                            flex
                            items-center
                            justify-center
                            shrink-0
                            transition-transform
                            duration-300
                            group-hover:scale-110
                          ">
                            {Icon ? (
                              <Icon
                                size={24}
                                color={skill.darkColor}
                              />
                            ) : (
                              <img
                                src={skill.image}
                                alt={skill.name}
                                className="w-6 h-6"
                              />
                            )}
                          </div>

                          {/* TEXT */}
                          <div>
                            <h4 className="
                              font-semibold
                              text-foreground
                            ">
                              {skill.name}
                            </h4>

                            <p className="
                              text-xs
                              text-muted-foreground
                              mt-1
                            ">
                              {category}
                            </p>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </Container>
    </section>
  )
}

export default SkillsSection