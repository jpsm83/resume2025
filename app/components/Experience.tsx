import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { FaLinkedin } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Experience = () => {
  const references = [
    {
      name: "Carlos Cosials",
      title:
        "President of ASEIT - Asociación de Empresas de Informática y Tecnologías de la Comunicación de Cataluña and IoT Project manager of Integral 9Altitudes",
      company: "Integral 9Altitudes",
      linkedin: "https://www.linkedin.com/in/ccosials/",
      image: "/carlos.jpg",
    },
    {
      name: "Lucas Machado",
      title: "Senior Software Engineer of N26 Barcelona",
      company: "N26 Barcelona",
      linkedin: "https://www.linkedin.com/in/lucasflmachado/",
      image: "/lucas.jpg",
    },
    {
      name: "Sandro Maggiolo",
      title: "Senior IIoT Engineer / Project manager at Integral 9Altitudes",
      company: "Integral 9Altitudes",
      linkedin: "https://www.linkedin.com/in/sandro-maggiolo-a3612b187/",
      image: "/sandro.png",
    },
    {
      name: "Victor Lasheras Sanches",
      title: "Backend Engineer",
      company: "Ambit Enterprise Solutions",
      linkedin: "https://www.linkedin.com/in/victorlasheras/",
      image: "/victor.jpg",
    },
  ];

  const logos = [
    {
      source: "/armada.png",
      altText: "Armada",
      width: 100,
      height: 100,
    },
    {
      source: "/hp.png",
      altText: "HP",
      width: 160,
      height: 160,
    },
    {
      source: "/indra.png",
      altText: "Indra",
      width: 200,
      height: 200,
    },
    {
      source: "/liquats.png",
      altText: "Liquats",
      width: 200,
      height: 200,
    },
    {
      source: "/pikolin.png",
      altText: "Pikolin",
      width: 180,
      height: 180,
    },
    {
      source: "/seat.png",
      altText: "Seat",
      width: 160,
      height: 160,
    },
    {
      source: "/tosa.png",
      altText: "Tosa",
      width: 180,
      height: 180,
    },
  ];

  return (
    <>
      <section
        id="experience"
        className="flex bg-gray-500 flex-col justify-between gap-12 px-8 py-20 md:p-20"
      >
        <h1 className="text-xl text-white font-extrabold">EXPERIENCE</h1>

        <div className="flex">
          <a
            href="https://www.9altitudes.com/"
            target="_blank"
            className="w-full"
          >
            <div className="bg-white inline-flex justify-around items-center w-full p-10">
              <Image
                src="/integral.png"
                alt="Integral"
                width={200}
                height={200}
              />
              <Image
                src="/9Altitudes.png"
                alt="9Altitudes"
                width={200}
                height={200}
                className="hidden md:block"
              />
            </div>
          </a>
          <div className="flex flex-col justify-between ml-4 md:ml-6">
            <a
              href="https://www.google.com/maps/place/DFactory+Barcelona/@41.3358098,2.1354109,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49fa3e62890a7:0x3b586603c0247115!8m2!3d41.3358098!4d2.1379912!16s%2Fg%2F11q8gbb6dz?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMapMarkerAlt className="size-12 text-gray-400 hover:scale-110 hover:text-yellow-400 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/company/integral-innovation-solutions/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="size-12 text-gray-400 hover:scale-110 hover:text-yellow-400 cursor-pointer" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-6 mb-6 flex-wrap justify-between">
            <h2 className="font-extrabold text-xl md:text-2xl text-gray-800 self-end">
              Integral Innovation Experts / 9Altitudes
            </h2>
            <h3 className="italic text-white self-end">
              From January 2019 to present
            </h3>
          </div>
          <div className="flex flex-col gap-8 text-justify text-white text-xl">
            <p>
              At Integral / 9Altitudes, I contributed significantly as a
              versatile software engineer, engaging in diverse projects that
              showcased my adaptability and technical expertise. I worked
              extensively across the software development lifecycle, delivering
              solutions for both the front-end and back-end of applications. My
              role involved designing, implementing, and maintaining robust
              systems that directly impacted the success of the company and its
              high-profile clients.
            </p>
            <p>
              Collaborating with clients such as Armada, HP, Indra, Liquats,
              Pikolin, Seat, and Textil Olius, I played a crucial role in
              understanding their specific needs and translating those into
              effective technical solutions. My involvement was pivotal in
              delivering value-driven projects that enhanced operational
              efficiency and user experience for these organizations.
            </p>
            <p>
              Through innovative problem-solving and a commitment to excellence,
              I ensured the delivery of high-quality software, contributing to
              the company’s reputation for reliability and expertise. My work
              not only reinforced client trust but also drove their digital
              transformation efforts forward, aligning with their strategic
              goals.
            </p>
            <p>
              This experience has honed my ability to navigate complex
              challenges, collaborate across teams, and deliver impactful
              solutions that make a tangible difference for both the
              organization and its clientele.
            </p>
          </div>
        </div>
      </section>
      <div className="flex items-center bg-gray-600 overflow-hidden">
        <Marquee gradient={false} speed={100} pauseOnHover={false}>
          {logos.map((logo, index) => (
            <div key={index} className="mx-4">
              <Image
                src={logo.source}
                alt={logo.altText}
                width={logo.width}
                height={logo.height}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <section
        id="references"
        className="flex bg-gray-700 flex-col gap-12 justify-between px-8 py-20 md:p-20"
      >
        <h1 className="text-2xl text-white font-extrabold">REFERENCES</h1>

        <div className="flex flex-col md:flex-row gap-16 flex-wrap">
          {references.map((reference) => (
            <div
              key={reference.name}
              className="flex flex-col md:flex-row gap-10 items-center w-full"
            >
              <a href={reference.linkedin} target="_blank">
                <div className="relative w-[100px]">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src={reference.image}
                      alt={reference.name}
                      width={100}
                      height={100}
                    />
                  </div>
                  <FaLinkedin className="size-8 text-white cursor-pointer absolute bottom-[-2px] right-[-10px] z-9" />
                </div>
              </a>

              <div className="text-center md:text-start font-bold text-white md:ml-8 text-lg md:text-xl w-full">
                <h3 className="inline">Name:</h3>
                <span className="ml-2 md:ml-4 text-yellow-600 font-extrabold text-xl md:text-2xl">
                  {reference.name}
                </span>
                <br />
                <h3 className="inline">Position:</h3>
                <span className="ml-2 md:ml-4 font-normal">
                  {reference.title}
                </span>
                <br />
                <h3 className="inline">Company:</h3>
                <span className="ml-2 md:ml-4 font-normal">
                  {reference.company}
                </span>
              </div>
              <hr className="border-white w-full md:border-none" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
