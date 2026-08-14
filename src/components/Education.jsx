import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      icon: <FaSchool />,
      level: "Secondary School Education",
      institution: "Araniko Secondary School",
      status: "2019 - 2022",
    },
    {
      icon: <FaGraduationCap />,
      level: "Higher Secondary Education (+2)",
      institution: "Nobel Academy",
      status: "2022 - 2024",
    },
    {
      icon: <FaUniversity />,
      level: "Bachelor of Computer System and Information Technology (BCSIT)",
      institution: "Apex College",
      status: "2024 - Present",
    },
  ];

  return (
      <div className="mx-auto max-w-6xl">
        <div className="mt-8 space-y-4">
          {education.map((item) => (
            <div
              key={item.institution}
              className="flex gap-6 rounded-2xl border border-[#3b2d34] bg-[#241b21] p-6 
                        transition transform hover:-translate-y-2 hover:scale-[1.02] 
                        hover:border-[#f7b2d9] hover:shadow-lg hover:shadow-[#f7b2d9]/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2a2026] text-[#f7b2d9]">
                {item.icon}
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-[#c9a6b2]">
                  {item.status}
                </p>
                <h3 className="mt-2 text-xl font-medium text-white">{item.level}</h3>
                <p className="mt-2 text-gray-400">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}

export default Education;
