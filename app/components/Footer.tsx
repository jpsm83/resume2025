import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-between p-8 border-t-2 border-gray-600 bg-gray-100">
      <div className="flex flex-col justify-center items-center gap-2 sm:gap-4 md:gap-6 w-full">
        <div className="flex space-x-5 sm:space-x-8">
          <a href="https://www.linkedin.com/in/joaopsmachado/" target="_blank">
            <FaLinkedin className="size-9 sm:size-12 text-gray-800 hover:scale-110" />
          </a>
          <a href="https://github.com/jpsm83" target="_blank">
            <FaGithub className="size-9 sm:size-12 text-gray-800 hover:scale-110" />
          </a>
        </div>
        <p className="text-sm italic sm:text-md text-center text-gray-600">
          Created by <span className="font-bold">Joao P S Machado</span>
        </p>
      </div>
    </div>
  );
}
