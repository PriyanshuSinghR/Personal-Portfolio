import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-white dark:bg-[#0a192f] text-slate-700 dark:text-gray-300"
    >
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
