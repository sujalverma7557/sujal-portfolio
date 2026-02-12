import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  threejs,
  git,
  figma,
  docker,
  // expressjs,
  // nextjs,
  // postgresql,
  vitto,
  toothly,
  eventsnap,
  guestify,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Competitive Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Next JS",
  //   icon: nextjs,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "Express JS",
  //   icon: expressjs,
  // },
  // {
  //   name: "PostgreSQL",
  //   icon: postgresql,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Vitto Money",
    icon: vitto,
    iconBg: "#0f172a",
    date: "Sept 2025 – Present",
    points: [
      "Developed and enhanced backend APIs and admin dashboards for a fintech Loan Management System supporting multiple lending partners.",
      "Implemented partner workflows including lead management, automated eligibility checks, API error handling, and secure JWT-based URL generation.",
      "Designed scalable backend architecture for configurable multi-step lender execution using Node.js, Express, PostgreSQL, and Sequelize.",
      "Improved system reliability by debugging staging issues, standardizing API responses, and optimizing partner integrations.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Toothly",
    description:
      "A full-stack dental appointment platform designed to handle real-world clinic workflows. The application supports secure authentication, real-time appointment booking, admin dashboards, subscription billing, and AI-powered voice assistance for patient interactions.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: toothly,
    source_code_link: "https://github.com/sujalverma7557/toothly.git",
  },
  {
    name: "EventSnap",
    description:
      "A private, invite-only photo sharing platform built for event-based use cases. The application supports secure invite-based authentication, role-based access control, optimized image uploads, and smooth gallery browsing with download support functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: eventsnap,
    source_code_link: "https://github.com/sujalverma7557/EventSnap.git",
    live_link: "https://eventsnap-y80e.onrender.com/",
  },
  {
    name: "Guestify",
    description:
      "A full-stack visitor management system built to streamline event scheduling and visitor workflows across multiple user roles. The platform provides secure authentication, role-based access control, and real-time visitor status tracking through a responsive web interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "restapis",
        color: "pink-text-gradient",
      },
    ],
    image: guestify,
    source_code_link: "https://github.com/sujalverma7557/Guestify.git",
    live_link: "https://guestify-1jso.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
