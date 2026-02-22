import SocialMedia from "../assets/projects/socialMedia.jpg";
import ecommerce from "../assets/projects/ecommerce.jpg";
import appointment from "../assets/projects/appointment.jpg";
import travelDost from "../assets/projects/travelDost.png";
import chat from "../assets/projects/chat.jpg";

import HeathDose from "../assets/projects/healthDose.jpg";
import zustand from "../assets/zustand.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiGit,
  SiFirebase,
  SiReactrouter,
  SiReactquery,
  SiReacthookform,
  SiZod,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiVercel,
  SiRedux,
  SiGithub,
  SiShadcnui,
} from "react-icons/si";

export const projects = [
  {
    name: "Travel Dost",
    image: travelDost,
    github: "https://github.com/PriyanshuSinghR/travel-dost",
    live: "https://travel-dost-five.vercel.app/",
    new: true,
  },
  {
    name: "Health Dose",
    image: HeathDose,
    github: "https://github.com/PriyanshuSinghR/HeathDose",
    live: "https://heath-dose.vercel.app/",
    new: true,
  },
  {
    name: "Social Media App",
    image: SocialMedia,
    github: "https://github.com/PriyanshuSinghR/social-media",
    live: "https://my-social-media-kappa.vercel.app/",
  },
  {
    name: "Sport Store App",
    image: ecommerce,
    github: "https://github.com/PriyanshuSinghR/ecommerce",
    live: "https://e-commerce-six-sable.vercel.app/",
  },
  {
    name: "Appointments App",
    image: appointment,
    github: "https://github.com/PriyanshuSinghR/Appointments",
    live: "https://priyanshu-appointment.netlify.app/",
  },
  // {
  //   name: "Music App",
  //   image: music,
  //   github: "https://github.com/PriyanshuSinghR/boom-music",
  //   live: "https://boommusic.netlify.app/",
  // },
  {
    name: "Chat App",
    image: chat,
    github: "https://github.com/PriyanshuSinghR/chat-app",
    live: "https://chat-app-a62e4.web.app/",
  },
  //  {
  //   name: "Fitness Freak App",
  //   image: fitness,
  //   github: "https://github.com/PriyanshuSinghR/fitnessFreak",
  //   live: "https://fitnessfreaklife.netlify.app/",
  // },
];

export const skills = [
  {
    id: 1,
    name: "React",
    icon: SiReact,
    lightColor: "#61DAFB",
    darkColor: "#61DAFB",
    category: "Frontend Development",
  },
  {
    id: 2,
    name: "Next.js",
    icon: SiNextdotjs,
    lightColor: "#000000",
    darkColor: "#ffffff",
    category: "Frontend Development",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: SiJavascript,
    lightColor: "#F0DB4F",
    darkColor: "#F7DF1E",
    category: "Frontend Development",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: SiTypescript,
    lightColor: "#3178C6",
    darkColor: "#3178C6",
    category: "Frontend Development",
  },
  {
    id: 5,
    name: "HTML5",
    icon: SiHtml5,
    lightColor: "#E34F26",
    darkColor: "#E34F26",
    category: "Frontend Development",
  },
  {
    id: 6,
    name: "CSS3",
    icon: SiCss3,
    lightColor: "#1572B6",
    darkColor: "#1572B6",
    category: "Frontend Development",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    lightColor: "#06B6D4",
    darkColor: "#06B6D4",
    category: "Frontend Development",
  },
  {
    id: 8,
    name: "Shadcn UI",
    icon: SiShadcnui,
    lightColor: "#000000",
    darkColor: "#ffffff",
    category: "Frontend Development",
  },
  {
    id: 9,
    name: "Redux",
    icon: SiRedux,
    lightColor: "#764ABC",
    darkColor: "#764ABC",
    category: "Frontend Development",
  },
  {
    id: 21,
    name: "Zustand",
    image: zustand,
    lightColor: "#764ABC",
    darkColor: "#764ABC",
    category: "Frontend Development",
  },
  {
    id: 10,
    name: "Node.js",
    icon: SiNodedotjs,
    lightColor: "#339933",
    darkColor: "#68A063",
    category: "Backend Development",
  },
  {
    id: 11,
    name: "Express.js",
    icon: SiExpress,
    lightColor: "#000000",
    darkColor: "#f0f6fc",
    category: "Backend Development",
  },
  {
    id: 12,
    name: "Django",
    icon: SiDjango,
    lightColor: "#092E20",
    darkColor: "#44B78B",
    category: "Backend Development",
  },
  {
    id: 13,
    name: "MongoDB",
    icon: SiMongodb,
    lightColor: "#47A248",
    darkColor: "#47A248",
    category: "Backend Development",
  },
  {
    id: 14,
    name: "PostgreSQL",
    icon: SiPostgresql,
    lightColor: "#336791",
    darkColor: "#336791",
    category: "Backend Development",
  },
  {
    id: 17,
    name: "Git",
    icon: SiGit,
    lightColor: "#F05032",
    darkColor: "#F05032",
    category: "Development Tools",
  },
  {
    id: 18,
    name: "GitHub",
    icon: SiGithub,
    lightColor: "#181717",
    darkColor: "#f0f6fc",
    category: "Development Tools",
  },
  {
    id: 19,
    name: "Firebase",
    icon: SiFirebase,
    lightColor: "#FFA000",
    darkColor: "#FFCA28",
    category: "Development Tools",
  },
  {
    id: 20,
    name: "Vercel",
    icon: SiVercel,
    lightColor: "#000000",
    darkColor: "#ffffff",
    category: "Development Tools",
  },

  {
    id: 22,
    name: "React Router",
    icon: SiReactrouter,
    lightColor: "#CA4245",
    darkColor: "#CA4245",
    category: "Development Tools",
  },
  {
    id: 23,
    name: "React Query",
    icon: SiReactquery,
    lightColor: "#FF4154",
    darkColor: "#FF4154",
    category: "Development Tools",
  },
  {
    id: 24,
    name: "React Hook Form",
    icon: SiReacthookform,
    lightColor: "#EC5990",
    darkColor: "#EC5990",
    category: "Development Tools",
  },
  {
    id: 25,
    name: "Zod",
    icon: SiZod,
    lightColor: "#3068B7",
    darkColor: "#3068B7",
    category: "Development Tools",
  },
];

