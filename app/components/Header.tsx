"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState, MouseEvent } from "react";

export default function Header() {
  const [iconName, setIconName] = useState("");

  const handleIconName = (e: MouseEvent<HTMLAnchorElement>, name: string) => {
    e.preventDefault();
    setIconName(name);
  };

  return (
    <header
      id="home"
      className="w-full flex justify-center items-center flex-col"
    >
      <div className="flex flex-grow relative overflow-hidden h-screen object-bottom bottom-0">
        <Image
          src="/background.jpg"
          alt="Background Image"
          height={1033}
          width={1838}
        />
      </div>

      <div className="absolute flex flex-col justify-center items-center gap-y-4 sm:gap-y-8">
        <h1 className="text-5xl sm:text-7xl text-white font-bold mx-4 sm:mx-8 text-center">
          <TypeAnimation
            sequence={["Hello, I'm João Machado.", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <h3 className="text-md sm:text-lg text-white text-center mx-4 sm:mx-8">
          Barcelona-based Software Engineer with over 3 years of experience,
          leveraging the latest technologies to build scalable, high-performance
          applications. Passionate about crafting innovative solutions and
          driving impactful projects
        </h3>

        <div className="flex space-x-5 sm:space-x-8">
          <a
            href="https://www.linkedin.com/in/joaopsmachado/"
            target="_blank"
            onMouseEnter={(e) => handleIconName(e, "LinkedIn")}
            onMouseLeave={(e) => handleIconName(e, "")}
          >
            <FaLinkedin className="size-9 sm:size-12 text-white hover:scale-110" />
          </a>
          <a
            href="https://github.com/jpsm83"
            target="_blank"
            onMouseEnter={(e) => handleIconName(e, "GitHub")}
            onMouseLeave={(e) => handleIconName(e, "")}
          >
            <FaGithub className="size-9 sm:size-12 text-white hover:scale-110" />
          </a>
        </div>
        <p className="h-8 text-white font-bold text-xs sm:text-sm">
          {iconName}
        </p>
      </div>

      <p className="">
        <a href="#about">
          <i className=""></i>
        </a>
      </p>
    </header>
  );
}
