import About from "./components/About";
import { Experience } from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Qualities from "./components/Qualities";
import Resume from "./components/Resume";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <Header />
      <About />
      <Qualities />
      <Resume />
      <Experience />
      <Portfolio />
      <Footer />
      <a href="#home" className="fixed md:bottom-8 bottom-12 right-6 hover:text-gray-300">
        <FaArrowAltCircleUp className="size-14" />
      </a>
    </div>
  );
}
