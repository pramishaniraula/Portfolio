import { FaLaptopCode, FaProjectDiagram } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      icon: <FaLaptopCode />,
      title: "Learning by Practice",
      text: "Currently practicing programming concepts and applying them in small projects.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Building Projects",
      text: "Working on web apps and portfolio projects to strengthen my skills.",
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-2xl border border-[#A8B29B]/70 bg-[#F9F6F0] p-6
                     transition duration-300
                     hover:-translate-y-1 hover:border-[#66735A]
                     hover:shadow-lg hover:shadow-[#66735A]/10"
        >
          {/* Icon */}
          <div className="mb-3 text-3xl text-[#66735A]">
            {exp.icon}
          </div>

          {/* Title */}
          <h3 className="text-center text-lg font-medium text-[#2F3328]">
            {exp.title}
          </h3>

          {/* Description */}
          <p className="mt-2 text-center text-sm leading-6 text-[#6A6E64]">
            {exp.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Experience;