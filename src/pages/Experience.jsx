import { useState, useMemo } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { useThemeStore } from "../hooks/useTheme";
import { experienceDataRaw } from "../data/data";

const Experience = () => {
  const { theme } = useThemeStore();
  const isDarkMode = theme === "dark";
  const [activeFilter, setActiveFilter] = useState("All");

  const calculateDuration = (startDateStr, endDateStr) => {
    const startDate = new Date(startDateStr);

    const endDate =
      endDateStr === "Present" ? new Date() : new Date(endDateStr);

    const yearDiff = endDate.getFullYear() - startDate.getFullYear();
    const monthDiff = endDate.getMonth() - startDate.getMonth() + 1;

    let years = yearDiff;
    let months = monthDiff;

    if (months < 0) {
      years--;
      months += 12;
    }

    const yearsText = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
    const monthsText = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

    if (yearsText && monthsText) {
      return `${yearsText} ${monthsText}`;
    }
    return yearsText || monthsText || "Less than 1 month";
  };

  const experienceData = useMemo(() => {
    return experienceDataRaw.map((job) => {
      const period = `${job.startDate} - ${job.endDate}`;
      const duration = calculateDuration(job.startDate, job.endDate);

      return {
        ...job,
        period,
        duration,
      };
    });
  }, []);

  const [text] = useTypewriter({
    words: [
      `My professional journey in tech`,
      `Building innovative solutions with passion`,
      `Transforming ideas into functional applications`,
      `Committed to delivering high-quality code`,
    ],
    loop: 0,
  });

  const categories = [
    "All",
    ...new Set(experienceData.map((item) => item.category)),
  ];

  const filteredExperience =
    activeFilter === "All"
      ? experienceData
      : experienceData.filter((item) => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div
      name="experience"
      className="w-full min-h-screen bg-white dark:bg-[#0a192f] text-slate-700 dark:text-gray-300"
    >
      <div className="max-w-[1000px] mx-auto px-8 pt-24 md:pt-32 pb-16 flex flex-col justify-center w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          <p className="text-4xl font-bold inline border-b-4 border-violet-600">
            Experience
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
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredExperience.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="shadow-md shadow-[#c2c1c1] dark:shadow-[#333232] bg-gray-100 dark:bg-slate-900 p-6 rounded-lg overflow-hidden relative"
              whileHover={{
                scale: 1.02,
                boxShadow: isDarkMode
                  ? "0 0 15px rgba(168, 85, 247, 0.4)"
                  : "0 0 15px rgba(139, 92, 246, 0.3)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-violet-500 to-blue-500"
                style={{ width: "100%" }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />

              <div className="flex justify-between items-start flex-wrap mb-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-violet-600">
                    {job.position}
                  </h3>
                  <h4 className="text-lg font-medium">{job.company}</h4>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="px-3 py-1 bg-violet-600/20 text-violet-600 dark:text-violet-400 text-xs rounded-full font-medium"
                >
                  {job.type}
                </motion.div>
              </div>

              <motion.div
                className="flex flex-wrap text-sm opacity-80 mb-4 gap-x-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span>📅 {job.period}</span>
                <span>⏱️ {job.duration}</span>
                <span>📍 {job.location}</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-4"
              >
                {job.description}
              </motion.p>

              {job.achievements.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h5 className="font-medium text-violet-500 dark:text-violet-400 mb-2">
                    Key Achievements:
                  </h5>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="text-violet-600 dark:text-violet-400 mr-2">
                          ▹
                        </span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.div
                className="absolute inset-0 bg-gradient-to-r opacity-0 z-0"
                style={{
                  background: `radial-gradient(circle, ${
                    isDarkMode
                      ? "rgba(139, 92, 246, 0.15)"
                      : "rgba(124, 58, 237, 0.1)"
                  } 0%, transparent 70%)`,
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
