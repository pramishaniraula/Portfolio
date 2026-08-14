import { FaGithub, FaArrowDown } from "react-icons/fa";
import pramisha from "../assets/pramisha.png";

function Hero() {
  return (
    <section id="home" className="section">
      <div className="mx-auto grid max-w-6xl items-center mt-4 gap-12 md:grid-cols-2">
        {/* Text */}
        <div>
          <p className="mb-4 text-lg font-semibold text-[#f7b2d9]">
            Computer Science Student
          </p>

          <h1 className="heading-font text-5xl leading-tight text-white md:text-7xl">
            Hi, I'm{" "}
            <span className="text-[#c9a6b2]">
              Pramisha Niraula.
            </span>
          </h1>

          <p className="mt-6 max-w-xl leading-8 text-gray-300">
            I'm a 4th-semester Computer Science student and an aspiring
            developer currently learning web development and programming.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#c9a6b2] px-6 py-3 text-sm font-medium text-[#1d151b] transition hover:scale-105"
            >
              View My Work
              <FaArrowDown size={13} />
            </a>

            <a
              href="https://github.com/pramishaniraula"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#6d5961] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2a2026]"
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
            alt="Pramisha Niraula"
            className="w-72 rounded-3xl border border-[#3b2d34] shadow-lg shadow-[#f7b2d9]/20 transition hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;