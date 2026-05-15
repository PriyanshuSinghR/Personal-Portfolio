import {
  motion,
  AnimatePresence,
} from 'framer-motion'

import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'

import {
  useEffect,
  useState,
} from 'react'

const navItems = [
  'Home',
  'Projects',
  'Experience',
  'Skills',
  'About',
  'Contact',
]

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [activeSection, setActiveSection] =
    useState('home')

  // ACTIVE SECTION DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(
          item.toLowerCase()
        )
      )

      const scrollY =
        window.scrollY + 140

      sections.forEach((section) => {
        if (!section) return

        const sectionTop =
          section.offsetTop

        const sectionHeight =
          section.offsetHeight

        if (
          scrollY >= sectionTop &&
          scrollY <
            sectionTop + sectionHeight
        ) {
          setActiveSection(section.id)
        }
      })
    }

    handleScroll()

    window.addEventListener(
      'scroll',
      handleScroll
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [])

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const menu =
        document.getElementById(
          'mobile-nav'
        )

      const button =
        document.getElementById(
          'mobile-nav-btn'
        )

      if (
        isOpen &&
        menu &&
        !menu.contains(e.target) &&
        !button.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleOutsideClick
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick
      )
    }
  }, [isOpen])

  return (
    <>
      {/* DESKTOP NAV */}
      <motion.div
        initial={{
          y: -70,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          hidden
          md:flex
          fixed
          top-6
          left-1/2
          -translate-x-1/2
          z-50
        "
      >
        <div
          className="
            relative
            overflow-hidden

            flex
            items-center
            gap-1.5

            rounded-full

            border
            border-white/[0.08]

            bg-card/65
            backdrop-blur-3xl

            px-2.5
            py-2.5

            shadow-[0_10px_50px_rgba(0,0,0,0.28)]
          "
        >
          {navItems.map((item) => {
            const section =
              item.toLowerCase()

            const isActive =
              activeSection === section

            return (
              <Link
                key={item}
                to={section}
                smooth
                duration={500}
                offset={-80}
                onSetActive={() =>
                  setActiveSection(section)
                }
                className={`
                  relative
                  z-10

                  cursor-pointer

                  px-4
                  lg:px-5

                  py-2.5

                  rounded-full

                  text-[0.82rem]
                  lg:text-[0.88rem]

                  font-medium

                  transition-all
                  duration-300

                  ${
                    isActive
                      ? `
                        bg-primary
                        text-primary-foreground
                        shadow-[0_0_25px_rgba(139,92,246,0.35)]
                      `
                      : `
                        text-muted-foreground
                        hover:text-foreground
                        hover:bg-secondary/50
                      `
                  }
                `}
              >
                {item}
              </Link>
            )
          })}
        </div>
      </motion.div>

      {/* MOBILE BUTTON */}
      <div
        className="
          md:hidden
          fixed
          top-5
          right-5
          z-50
        "
      >
        <button
          id="mobile-nav-btn"
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="
            relative
            overflow-hidden

            w-13
            h-13

            rounded-2xl

            border
            border-white/[0.08]

            bg-card/80
            backdrop-blur-3xl

            flex
            items-center
            justify-center

            shadow-[0_10px_30px_rgba(0,0,0,0.28)]
          "
        >
          {isOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -18,
              scale: 0.96,
            }}
            transition={{
              duration: 0.22,
            }}
            className="
              md:hidden
              fixed
              top-22
              left-5
              right-5
              z-40
            "
          >
            <div
              className="
                relative
                overflow-hidden

                rounded-[30px]

                border
                border-white/[0.08]

                bg-card/92
                backdrop-blur-3xl

                p-4

                shadow-[0_20px_70px_rgba(0,0,0,0.35)]
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-2
                "
              >
                {navItems.map((item) => {
                  const section =
                    item.toLowerCase()

                  const isActive =
                    activeSection === section

                  return (
                    <Link
                      key={item}
                      to={section}
                      smooth
                      duration={500}
                      offset={-80}
                      onClick={() =>
                        setIsOpen(false)
                      }
                      onSetActive={() =>
                        setActiveSection(
                          section
                        )
                      }
                      className={`
                        flex
                        items-center
                        justify-center

                        rounded-2xl

                        px-5
                        py-4

                        text-[0.96rem]
                        font-medium

                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              bg-primary
                              text-primary-foreground
                              shadow-[0_0_25px_rgba(139,92,246,0.35)]
                            `
                            : `
                              text-foreground
                              hover:bg-secondary/50
                            `
                        }
                      `}
                    >
                      {item}
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingNavbar