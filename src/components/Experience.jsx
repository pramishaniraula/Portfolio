import { FaLaptopCode, FaProjectDiagram } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      icon: <FaLaptopCode />,
      title: "Learning by Doing",
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
          className="flex flex-col items-center rounded-2xl border border-[#3b2d34] bg-[#241b21] p-6 
                     transition hover:-translate-y-2 hover:scale-[1.03] 
                     hover:border-[#f7b2d9] hover:shadow-lg hover:shadow-[#f7b2d9]/30"
        >
          <div className="text-3xl text-[#f7b2d9] mb-3">{exp.icon}</div>
          <h3 className="text-lg font-medium text-white text-center">{exp.title}</h3>
          <p className="mt-2 text-sm text-gray-400 text-center">{exp.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Experience;
