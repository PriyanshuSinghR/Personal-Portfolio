import React from 'react';
import { skills } from '../data/data';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Transition from '../components/Transition';

const Skills = () => {
  const skill = skills;
  const [text] = useTypewriter({
    words: [
      `These are the technologies I've worked with`,
      `I love to all those technologies ❤️`,
    ],
    loop: 0,
  });
  return (
    <div
      name="skills"
      className="w-full h-screen bg-white dark:bg-[#0a192f] text-slate-700 dark:text-gray-300"
    >
      <Transition />
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 pt-32 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-violet-600 ">
            Skills
          </p>
          <p className="py-4">
            // <span>{text}</span>
            <Cursor cursorColor="white" />
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 sm:gap-4 gap-6 text-center py-8">
          {skill.map((item) => (
            <div
              className="shadow-md shadow-[#767575] dark:shadow-[#333232] bg-slate-200 dark:bg-slate-900 hover:scale-110 duration-500 p-4"
              key={item.id}
            >
              <img
                className="w-14 sm:w-20 mx-auto text-black"
                src={item.image}
                alt="HTML icon"
              />
              <p className="mt-4">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
