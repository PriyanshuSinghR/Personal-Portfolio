import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Transition from "../components/Transition";

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

  return (
    <div name="home" className="w-full h-screen bg-white dark:bg-[#0a192f]">
      <Transition />
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-violet-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700 dark:text-[#ccd6f6]">
          PRIYANSHU SINGH
        </h1>

        <h2 className="text-4xl sm:text-7xl font-bold text-slate-600 dark:text-[#8892b0]">
          I'm a <span className="text-violet-600">{text}</span>
          <Cursor cursorColor="black" />
        </h2>

        <p className="text-slate-600 dark:text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer with a strong focus on building scalable,
          responsive web applications. Currently working at Chakr Innovation,
          where I’ve led the development of modern enterprise systems, slot
          booking platforms, and real-time validated forms using ReactJS,
          Django, and Tailwind CSS. Passionate about clean code, performance
          optimization, and creating seamless user experiences.
        </p>

        <div>
          <Link
            to="/work"
            className="text-black dark:text-white group border-2 border-black dark:border-white w-52 px-6 py-3 my-2 flex items-center hover:bg-violet-600 hover:border-violet-600"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
