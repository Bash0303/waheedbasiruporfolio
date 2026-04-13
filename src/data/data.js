import { FaGithub, FaReact, FaVuejs, FaPhp } from "react-icons/fa";
import { SiLaravel, SiReact, SiTailwindcss, SiCss3, SiJavascript, SiTypescript, SiMicrosoftazure, SiMysql } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { ImHtmlFive } from "react-icons/im";
import { FaBootstrap } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { CgCloud } from "react-icons/cg";
import { BsCloudCheck } from "react-icons/bs";

// Custom SVG for Nuxt (since SiNuxt might not be available)
const NuxtIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.464 2.178C12.992 1.374 11.995 1.374 11.523 2.178L1.758 19.022C1.286 19.826 1.778 20.826 2.722 20.826H22.265C23.209 20.826 23.701 19.826 23.229 19.022L13.464 2.178Z" fill="#00C58E" stroke="#191970" strokeWidth="1.5"/>
    <path d="M15.5 15.5H9.5L12 11L15.5 15.5Z" fill="#191970"/>
    <path d="M18 15.5H15L12 11L15 6L18 15.5Z" fill="#191970" opacity="0.7"/>
    <path d="M9 15.5H6L12 6L13.5 8.5" stroke="#191970" strokeWidth="1.5"/>
  </svg>
);

// Custom SVG for Material UI (keeping your existing one)
const MaterialUIIcon = () => (
  <svg fill="#191970" width="40px" height="40px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0-3 1.73V7.67l3-1.732V2.474z" />
  </svg>
);

// Custom SVG for Next.js
const NextIcon = () => (
  <svg width="40px" height="40px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
    <path d="M119.6,0.07C119.1,0.12 117.3,0.29 115.7,0.42C79.4,3.7 45.3,23.3 23.7,53.5C11.7,70.2 4.1,89.2 1.2,109.4C0.1,116.4 0,118.5 0,128C0,137.6 0.1,139.6 1.2,146.7C8.1,194.7 42.3,235.1 88.7,250.1C97,252.8 105.8,254.6 115.7,255.7C119.6,256.1 136.4,256.1 140.3,255.7C157.5,253.8 172,249.5 186.4,242.2C188.6,241.1 189,240.8 188.7,240.5C188.5,240.4 179.1,227.8 167.9,212.6L147.4,184.9L121.7,147C107.6,126.1 96,109 95.9,109C95.8,109 95.7,125.9 95.7,146.5C95.6,182.5 95.6,184 95.1,184.8C94.5,186 94,186.5 92.9,187.1C92.1,187.5 91.4,187.6 87.6,187.6L83.3,187.6L82.2,186.8C81.4,186.4 80.9,185.7 80.5,185L80,184L80,133.7L80.1,83.5L80.9,82.6C81.3,82 82.1,81.4 82.7,81C83.7,80.5 84.1,80.5 88.5,80.5C93.6,80.5 94.4,80.7 95.7,82.1C96.1,82.5 110,103.5 126.6,128.6C143.2,153.8 166,188.3 177.1,205.1L197.4,235.8L198.4,235.2C207.5,229.3 217.1,220.9 224.7,212.1C241,193.5 251.3,170.8 254.8,146.7C255.9,139.6 256,137.6 256,128C256,118.5 255.9,116.4 254.8,109.4C247.9,61.3 213.7,20.9 167.3,6C159.1,3.3 150.4,1.5 140.6,0.4C138.2,0.1 121.7,-0.1 119.6,0.07Z" fill="#191970" />
  </svg>
);

// Categorized features data
export const featuresData = {
  frontend: [
    { id: 1, title: "HTML 5", icon: <ImHtmlFive /> },
    { id: 2, icon: <SiCss3 />, title: "CSS 3" },
    { id: 3, icon: <SiJavascript />, title: "JAVASCRIPT" },
    { id: 4, icon: <SiTypescript />, title: "TYPESCRIPT" },
    { id: 5, icon: <FaBootstrap />, title: "BOOTSTRAP" },
    { id: 6, icon: <SiTailwindcss />, title: "TAILWIND CSS" },
    { id: 7, icon: <MaterialUIIcon />, title: "MATERIAL UI" },
    { id: 10, icon: <FaReact />, title: "REACT JS" },
    { id: 21, icon: <FaVuejs />, title: "VUE JS" },
    { id: 11, icon: <NextIcon />, title: "NEXT JS" },
    { id: 22, icon: <NuxtIcon />, title: "NUXT JS" }
  ],
  backend: [
    { id: 12, icon: <SiLaravel />, title: "LARAVEL" },
    { id: 14, icon: <IoLogoNodejs />, title: "NODE JS" },
    { id: 23, icon: <FaPhp />, title: "PHP" }
  ],
  database: [
    { id: 16, icon: <DiMongodb />, title: "MONGODB" },
    { id: 24, icon: <SiMysql />, title: "MYSQL" }
  ],
  mobile: [
    { id: 13, icon: <SiReact />, title: "REACT NATIVE" }
  ],
  cloud: [
    { id: 17, icon: <CgCloud />, title: "VERCEL" },
    { id: 18, icon: <BsCloudCheck />, title: "RENDER" },
    { id: 19, icon: <SiMicrosoftazure />, title: "AZURE" },
    { id: 20, icon: <FaGithub />, title: "GITHUB" }
  ]
};

// Keep your existing projects data
export const featuresProject = [
  { id: 1, title: "Unique Friends Schools", des: "https://uniquefriendsschools.com" },
  { id: 2, title: "Balad Private Schools", des: "www.baladprivateschools.com" },
  { id: 3, title: "SkoolRight", des: "www.skoolright.com" },
  { id: 4, title: "Wumbis Concept", des: "www.wumbisconcept.com" },
  { id: 5, title: "Bankole", des: "www.bankole.ng" },
  { id: 7, title: "Bonnarvoo Paint", des: "www.bonnarvoopaint.com" },
  { id: 8, title: "Aboki-Xchange", des: "under development" },
  { id: 9, title: "ESEMEL", des: "https://jupebapplicationfrontend.onrender.com/" },
  { id: 10, title: "BULQ", des: "Under Development" },
  { id: 11, title: "Urello | Tivro Africa", des: "https://tivro.africa/" }
];