
import travelDost from "./assets/projects/travelDost.png";

import HeathDose from "./assets/projects/healthDose.jpg";
import AlgoJudge from "./assets/projects/algoJudge.png";
import zustand from "./assets/zustand.png";
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
  SiDocker,
  SiAmazon,
  SiRedis
} from "react-icons/si";

export const projects = [
  {
    title: "AI Tender Management System",
    image: travelDost,
    github: "",
    live: "",
    privateProject: true,
    featured: true,
    category: "Enterprise AI Platform",
    description:
      "Enterprise-grade AI-powered tender workflow platform with intelligent document ingestion, contextual retrieval, approval workflows, and automated operational pipelines.",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Django",
      "PostgreSQL",
      "Ollama",
      "ChromaDB",
      "Redis",
    ],
    metrics: [
      "AI Document Intelligence",
      "Workflow Automation",
      "Contextual Retrieval",
    ],
  },
  {
    title: "AlgoJudge",
    image: AlgoJudge,
    github: "https://github.com/PriyanshuSinghR/AlgoJudge",
    live: "https://algo-judge.vercel.app/",
    featured: true,

    category: "Developer Platform",

    description:
      "Docker-powered online coding judge platform supporting secure multi-language code execution, AI hints, submission tracking, and real-time execution workflows.",

    stack: [
      "React",
      "Node.js",
      "Docker",
      "MongoDB",
      "Express",
      "AWS",
    ],

    metrics: [
      "Docker Runtime",
      "Secure Execution",
      "Real-Time Workflows",
    ],
  },

  {
    title: "Travel Dost",
    image: travelDost,
    github: "https://github.com/PriyanshuSinghR/travel-dost",
    live: "https://travel-dost-five.vercel.app/",
    featured: true,

    category: "AI SaaS",

    description:
      "AI-powered travel planning platform with intelligent itinerary generation, modern UI workflows, and scalable cloud integrations.",

    stack: [
      "Next.js",
      "TypeScript",
      "Gemini AI",
      "Tailwind",
      "Appwrite",
      "Stripe",
    ],

    metrics: [
      "AI Trip Planning",
      "Cloud Integrations",
      "Modern UI",
    ],
  },

  {
    title: "HealthDose",
    image: HeathDose,
    github: "https://github.com/PriyanshuSinghR/HeathDose",
    live: "https://heath-dose.vercel.app/",

    category: "Healthcare Platform",

    description:
      "Modern healthcare management platform focused on scalable appointment systems and user-centric healthcare workflows.",

    stack: [
      "Next.js",
      "React",
      "Tailwind",
      "Appwrite",
    ],

    metrics: [
      "Healthcare Workflow",
      "Responsive Platform",
      "Scalable UI",
    ],
  },
]

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
  {
  id: 26,
  name: "Docker",
  icon: SiDocker,
  lightColor: "#2496ED",
  darkColor: "#2496ED",
  category: "AI & DevOps",
  },
  {
    id: 27,
    name: "AWS",
    icon: SiAmazon,
    lightColor: "#FF9900",
    darkColor: "#FF9900",
    category: "AI & DevOps",
  },
  {
    id: 28,
    name: "Redis",
    icon: SiRedis,
    lightColor: "#DC382D",
    darkColor: "#DC382D",
    category: "AI & DevOps",
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
    link: "https://www.github.com/priyanshuSinghR",
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
    company: "AlgoUniversity",
    position: "Software Engineering Externalship",
    startDate: "Jul 2025",
    endDate: "Present",
    type: "Externalship",
    location: "Remote",

    description:
      "Building scalable developer tooling and secure multi-language code execution systems with modern full-stack technologies and containerized architectures.",

    achievements: [
      "Built AlgoJudge, a full-stack coding judge platform supporting C++, Python, JavaScript, and Java execution workflows.",

      "Implemented secure Docker-based runtime containers for isolated multi-language code execution using Node.js and Express.js.",

      "Developed interactive coding workflows with Monaco Editor, TanStack Query, AI-powered hints, real-time execution feedback, and submission history tracking.",

      "Containerized backend services and deployed scalable workflows on AWS to improve platform reliability and maintainability.",

      "Designed reusable APIs and execution pipelines for handling compilation, runtime validation, and secure sandboxing.",
    ],

    category: "Externalship",
  },
  {
    id: 2,
    company: "Chakr Innovation",
    position: "Software Engineer",
    startDate: "Oct 2023",
    endDate: "May 2026",
    type: "Full-time",
    location: "Gurugram, Haryana, India · On-site",

    description:
      "Building enterprise-grade AI-powered workflow systems, intelligent document platforms, and scalable operational dashboards using React, Next.js, Django, PostgreSQL, Docker, Redis, and LLM-based architectures.",

    achievements: [
      "Built AI-powered Tender Management System that streamlined the complete tender lifecycle with role-based workflows, centralized dashboards, approval pipelines, and dynamic multi-stage forms.",

      "Developed LLM-based document ingestion workflows using Ollama, ChromaDB, Redis, and SSE for PDF parsing, metadata extraction, contextual search, AI-generated summaries, and workflow auto-filling.",

      "Designed scalable dynamic form engines using React Hook Form, Zod, Tailwind CSS, and Shadcn UI with reusable validations, stage-based access control, and configurable approval workflows.",

      "Improved overall tender processing efficiency by more than 6× through workflow automation, centralized tracking, and intelligent document processing.",

      "Optimized frontend architecture with reusable component systems, lazy loading, code splitting, and real-time state synchronization.",

      "Collaborated across backend APIs, real-time systems, and enterprise operational workflows to deliver scalable production-grade platforms.",
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