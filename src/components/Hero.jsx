import { FaGithub, FaArrowDown } from "react-icons/fa";
import pramisha from "../assets/pramisha.png";

function Hero() {
  return (
    <section id="home" className="section">
      <div className="mx-auto grid max-w-6xl items-center mt-2 gap-12 md:grid-cols-2">
        
        {/* Text */}
        <div>
          <p className="mb-4 text-lg text-[#66735A]">
            Computer Science Student
          </p>

          <h1 className="heading-font text-5xl leading-tight text-[#2F3328] md:text-7xl">
            Hi, I'm{" "}
            <span className="text-[#C98B6B]">
              Pramisha Niraula.
            </span>
          </h1>

          <p className="mt-6 max-w-xl leading-8 text-[#5F6258] text-justify">
            I'm a 4th-semester Computer Science student and an aspiring
            web developer currently learning React, JavaScript, HTML, CSS,
            Git, and SQL.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#66735A] px-6 py-3 text-sm font-medium text-[#F4F1EA] transition hover:scale-105 hover:bg-[#59644E]"
            >
              View My Work
              <FaArrowDown size={13} />
            </a>

            <a
              href="https://github.com/pramishaniraula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#A8B29B] px-6 py-3 text-sm font-medium text-[#2F3328] transition hover:bg-[#E5E5D9]"
            >
              <FaGithub size={16} />
              GitHub
            </a>

          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={pramisha}
            alt="Pramisha Niraula, Computer Science student and aspiring web developer"
            className="h-105 w-105 rounded-full border-4 border-[#8a977e] object-cover shadow-lg shadow-[#839275] transition duration-300 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;