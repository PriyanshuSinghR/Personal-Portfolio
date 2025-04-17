import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ToggleTheme from "./ToggleTheme";
import { navLinks, socialLinks } from "../data/data";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const hamburgerToggle = (e) => setNav(e.target.checked);

  const navbarVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const socialVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    }),
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  };

  const logoContainerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const mobileSocialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5 + i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    }),
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white dark:bg-[#0a192f] text-black dark:text-gray-300 shadow-md z-50">
      <Link to="/" className="w-[200px] font-bold text-2xl relative block">
        <motion.div
          variants={logoContainerVariants}
          initial="initial"
          animate="animate"
          className="flex overflow-hidden py-2"
        >
          {Array.from("iAmBrand").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={`inline-block text-violet-600`}
              style={{
                display: "inline-block",
                transformOrigin: "center bottom",
              }}
              whileHover={{
                y: -5,
                scale: 1.2,
                transition: { type: "spring", stiffness: 500 },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </Link>

      {/* Desktop menu */}
      <nav className="hidden md:flex items-center">
        <ToggleTheme />
        <motion.div
          className="flex"
          initial="hidden"
          animate="visible"
          variants={navbarVariants}
        >
          {navLinks.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 mx-1 transition-colors duration-300 ${
                    isActive ? "text-violet-500" : "hover:text-violet-500"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-0 h-0.5 bg-violet-500 w-full"
                        layoutId="navbar-underline"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      {/* Hamburger */}
      <div className="md:hidden z-50 flex justify-between w-20">
        <ToggleTheme />
        <motion.label
          className="swap swap-rotate cursor-pointer"
          whileTap={{ scale: 0.9, rotate: nav ? -180 : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
        >
          <input type="checkbox" onChange={hamburgerToggle} checked={nav} />
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </motion.label>
      </div>

      <AnimatePresence>
        {nav && (
          <motion.div
            className="fixed top-0 left-0 w-full h-screen bg-white dark:bg-[#0a192f] z-40 flex flex-col justify-center items-center overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="exit"
          >
            <motion.div
              className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none"
              initial={{ scale: 0, borderRadius: "100%" }}
              animate={{ scale: 1, borderRadius: "0%" }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-violet-500 to-transparent" />
            </motion.div>

            <motion.nav
              className="h-full flex flex-col justify-center items-center"
              initial="hidden"
              animate="visible"
              variants={navbarVariants}
              exit="hidden"
            >
              {navLinks.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `py-6 text-4xl block transition-all duration-300 relative ${
                        isActive
                          ? "text-violet-500 translate-x-2"
                          : "hover:text-violet-500 hover:translate-x-2"
                      }`
                    }
                    onClick={hamburgerToggle}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                className="flex gap-6 mt-12"
                variants={navbarVariants}
                initial="hidden"
                animate="visible"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.text}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-3 rounded-full shadow-lg`}
                    custom={index}
                    variants={mobileSocialVariants}
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                      transition: { type: "spring", stiffness: 400 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.li
                key={social.text}
                className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${social.color} ${social.hoverColor}  shadow-lg`}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={socialVariants}
                whileHover={{
                  transition: { type: "spring", stiffness: 400 },
                }}
              >
                <Link
                  className="flex justify-between items-center w-full text-gray-300 px-4"
                  to={social.link}
                  target="_blank"
                >
                  <motion.span
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {social.text}
                  </motion.span>
                  <motion.div
                    whileHover={{
                      rotate: 15,
                      scale: 1.1,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    {IconComponent && (
                      <IconComponent size={30} className="social-icon" />
                    )}
                  </motion.div>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
