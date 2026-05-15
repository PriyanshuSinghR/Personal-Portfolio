const Container = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`
        relative
        w-full
        max-w-[1400px]
        mx-auto

        px-5
        sm:px-6
        md:px-10
        lg:px-14
        xl:px-16

        py-20
        md:py-24
        lg:py-28

        ${className}
      `}
    >
      {children}
    </div>
  )
}

export default Container