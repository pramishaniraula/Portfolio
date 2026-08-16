import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, text: "Practicing HTML" },
    { name: "CSS", icon: <FaCss3Alt />, text: "Practicing CSS" },
    {
      name: "JavaScript",
      icon: <FaJs />,
      text: "Learning and practicing JavaScript",
    },
    {
      name: "React",
      icon: <FaReact />,
      text: "Confident and building projects with React",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      text: "Learning Git basics and workflows",
    },
    {
      name: "SQL",
      icon: <SiMysql />,
      text: "Exploring databases and learning SQL",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="group flex flex-col items-center justify-center rounded-2xl border border-[#A8B29B]/70 bg-[#F9F6F0] p-8
                     transition duration-300
                     hover:-translate-y-1 hover:border-[#66735A]
                     hover:shadow-lg hover:shadow-[#66735A]/10"
        >
          {/* Icon */}
          <div className="mb-4 text-4xl text-[#66735A] transition duration-300 group-hover:scale-110 group-hover:text-[#C98B6B]">
            {skill.icon}
          </div>

          {/* Skill Name */}
          <h3 className="text-lg font-medium text-[#2F3328]">
            {skill.name}
          </h3>

          {/* Description */}
          <p className="mt-3 text-center text-sm leading-6 text-[#6A6E64]">
            {skill.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Skills;