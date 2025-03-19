import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";

export default function Section() {
  return (
    <section className="relative w-full flex justify-center items-center flex-col">
      <div className="relative w-full">
        <Image
          src="/mwb2022.png"
          alt="Background Image"
          width={1280} // Original width of the image
          height={1706} // Original height of the image
          objectFit="contain" // Ensures the image retains aspect ratio while filling width
          className="w-full h-auto"
        />
      </div>
      <div className="absolute md:top-[200px] top-16
       flex flex-col justify-center items-center gap-2 bg-gray-900 bg-opacity-60 m-6 p-6 md:m-20 md:p-20 shadow-xl md:gap-12">
        <h3 className="text-xl md:text-5xl text-white text-center font-extrabold shadow-xl">
          FIRST PRICE HACKTON ON MOBILE WORLD BARCELONA 2022
        </h3>
        <FaMedal className="text-9xl text-white" size={40} />
      </div>

      <div className="absolute bottom-6 md:bottom-12 flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 w-full">
        <div className="flex space-x-5 sm:space-x-8">
          <a href="https://www.linkedin.com/in/joaopsmachado/" target="_blank">
            <FaLinkedin className="size-10 md:size-12 text-white hover:scale-110" />
          </a>
          <a href="https://github.com/jpsm83" target="_blank">
            <FaGithub className="size-10 md:size-12 text-white hover:scale-110" />
          </a>
        </div>
        <p className="text-md italic text-center text-white">
          Created by <span className="font-bold">Joao P S Machado</span>
        </p>
      </div>
    </section>
  );
}
