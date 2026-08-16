import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "BatoSanjaal",
      type: "Minor II",
      description:
        "A travel-focused web application built using MERN, where I worked on the frontend(React) to create responsive interfaces for exploring destinations, travel news, reviews, and nearby places.",
      technologies: ["React", "Tailwind CSS", "Axios", "JavaScript"],
      github: "https://github.com/Sundarkhanal/tourism_project",
      demo: "#",
    },
    {
      title: "Wedding Planning Website",
      type: "Minor I",
      description:
        "A responsive wedding planning website built with HTML, CSS, and JavaScript, designed to present wedding services and information through a clean and user-friendly frontend.",
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
          I'm using projects to practice frontend development, strengthen my
          programming skills, and understand how different web technologies
          work together.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-2xl border border-[#A8B29B]/70 bg-[#F9F6F0] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#66735A] hover:shadow-lg hover:shadow-[#66735A]/10"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="mb-2 text-xl font-bold text-[#2F3328]">
                  {project.title}
                </h3>

                <span className="shrink-0 rounded-full bg-[#E4E8DD] px-3 py-1 text-xs font-medium text-[#66735A]">
                  {project.type}
                </span>
              </div>

              <p className="text-sm leading-6 text-[#5F6258] text-justify">
                {project.description}
              </p>

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

              <div className="mt-6 flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live ${project.title} project`}
                  className="cursor-pointer rounded-md bg-[#66735A] px-4 py-2 text-sm font-medium text-[#F4F1EA] transition hover:bg-[#59644E]"
                >
                  View Live
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code on GitHub`}
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