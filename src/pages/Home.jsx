import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "Software Engineer at Chakr Innovation",
      "ReactJS Enthusiast",
      "Tailwind CSS Specialist",
    ],
    loop: 0,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      name="home"
      className="w-full h-screen bg-white dark:bg-[#0a192f] relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full relative z-10">
        <p className="text-violet-600 font-medium text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700 dark:text-[#ccd6f6]">
          <motion.span
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            PRIYANSHU SINGH
          </motion.span>
        </h1>

        <motion.h2
          className="text-4xl sm:text-7xl font-bold text-slate-600 dark:text-[#8892b0]"
          variants={itemVariants}
        >
          I'm a <span className="text-violet-600">{text}</span>
          <Cursor cursorColor="#8b5cf6" />
        </motion.h2>

        <motion.p
          className="text-slate-600 dark:text-[#8892b0] py-4 max-w-[700px]"
          variants={itemVariants}
        >
          I'm a full-stack developer with a strong focus on building scalable,
          responsive web applications. Currently working at Chakr Innovation,
          where I've led the development of modern enterprise systems, slot
          booking platforms, and real-time validated forms using ReactJS,
          Django, and Tailwind CSS. Passionate about clean code, performance
          optimization, and creating seamless user experiences.
        </motion.p>

        <Link to="/work">
          <motion.button
            className="text-black dark:text-white group border-2 border-black dark:border-white w-52 px-6 py-3 my-2 flex items-center hover:bg-violet-600 hover:border-violet-600 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="z-10 flex items-center">
              View Work
              <motion.span
                className="group-hover:rotate-90 flex items-center ml-3"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <HiArrowNarrowRight />
              </motion.span>
            </span>
            <motion.span className="absolute bottom-0 left-0 w-0 h-full bg-violet-600 -z-10 group-hover:w-full transition-all duration-300"></motion.span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Home;
