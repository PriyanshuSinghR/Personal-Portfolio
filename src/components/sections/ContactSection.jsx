import { motion } from 'framer-motion'

import { ArrowUpRight } from 'lucide-react'

import Container from '../ui/Container'

import { socialLinks } from '../../data'

const ContactSection = () => {
  return (
    <section id="contact">
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            text-center
            max-w-4xl
            mx-auto
            mb-16
            md:mb-20
          "
        >
          <p
            className="
              text-primary
              uppercase
              tracking-[0.3em]
              text-sm
              mb-4
            "
          >
            Contact
          </p>

          <h2
            className="
              section-title
              mb-6
              md:mb-8
            "
          >
            Let’s build something impactful.
          </h2>

          <p
            className="
              body-lg
              text-muted-foreground
              max-w-3xl
              mx-auto
            "
          >
            Interested in AI systems, scalable engineering,
            workflow automation, or developer tooling?
            Let’s connect.
          </p>
        </motion.div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-5
            md:gap-6
          "
        >
          {socialLinks.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.a
                key={item.text}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-[30px]

                  border
                  border-white/[0.08]

                  bg-card/70
                  backdrop-blur-3xl

                  p-6
                  md:p-7

                  transition-all
                  duration-500

                  hover:border-primary/20
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    -top-10
                    -right-10

                    w-40
                    h-40

                    bg-primary/10
                    blur-3xl
                    rounded-full

                    opacity-70
                    pointer-events-none
                  "
                />

                <div className="relative z-10">
                  {/* TOP */}
                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      mb-8
                    "
                  >
                    <div
                      className={`
                        w-14
                        h-14

                        rounded-2xl

                        flex
                        items-center
                        justify-center

                        shadow-lg

                        transition-all
                        duration-300

                        ${item.color}
                      `}
                    >
                      <Icon
                        className="text-white"
                        size={24}
                      />
                    </div>

                    <ArrowUpRight
                      size={20}
                      className="
                        text-muted-foreground
                        group-hover:text-primary
                        transition-all
                        duration-300
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3
                      className="
                        text-[1.35rem]
                        md:text-[1.55rem]

                        font-black

                        tracking-[-0.03em]

                        mb-2
                      "
                    >
                      {item.text}
                    </h3>

                    <p
                    className="
                        text-[0.92rem]
                        md:text-[0.96rem]

                        leading-relaxed

                        text-muted-foreground
                    "
                    >
                    {item.text === 'Resume'
                        ? 'Click to view resume'
                        : item.link
                            .replace('https://www.', '')
                            .replace('mailto:', '')}
                    </p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default ContactSection