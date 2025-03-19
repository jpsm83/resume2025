"use client";

import Image from "next/image";
import { useState, MouseEvent } from "react";

// react-icons --
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiShadcnui } from "react-icons/si";
import { SiClerk } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { FaBootstrap } from "react-icons/fa";
import { SiAuth0 } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { VscCopilot } from "react-icons/vsc";
import { FaGoogle } from "react-icons/fa";
import { FaDocker } from "react-icons/fa6";
import { SiOpenvpn } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import { SiDjango } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaUbuntu } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiJira } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiVercel } from "react-icons/si";
import { FaWindows } from "react-icons/fa";
import { SiReactquery } from "react-icons/si";
import { RiBearSmileLine } from "react-icons/ri";
import { FaTrello } from "react-icons/fa";

const iconStyles =
  "size-14 text-gray-400 hover:scale-110 hover:text-yellow-600 cursor-auto";

const education = [
  {
    school:
      "SENAC Escola Tecnica de Hospitalidade (Hospitality Technical School)",
    course:
      "Gegenciamento de bares e restaurantes (Food & Beverage Management)",
    date: "Accomplished on November 2010",
  },
  {
    school: "IronHack Barcelona",
    course: "Full Stack Web Developer MERN",
    date: "Accomplished on June 2021",
  },
  {
    school: "Udemy",
    course: "Python and Django Full Stack Web Developer Bootcamp",
    date: "Accomplished on November 2022",
  },
];

export default function Resume() {
  const [iconName, setIconName] = useState("");

  const handleIconName = (
    e: MouseEvent<SVGElement | HTMLImageElement>,
    name: string
  ) => {
    e.preventDefault();
    setIconName(name);
  };

  return (
    <section
      id="skills"
      className="flex bg-gray-100 flex-col justify-center gap-12 px-8 pt-20 sm:p-20"
    >
      <div>
        <h1 className="text-xl text-blue-900 font-extrabold mb-8">EDUCATION</h1>
        {education.map((edu, idx) => (
          <div key={idx}>
            <h2 className="font-extrabold text-yellow-600 mb-4">
              {edu.school}
            </h2>
            <h3 className="text-xl italic">{edu.course}</h3>
            <p className="text-lg italic mb-4">{edu.date}</p>
          </div>
        ))}
      </div>

      <div>
        <h1 className="text-xl text-blue-900 font-extrabold mb-8">SKILLS</h1>

        <div className="flex justify-between gap-8 p-4 flex-wrap shadow-xl bg-gray-200">
          <FaLinkedin
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "LinkedIn")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FaGithub
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "GitHub")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiShadcnui
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "ShadcnUI")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiClerk
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Clerk")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <BiLogoPostgresql
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "PostgreSQL")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <GrMysql
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "MySQL")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FaBootstrap
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Bootstrap")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiAuth0
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Auth0")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiSass
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Sass")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FaCss3Alt
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "CSS3")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiExpress
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Express")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <IoLogoFirebase
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Firebase")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <VscCopilot
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Copilot")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FaGoogle
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Google")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FaDocker
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Docker")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiOpenvpn
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "OpenVPN")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiHeroku
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Heroku")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FaHtml5
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "HTML5")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <IoLogoJavascript
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "JavaScript")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FaPython
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Python")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiDjango
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Django")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiMongodb
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "MongoDB")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <RiNextjsFill
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "NextJS")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FaNode
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Node")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiPostman
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Postman")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <GrReactjs
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "ReactJS")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiRedux
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Redux")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <RiTailwindCssFill
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "TailwindCSS")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FaUbuntu
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Ubuntu")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiPrisma
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Prima")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiMongoose
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Mongoose")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiTypescript
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "TypeScript")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiJira
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Jira")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FiFigma
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Figma")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiVercel
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Vercel")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FaWindows
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Windows")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <SiReactquery
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "ReactQuery")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <RiBearSmileLine
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Zustand")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <FaTrello
            className={iconStyles}
            onMouseEnter={(e) => handleIconName(e, "Trello")}
            onMouseLeave={(e) => handleIconName(e, "")}
          />
          <Image
            src="/logos/chatgpt.svg"
            alt="ChatGPT"
            width={40}
            height={40}
            onMouseEnter={(e) => {
              handleIconName(e, "ChatGPT");
            }}
            onMouseLeave={(e) => {
              handleIconName(e, "");
            }}
          />
          <Image
            src="/logos/thingworx.svg"
            alt="ThingWorx"
            width={40}
            height={40}
            onMouseEnter={(e) => {
              handleIconName(e, "ChatGPT");
            }}
            onMouseLeave={(e) => {
              handleIconName(e, "");
            }}
          />
        </div>
        <div className="h-20 flex items-center justify-center">
          <h3 className="text-xl text-yellow-600 font-extrabold">{iconName}</h3>
        </div>
      </div>
    </section>
  );
}