export const navLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/skills", name: "Skills" },
  { path: "/experience", name: "Experience" },
  { path: "/work", name: "Work" },
  { path: "/contact", name: "Contact" },
];

export const socialLinks = [
  {
    color: "bg-blue-600",
    icon: FaLinkedin,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/priyanshu844/",
    hoverColor: "hover:bg-blue-700",
  },
  {
    color: "bg-[#333333]",
    icon: FaGithub,
    text: "Github",
    link: "https://github.com/priyanshuSinghR",
    hoverColor: "hover:bg-[#222222]",
  },
  {
    color: "bg-[#6fc2b0]",
    icon: HiOutlineMail,
    text: "Email",
    link: "mailto:priyanshusingh.gh@outlook.com",
    hoverColor: "hover:bg-[#5db19f]",
  },
  {
    color: "bg-[#565f69]",
    icon: BsFillPersonLinesFill,
    text: "Resume",
    link: "https://drive.google.com/file/d/1XNh1OzGay7UGhcSb-f4LRAbnvbq5IMcT/view",
    hoverColor: "hover:bg-[#464d57]",
  },
];

export const experienceDataRaw = [
  {
    id: 1,
    company: "Chakr Innovation",
    position: "Software Engineer",
    startDate: "Oct 2023",
    endDate: "Present",
    type: "Full-time",
    location: "Gurugram, Haryana, India · On-site",
    description:
      "Modernizing enterprise platforms by designing and implementing scalable frontend architecture using React. Focused on building high-performance, compliant operational systems with reusable component architecture, performance optimization, and real-time validation workflows.",

    achievements: [
      "Modernized enterprise form systems using React Hook Form and Zod validation, reducing form submission errors by ~37% and cutting development time by ~28%.",
      "Developed robust real-time slot booking system with automated conflict detection, improving resource allocation efficiency by ~42% and reducing booking conflicts by ~38%.",
      "Optimized application performance through code-splitting, lazy loading, and advanced state management patterns, reducing page load times by ~23%.",
      "Designed responsive reusable UI component libraries using Tailwind CSS and modern React practices, reducing feature development time by ~26%.",
      "Led migration of legacy frontend systems to modern React architecture, improving maintainability, scalability, and deployment efficiency.",
      "Established frontend development standards including responsive layouts, cross-browser compatibility, and reusable design patterns.",
      "Collaborated with backend systems (Django APIs, real-time validation workflows) to deliver enterprise-grade dashboards and compliance solutions.",
    ],

    category: "Full-time",
  },
  {
    id: 2,
    company: "neoG Camp",
    position: "Full Stack Web Dev Student",
    startDate: "Jan 2023",
    endDate: "Sep 2023",
    type: "Bootcamp",
    location: "Remote · India",
    description:
      "Completed intensive full-stack web development bootcamp focused on MERN stack with hands-on project-based learning and real-world application development.",

    achievements: [
      "Built Sportify e-commerce platform with React and Node.js featuring real-time inventory management and secure payment workflows.",
      "Developed Amatarasu social media application with authentication, posts, and interactive commenting systems.",
      "Created reusable UI component libraries following accessibility and responsive design principles.",
      "Implemented state management using Redux and Context API across multiple applications.",
    ],

    category: "Bootcamp",
  },
];
