"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <div className="flex relative overflow-hidden h-screen">
        <Image
          src="/background.jpg"
          alt="Background Image"
          height={1033}
          width={1838}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute flex flex-col justify-center items-center gap-y-16">
        <h1 className="text-7xl md:text-8xl text-white font-bold mx-4 md:mx-8 text-center">
          <TypeAnimation
            sequence={["Hello, I'm João Machado", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <h3 className="text-2xl text-white text-center mx-4 md:mx-8">
          🚀 Barcelona-based Software Developer with 3+ years&apos; experience,
          leveraging the latest technologies to build scalable, high-performance
          delivering cutting-edge applications. Passionate about solving
          problems, staying ahead of trends, and driving impactful projects with
          a growth mindset. 🌐✨
        </h3>

        <div className="flex space-x-8">
          <a href="https://www.linkedin.com/in/joaopsmachado/" target="_blank">
            <FaLinkedin className="size-12 text-white hover:scale-110" />
          </a>
          <a href="https://github.com/jpsm83" target="_blank">
            <FaGithub className="size-12 text-white hover:scale-110" />
          </a>
        </div>
      </div>
    </section>
  );
}
