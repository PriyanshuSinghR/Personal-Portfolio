import { motion } from 'framer-motion'

import {
  MapPin,
  CalendarDays,
  Sparkles,
  Clock3,
} from 'lucide-react'

import { experienceDataRaw } from '../../data'
import Container from '../ui/Container'

const ExperienceSection = () => {
  const calculateDuration = (
    startDateStr,
    endDateStr
  ) => {
    const startDate = new Date(startDateStr)

    const endDate =
      endDateStr === 'Present'
        ? new Date()
        : new Date(endDateStr)

    let years =
      endDate.getFullYear() -
      startDate.getFullYear()

    let months =
      endDate.getMonth() -
      startDate.getMonth()

    if (months < 0) {
      years--
      months += 12
    }

    const yearsText =
      years > 0
        ? `${years} yr${years > 1 ? 's' : ''}`
        : ''

    const monthsText =
      months > 0
        ? `${months} mo${months > 1 ? 's' : ''}`
        : ''

    if (yearsText && monthsText) {
      return `${yearsText} ${monthsText}`
    }

    return (
      yearsText ||
      monthsText ||
      'Less than 1 month'
    )
  }

  const experienceData = experienceDataRaw.map(
    (job) => ({
      ...job,
      duration: calculateDuration(
        job.startDate,
        job.endDate
      ),
      period: `${job.startDate} — ${job.endDate}`,
    })
  )

  return (
    <section
      id="experience"
    >
      <Container>
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p
            className="
              text-primary
              uppercase
              tracking-[0.35em]
              text-sm
              mb-5
            "
          >
            Experience
          </p>

          <h2
            className="
                section-title
                max-w-5xl
            "
            >
            Building AI-powered systems and scalable
            engineering platforms.
          </h2>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* LINE */}
          <div
            className="
              absolute
              left-3
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-primary/50
              via-border
              to-transparent
            "
          />

          <div className="space-y-14">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="relative pl-14"
              >
                {/* DOT */}
                <div
                  className="
                    absolute
                    left-0
                    top-10
                    w-7
                    h-7
                    rounded-full
                    border-[5px]
                    border-background
                    bg-primary
                    shadow-[0_0_40px_rgba(139,92,246,0.8)]
                  "
                />

                {/* CARD */}
                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-border
                    bg-card/70
                    backdrop-blur-3xl
                    p-8
                    md:p-10
                    transition-all
                    duration-500
                    hover:border-primary/30
                    hover:-translate-y-1
                  "
                >
                  {/* TOP GLOW */}
                  <div
                    className="
                      absolute
                      -top-20
                      -right-10
                      w-80
                      h-80
                      bg-primary/10
                      blur-3xl
                      rounded-full
                      opacity-70
                      pointer-events-none
                    "
                  />

                  {/* HOVER GLOW */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-500
                      bg-gradient-to-br
                      from-primary/[0.06]
                      via-transparent
                      to-transparent
                    "
                  />

                  <div className="relative z-10">
                    {/* TOP */}
                    <div
                      className="
                        flex
                        flex-col
                        xl:flex-row
                        xl:items-start
                        xl:justify-between
                        gap-8
                        mb-10
                      "
                    >
                      <div className="max-w-3xl">

                        {/* POSITION */}
                        <h3
                        className="
                            card-title
                            mb-4
                        "
                        >
                          {item.position}
                        </h3>

                        {/* COMPANY */}
                        <p
                        className="
                            text-primary
                            text-[1rem]
                            md:text-[1.15rem]
                            font-medium
                        "
                        >
                          {item.company}
                        </p>
                      </div>

                      {/* RIGHT */}
                      <div
                        className="
                          flex
                          flex-col
                          gap-3
                          shrink-0
                        "
                      >
                       

                        {/* META */}
                        <div
                          className="
                            flex
                            flex-col
                            gap-2
                            text-muted-foreground
                          "
                        >
                          {/* DATE + DURATION */}
                          <div className="flex items-center gap-5 flex-wrap">
                            <div className="flex items-center gap-2">
                              <CalendarDays size={17} />

                              <span className="body-text">
                                {item.period}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <Clock3 size={17} />

                              <span className="body-text">
                                {item.duration}
                              </span>
                            </div>
                          </div>

                          {/* LOCATION */}
                          <div className="flex items-center gap-2">
                            <MapPin size={17} />

                            <span className="body-text">
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p
                    className="
                        body-lg
                        text-muted-foreground
                        max-w-5xl
                        mb-10
                    "
                    >
                      {item.description}
                    </p>

                    {/* ACHIEVEMENTS */}
                    <div
                      className="
                        grid
                        md:grid-cols-2
                        gap-5
                      "
                    >
                      {item.achievements.map(
                        (achievement) => (
                         <motion.div
                        key={achievement}
                        className="
                            relative
                            overflow-hidden
                            rounded-[26px]
                            p-[1px]
                            bg-gradient-to-br
                            from-primary/50
                            via-white/[0.12]
                            to-primary/20
                            shadow-[0_0_25px_rgba(139,92,246,0.08)]
                        "
                        >
                        {/* animated glossy border */}
                        <div
                            className="
                            absolute
                            inset-0
                            rounded-[26px]
                            bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.18)_45%,transparent_70%)]
                            opacity-70
                            "
                        />

                        {/* inner card */}
                        <div
                            className="
                            relative
                            h-full
                            rounded-[25px]
                            bg-[rgba(15,15,20,0.82)]
                            backdrop-blur-3xl
                            p-5
                            overflow-hidden
                            "
                        >
                            {/* top glow */}
                            <div
                            className="
                                absolute
                                -top-10
                                right-0
                                w-32
                                h-32
                                rounded-full
                                bg-primary/15
                                blur-3xl
                            "
                            />

                            {/* bottom ambient light */}
                            <div
                            className="
                                absolute
                                bottom-0
                                left-0
                                w-full
                                h-[1px]
                                bg-gradient-to-r
                                from-transparent
                                via-primary/40
                                to-transparent
                            "
                            />

                            {/* text */}
                            <p
                            className="
                                relative
                                z-10
                                body-text
                                text-foreground/90
                                leading-[1.8]
                                font-medium
                            "
                            >
                            {achievement}
                            </p>
                        </div>
                        </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ExperienceSection