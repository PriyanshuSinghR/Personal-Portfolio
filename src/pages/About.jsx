import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/profile.png";

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen pt-24 bg-white dark:bg-[#0a192f] relative overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full flex justify-center mb-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-violet-600">
              About
            </p>
          </div>
        </div>

        {/* Photo and Hover Text */}
        <div className="relative w-48 h-48 mb-8 group">
          {/* Profile Image */}
          <motion.img
            src={myPhoto}
            alt="Priyanshu Singh"
            className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-violet-600 absolute top-0 left-0"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Hover Text */}
          <motion.div
            className="w-48 h-48 rounded-full flex items-center justify-center border-4 border-violet-600 text-violet-600 bg-white dark:bg-[#0a192f] text-xl font-bold absolute top-0 left-0 shadow-lg"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hello! 👋
          </motion.div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I’m Priyanshu Singh, a passionate full-stack developer. Glad
              to have you here. Feel free to explore my work!
            </p>
          </div>
          <div>
            <p>
              I'm a Full-Stack Developer currently working at Chakr Innovation.
              With expertise in ReactJS, Tailwind CSS, and Django, I've built
              robust slot booking systems, real-time validated forms, and
              scalable architectures. Passionate about performance optimization,
              reusable components, and clean code, I enjoy transforming complex
              requirements into elegant, responsive web applications. I'm always
              eager to learn, improve, and contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
