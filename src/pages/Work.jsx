import React from 'react';

import { Link } from 'react-router-dom';
import { projects } from '../data/data';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Transition from '../components/Transition';

const Work = () => {
  // projects file
  const project = projects;
  //setProject(data);

  const [text] = useTypewriter({
    words: [
      `Check out some of my recent work`,
      `I give my heart to make every project `,
    ],
    loop: 0,
  });

  return (
    <div
      name="work"
      className="w-full md:h-screen text-slate-700 dark:text-gray-300 bg-white dark:bg-[#0a192f]"
    >
      <Transition />
      <div className="max-w-[1000px] mx-auto p-4 pt-24 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-violet-600">
            Work
          </p>
          <p className="py-6">
            // <span>{text}</span>
            <Cursor cursorColor="white" />
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <Link to={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </Link>
                  {/* eslint-disable-next-line */}
                  <Link to={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
