import { motion } from 'framer-motion'
import profile from '../../assets/profile.png'

import Container from '../ui/Container'

const AboutSection = () => {
  return (
    <section
      id="about"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="
              relative
              overflow-hidden
              glass-card
              rounded-[32px]
              p-3
            ">
              <img
                src={profile}
                alt="Priyanshu Singh"
                className="
                  rounded-[24px]
                  w-full
                  h-[560px]
                  object-cover
                "
              />

              <div className="
                absolute
                bottom-3
                left-3
                right-3
                h-40
                rounded-b-[24px]
                bg-gradient-to-t
                from-background
                to-transparent
              " />
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="
              text-primary
              uppercase
              tracking-[0.3em]
              text-sm
              mb-5
            ">
              About Me
            </p>

            <h2 className="
              section-title
              mb-8
            ">
              Creating intelligent systems with modern engineering.
            </h2>

            <div className="
              space-y-6
              body-lg
              text-muted-foreground
            ">
              <p>
                I'm Priyanshu Singh, a Full Stack Engineer focused on building scalable platforms, AI-powered systems, and developer-focused tooling.
              </p>

              <p>
                My work involves designing intelligent workflow systems, document processing pipelines, real-time operational dashboards, and production-grade architectures.
              </p>

              <p>
                I enjoy solving operational problems through scalable backend systems, premium frontend experiences, and modern AI workflows.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection