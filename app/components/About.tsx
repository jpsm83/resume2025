import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-700 flex sm:flex-nowrap flex-wrap justify-center sm:justify-between p-10 sm:p-12"
    >
      <div className="flex justify-center h-40 w-40 overflow-hidden rounded-full shrink-0 sm:mr-20 mb-10">
        <Image
          src="/joaoPhoto.jpg"
          alt="Profile Image"
          height={300}
          width={200}
        />
      </div>
      <div className="flex flex-col w-full space-y-2">
        <h2 className="text-lg sm:text-xl text-white font-bold">About Me</h2>
        <p className="text-sm sm:text-md text-gray-400 text-justify">
        As a Software Engineer with over 3 years of experience in IoT development, I bring a strong foundation in building high-quality, innovative solutions. Through extensive training in modern web technologies, I have honed my expertise in MERN stack development, enabling me to deliver scalable and efficient applications. My adaptability, dedication to continuous learning, and passion for solving complex problems make me a valuable asset to any forward-thinking team. I am committed to staying ahead of industry trends and leveraging my skills to drive impactful, cutting-edge projects.
        </p>
        <div className="flex flex-col w-full space-y-2">
          <h2 className="text-lg sm:text-xl text-white font-bold mt-6">
            Contact Details
          </h2>
          <p className="text-sm sm:text-md text-gray-400 text-justify">
            <span>Joao Paulo de Souza Machado</span>
            <br />
            <span>Barcelona - 08026</span>
            <br />
            <span>(+34) 615 055 703</span>
            <br />
            <span>jpsm83@hotmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
