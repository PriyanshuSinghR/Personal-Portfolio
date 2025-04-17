import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/data";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Work = () => {
  const [text] = useTypewriter({
    words: [
      `Check out some of my recent work`,
      `I give my heart to make every project`,
    ],
    loop: 0,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      name="work"
      className="w-full md:h-screen text-slate-700 dark:text-gray-300 bg-white dark:bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 pt-24 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-violet-600">
            Work
          </p>
          <p className="py-6">
            // <span>{text}</span>
            <Cursor cursorColor="#a78bfa" />
          </p>
        </div>

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
                transition: { duration: 0.3 },
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto h-64 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${item.image})` }}
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              <motion.div
                className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-gradient-to-r from-violet-600/80 to-blue-600/80 flex flex-col justify-center items-center z-10"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span
                  className="text-2xl font-bold text-white tracking-wider mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  {item.name}
                </motion.span>
                <motion.div
                  className="pt-8 text-center"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Link to={item.github} target="_blank">
                    <motion.button
                      className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                      whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      Code
                    </motion.button>
                  </Link>
                  <Link to={item.live} target="_blank">
                    <motion.button
                      className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                      whileHover={{ scale: 1.1, backgroundColor: "#f3f4f6" }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      Live
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Work;
