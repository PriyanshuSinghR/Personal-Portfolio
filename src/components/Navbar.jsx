import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link, NavLink } from 'react-router-dom';
import resume from '../assets/Resume.pdf';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(null);
  const hamburgerToggle = (e) =>
    e.target.checked ? setNav(true) : setNav(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = (e) =>
    e.target.checked ? setTheme(true) : setTheme(false);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white dark:bg-[#0a192f] text-black dark:text-gray-300 ">
      <div>
        <Link to="/" className="w-[200px] font-bold text-2xl text-violet-600">
          iAmBrand
        </Link>
      </div>

      {/* menu */}
      <nav className="hidden md:flex">
        <label className="swap swap-rotate ">
          <input type="checkbox" checked={theme} onChange={handleThemeSwitch} />
          <svg
            className="swap-on fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <NavLink to="/" className="px-4">
          Home
        </NavLink>
        <NavLink to="/about" className="px-4">
          About
        </NavLink>
        <NavLink to="/skills" className="px-4">
          Skills
        </NavLink>
        <NavLink to="/work" className="px-4">
          Work
        </NavLink>
        <NavLink to="/contact" className="px-4">
          Contact
        </NavLink>
      </nav>

      {/* Hamburger */}
      <div className="md:hidden z-10 flex justify-between w-20">
        <label className="swap swap-rotate ">
          <input type="checkbox" checked={theme} onChange={handleThemeSwitch} />
          <svg
            className="swap-on fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-off fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <label className=" swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onChange={hamburgerToggle} checked={nav} />

          {/* hamburger icon */}

          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>

      {/* Mobile menu */}
      <nav
        className={`top-0 right-0 w-full bg-white dark:bg-[#0a192f]  p-10 pl-20 fixed h-screen flex flex-col justify-center items-center transition duration-300 ease-in-out  ${
          nav ? '-translate-y-0 ' : '-translate-y-full'
        }`}
      >
        <NavLink to="/" className="py-6 text-4xl" onClick={hamburgerToggle}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="py-6 text-4xl"
          onClick={hamburgerToggle}
        >
          About
        </NavLink>
        <NavLink
          to="/skills"
          className="py-6 text-4xl"
          onClick={hamburgerToggle}
        >
          Skills
        </NavLink>
        <NavLink to="/work" className="py-6 text-4xl" onClick={hamburgerToggle}>
          Work
        </NavLink>
        <NavLink
          to="/contact"
          className="py-6 text-4xl"
          onClick={hamburgerToggle}
        >
          Contact
        </NavLink>
      </nav>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="https://www.linkedin.com/in/priyanshu844/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="https://github.com/priyanshuSinghR"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="mailto:priyanshusingh.gh@outlook.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] p-4 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to={resume}
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
