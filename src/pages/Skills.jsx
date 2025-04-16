import React, { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Transition from "../components/Transition";
import { motion } from "framer-motion";
import { skills } from "../data/data";

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkDarkMode();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const categories = ["All", ...new Set(skills.map((skill) => skill.category))];

  const [text] = useTypewriter({
    words: [
      `These are the technologies I've worked with`,
      `Full stack developer with expertise in React & Node`,
      `Specialized in modern web development`,
    ],
    loop: 0,
  });

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(
        skills.filter((skill) => skill.category === activeFilter)
      );
    }
  }, [activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const headingVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const getSkillColor = (skill) => {
    return isDarkMode ? skill.darkColor : skill.lightColor;
  };

  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-white dark:bg-[#0a192f] text-slate-700 dark:text-gray-300"
    >
      <Transition />
      <div className="max-w-[1000px] mx-auto px-8 pt-24 md:pt-32 pb-16 flex flex-col justify-center w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <p className="text-4xl font-bold inline border-b-4 border-violet-600">
            Skills
          </p>
          <p className="py-4">
            // <span>{text}</span>
            <Cursor cursorColor={isDarkMode ? "white" : "#4B5563"} />
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                activeFilter === category
                  ? "bg-violet-600 text-white"
                  : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-slate-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "All" ? category : category.split(" ")[0]}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredSkills.map((skill) => {
            const IconComponent = skill.icon;
            const ImageComponent = skill.image;
            const iconColor = getSkillColor(skill);

            return (
              <motion.div
                className="shadow-md shadow-[#c2c1c1] dark:shadow-[#333232] bg-gray-100 dark:bg-slate-900 hover:scale-110 duration-500 p-4 rounded-lg overflow-hidden relative"
                key={skill.id}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 12px ${iconColor}`,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center mb-2">
                    {IconComponent && (
                      <IconComponent
                        size={40}
                        color={iconColor}
                        className="skill-icon"
                      />
                    )}
                    {ImageComponent && (
                      <img src={ImageComponent} alt="HTML icon" />
                    )}
                  </div>
                  <motion.p
                    className="font-medium text-sm sm:text-base"
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill.name}
                  </motion.p>
                  <motion.p
                    className="text-xs text-slate-600 dark:text-slate-400 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {skill.category.split(" ")[0]}
                  </motion.p>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 z-0"
                  style={{
                    background: `radial-gradient(circle, ${iconColor}25 0%, transparent 70%)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: isDarkMode ? 0.6 : 0.4 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
