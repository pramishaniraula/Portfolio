import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, text: "Learnt and practicing HTML" },
    { name: "CSS", icon: <FaCss3Alt />, text: "Learnt and practiced CSS" },
    { name: "JavaScript", icon: <FaJs />, text: "Learning and practicing JavaScript" },
    { name: "React", icon: <FaReact />, text: "Confident and building projects with React" },
    { name: "Git", icon: <FaGitAlt />, text: "Learning Git basics and workflows" },
    { name: "SQL", icon: <SiMysql />, text: "Exploring databases and learning SQL" },
  ];

  return (
        <div className=" grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center rounded-2xl border border-[#3b2d34] bg-[#241b21] p-8 
                         transition transform hover:-translate-y-2 hover:scale-[1.03] 
                         hover:border-[#f7b2d9] hover:shadow-lg hover:shadow-[#f7b2d9]/30"
            >
              <div className="text-4xl text-[#f7b2d9] mb-4 transition group-hover:scale-110">
                {skill.icon}
              </div>

              <h3 className="text-lg font-medium text-white">{skill.name}</h3>

              <p className="mt-3 text-sm text-gray-400">{skill.text}</p>
            </div>
          ))}
        </div>
  );
}

export default Skills;
