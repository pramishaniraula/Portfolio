import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "BatoSanjaal",
      type: "Minor II",
      description:
        "A travel-focused web application where I worked on the React frontend, building interfaces and features for exploring destinations, news, reviews and nearby places.",
      technologies: ["React", "Tailwind CSS", "Axios", "JavaScript"],
      github: "https://github.com/Sundarkhanal/tourism_project",
      demo: "#",
    },
    {
      title: "Wedding Planning Website",
      type: "Minor I",
      description:
        "A wedding planning website frontend designed to present wedding-related services and information through a clean and responsive user interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/pramishaniraula/project1pramisha",
      demo: "https://vercel.com/pramisha-niraulas-projects/project1pramisha-abcd",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl">
        <hr className="glow-hr" />

        <h2 className="mb-4 text-3xl font-bold text-[#66735A]">
          My Projects
        </h2>

        <p className="mt-4 leading-8 text-[#5F6258]">
          I'm using projects to practice what I learn and understand how
          different technologies work together.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-[#A8B29B]/70 bg-[#F9F6F0] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#66735A] hover:shadow-lg hover:shadow-[#66735A]/10"
            >
              {/* Project heading */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="mb-2 text-xl font-bold text-[#2F3328]">
                  {project.title}
                </h3>

                <span className="shrink-0 rounded-full bg-[#E4E8DD] px-3 py-1 text-xs font-medium text-[#66735A]">
                  {project.type}
                </span>
              </div>

              {/* Description */}
              <p className="line-clamp-2 text-sm leading-6 text-[#5F6258]">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#A8B29B] px-3 py-1 text-xs text-[#66735A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-md bg-[#66735A] px-4 py-2 text-sm font-medium text-[#F4F1EA] transition hover:bg-[#59644E]"
                >
                  View Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-[#A8B29B] px-4 py-2 text-sm font-medium text-[#2F3328] transition hover:border-[#C98B6B] hover:text-[#C98B6B]"
                >
                  <FaGithub size={14} />
                  Github Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;