import React from 'react';
import Transition from '../components/Transition';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-white dark:bg-[#0a192f] text-slate-700 dark:text-gray-300"
    >
      <Transition />
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-violet-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Priyanshu Singh, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am a fullStack developer, with a graduated degree and a passion
              for making website creative with ReactJS and Advance CSS. I
              working on React since 4 year but still I have to go so far so I
              always passionate to learn more and sharp my skill as much as
              possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
