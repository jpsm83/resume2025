import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { IoCaretForwardCircleSharp } from "react-icons/io5";

const portofolio = [
  {
    name: "Cool Bananas",
    image: "/cool_bananas.png",
    link: "https://coolbananas.org/",
    githubFront: "https://github.com/jpsm83/coolbananas",
    githubBack: null,
  },
  {
    name: "My Recipes Library",
    image: "/myRecipesLibrary.PNG",
    link: "https://my-recipes-library-app.herokuapp.com/",
    githubFront: "https://github.com/jpsm83/my-recipes-library-client",
    githubBack: "https://github.com/jpsm83/my-recipes-library-server",
  },
  {
    name: "Movies Redux",
    image: "/movieRedux.png",
    link: "https://movies-redux.vercel.app/",
    githubFront: "https://github.com/jpsm83/movies-redux",
    githubBack: null,
  },
  {
    name: "To Do App",
    image: "/toDoApp.png",
    link: "https://notesaplication.herokuapp.com/",
    githubFront: "https://github.com/jpsm83/notes-app-react-client",
    githubBack: "https://github.com/jpsm83/notes-app-react-server",
  },
  {
    name: "Netflix Clone",
    image: "/netflixClone.png",
    link: "https://netflix-clone-e6153.web.app/",
    githubFront: "https://github.com/jpsm83/netflix-clone",
    githubBack: null,
  },
  {
    name: "MWC22 Barcelona",
    image: "/mwc22.jpg",
    link: "https://mwc22.herokuapp.com/",
    githubFront: "https://github.com/jpsm83/mwc22-client",
    githubBack: "https://github.com/jpsm83/mwc22-server",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-gray-400 flex flex-col text-center justify-center gap-8 py-6 sm:py-12"
    >
      <h1 className="font-extrabold text-xl sm:text-2xl text-gray-800 m-8">
        Portofolio
      </h1>

      <div className="flex justify-center gap-6 sm:gap-12 md:gap-18 flex-wrap mb-16 mx-6">
        {portofolio.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white p-4 justify-between gap-4 shadow-xl"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-md sm:text-lg text-yellow-600">
                {item.name}
              </h2>
              <a href={item.link} target="blank">
                <IoCaretForwardCircleSharp className="text-green-800 size-14 cursor-pointer" />
              </a>
            </div>

            <div>
              <Image
                src={item.image}
                alt={item.name}
                height={280}
                width={280}
              />
            </div>

            <div className="flex gap-2 sm:gap-4 md:gap-6 justify-center">
              <div className="relative z-10">
                <a href={item.githubFront} target="blank">
                  <FaGithub className="text-gray-300 size-12 cursor-pointer" />
                </a>
                {item.githubBack && (
                  <h5 className="font-bold text-gray-900 cursor-pointer absolute top-0 left-[-22] z-10">
                    Front
                  </h5>
                )}
              </div>
              {item.githubBack && (
                <div className="relative">
                  <a href={item.githubBack} target="blank">
                    <FaGithub className="text-gray-300 size-12 cursor-pointer" />
                  </a>
                  <h5 className="font-bold text-gray-900 cursor-pointer absolute bottom-0 right-[-22] z-10">
                    Back
                  </h5>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
