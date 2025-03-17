"use client";

import FileSaver from "file-saver";
import { FaArrowAltCircleUp } from "react-icons/fa";
import About from "./components/About";
import { Experience } from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Qualities from "./components/Qualities";
import Resume from "./components/Resume";

const downloadResume = () => {
  FileSaver.saveAs("/jp-resume-2025-compressed.pdf", "My_Resume.pdf");
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Qualities />
      <Resume />
      <Experience />
      <Portfolio />
      <Footer />
      <div className="sticky bottom-0 z-10 flex items-center justify-center text-gray-400 bg-gray-800 h-14 sm:h-16 rounded-none border-none shadow-2xl">
        <button
          onClick={downloadResume}
          className="md:text-lg text-xl border-2 border-gray-400 rounded-md px-4 py-1 hover:bg-gray-700 hover:text-white"
        >
          Download Resume
        </button>{" "}
        <a href="#home" className="absolute right-4 hover:text-gray-300">
          <FaArrowAltCircleUp className="size-10" />
        </a>
      </div>
    </div>
  );
}
