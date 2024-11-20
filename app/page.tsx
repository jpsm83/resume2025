import About from "./components/About";
import { Experience } from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Qualities from "./components/Qualities";
import Resume from "./components/Resume";

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
    </div>
  );
}
