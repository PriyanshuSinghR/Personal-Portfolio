const Footer = () => {
  return (
    <footer
      className="
        relative
        mt-14
        overflow-hidden
        border-t
        border-white/[0.06]
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[220px]
          w-[500px]
          -translate-x-1/2
          bg-primary/10
          blur-3xl
          pointer-events-none
        "
      />

      {/* Top gradient line */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-px
          w-[75%]
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-primary/30
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10

          max-w-[1350px]
          mx-auto

          px-5
          sm:px-7
          lg:px-10

          py-8
          md:py-9
        "
      >
        <div
          className="
            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-6
          "
        >
          {/* Left */}
          <div
            className="
              text-center
              md:text-left
            "
          >
            <h3
              className="
                text-[1.55rem]
                md:text-[1.85rem]

                font-black
                tracking-[-0.05em]
                leading-none

                bg-gradient-to-r
                from-white
                to-white/70

                bg-clip-text
                text-transparent
              "
            >
              Priyanshu Singh
            </h3>

            <p
              className="
                mt-3

                max-w-[580px]

                text-[0.9rem]
                md:text-[0.95rem]

                leading-relaxed
                text-muted-foreground
              "
            >
              Full Stack Engineer building AI-powered systems,
              scalable platforms, and premium digital experiences.
            </p>
          </div>

          {/* Right */}
          <div
            className="
              text-center
              md:text-right
            "
          >
            <p
              className="
                text-[0.82rem]
                text-muted-foreground/70
              "
            >
              © 2026 Priyanshu Singh
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer