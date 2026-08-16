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
      level:
        "Bachelor of Computer System and Information Technology (BCSIT)",
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
            className="flex gap-6 rounded-2xl border border-[#A8B29B]/70 bg-[#F9F6F0] p-6
                       transition duration-300
                       hover:-translate-y-1 hover:border-[#66735A]
                       hover:shadow-lg hover:shadow-[#66735A]/10"
          >
            {/* Icon */}
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
                         bg-[#E4E8DD] text-[#66735A]"
            >
              {item.icon}
            </div>

            {/* Education Details */}
            <div>
              <p className="text-sm uppercase tracking-wider text-[#C98B6B]">
                {item.status}
              </p>

              <h3 className="mt-2 text-xl font-medium text-[#2F3328]">
                {item.level}
              </h3>

              <p className="mt-2 text-[#6A6E64]">
                {item.institution}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;