import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-700 flex sm:flex-nowrap flex-wrap justify-center sm:justify-between px-8 py-20 sm:p-20"
    >
      <div className="flex justify-center h-60 w-60 overflow-hidden rounded-full sm:mr-20 mb-20">
        <Image
          src="/joaoPhoto.png"
          alt="Profile Image"
          height={200}
          width={200}
        />
      </div>
      <div className="text-xl flex flex-col w-full gap-12 text-justify text-gray-400">
        <div className="flex flex-col justify-between gap-8">
          <h2 className="text-white font-extrabold">About Me</h2>
          <p>
            🌟 Software Engineer | Crafting Impactful Applications & IoT
            Solutions
          </p>
          <p>
            I’m a passionate Software Engineer dedicated to building innovative
            applications with cutting-edge technologies. 🚀 My expertise spans
            IoT development and MERN stack (including Next.js), enabling me to
            create dynamic, user-friendly interfaces and robust backends that
            deliver seamless and engaging user experiences. 🌐
          </p>
          <p>
            With a strong foundation in database management, I work effortlessly
            across MongoDB, PostgreSQL, and SQL, leveraging tools like Postman
            and Prisma for efficiency. While Python isn’t my primary language, I
            confidently incorporate it into projects to enhance flexibility and
            adaptability. 🐍
          </p>
          <p>
            Calm under pressure and skilled in Agile methodologies, I deliver
            transparent and timely results using tools like Jira, Trello, and
            Git. Recognized for my attention to detail, collaborative mindset,
            and commitment to writing clean, maintainable code, I quickly adapt
            to evolving technologies and team dynamics.
          </p>
          <p>
            Whether working remotely or in hybrid environments, I bring a
            focused, solution-oriented approach to challenges. Let’s work
            together to create meaningful, impactful solutions that drive
            innovation forward. 💻✨
          </p>
        </div>
        <div className=" flex flex-col justify-between">
          <h2 className="text-white font-extrabold mb-8">Contact Details</h2>
          <p>• Joao Paulo de Souza Machado</p>
          <p>• Barcelona - 08026</p>
          <p>• (+34) 615 055 703</p>
          <p>• jpsm83@hotmail.com</p>
        </div>
      </div>
    </section>
  );
}
