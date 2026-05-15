import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Container from '../ui/Container'

const stats = [
  'AI Workflow Systems',
  'LLM Applications',
  'Docker Runtime Platforms',
  'Real-Time Architectures',
]

const HomeSection = () => {
  return (
    <section
      id="home"
    >
      <Container>
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="
              inline-flex
              items-center
              gap-2
              border
              border-border
              bg-secondary/30
              backdrop-blur-xl
              rounded-full
              px-4
              py-2
              mb-8
            ">
              <span className="
                w-2
                h-2
                rounded-full
                bg-green-400
                shadow-[0_0_12px_#4ade80]
              " />

              <span className="small-text text-muted-foreground tracking-wide">
                Available for opportunities
              </span>
            </div>

            {/* Heading */}
            <h1 className="hero-title max-w-5xl">
              Building intelligent platforms for scalable engineering systems.
            </h1>

            {/* Description */}
            <p className="
              mt-8
              body-lg
              text-muted-foreground
              max-w-2xl
              font-light
            ">
              Full Stack Engineer focused on AI-powered workflows,
              developer tooling, real-time systems, and modern
              platform architecture.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">
              {/* Projects Button */}
              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  gap-2

                  h-12
                  px-6

                  rounded-2xl

                  bg-primary
                  text-primary-foreground

                  text-sm
                  font-medium

                  hover:scale-[1.02]
                  active:scale-[0.98]

                  transition-all
                  duration-300

                  shadow-[0_0_30px_rgba(139,92,246,0.25)]
                "
              >
                View Projects

                <ArrowRight size={16} />
              </a>

              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1XNh1OzGay7UGhcSb-f4LRAbnvbq5IMcT/view"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2

                  h-12
                  px-6

                  rounded-2xl

                  border
                  border-border

                  bg-secondary/30

                  hover:bg-secondary/50

                  transition-all
                  duration-300
                "
              >
                <Download
                  size={16}
                  className="text-muted-foreground"
                />

                Resume
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="
              relative
              glass-card
              rounded-[32px]
              p-6
              overflow-hidden
            ">
              {/* Glow */}
              <div className="
                absolute
                top-0
                right-0
                w-52
                h-52
                bg-primary/20
                blur-3xl
                rounded-full
                pointer-events-none
              " />

              {/* Dots */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-[11px] h-[11px] rounded-full bg-red-400/80" />
                <div className="w-[11px] h-[11px] rounded-full bg-yellow-400/80" />
                <div className="w-[11px] h-[11px] rounded-full bg-green-400/80" />
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-5">
                {stats.map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      border
                      border-border
                      bg-secondary/30
                      rounded-2xl
                      px-4
                      py-4
                      small-text
                      text-muted-foreground
                    "
                  >
                    <span className="
                      w-2
                      h-2
                      rounded-full
                      bg-primary
                      flex-shrink-0
                    " />

                    {item}
                  </div>
                ))}
              </div>

              {/* Focus */}
              <div className="
                border
                border-primary/20
                bg-primary/10
                rounded-3xl
                px-5
                py-5
              ">
                <p className="
                  text-[11px]
                  uppercase
                  tracking-[0.18em]
                  text-primary
                  mb-2
                ">
                  Current Focus
                </p>

                <h3 className="
                  text-lg
                  font-semibold
                  leading-snug
                ">
                  AI-powered Tender
                  <br />
                  Workflow Systems
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default HomeSection