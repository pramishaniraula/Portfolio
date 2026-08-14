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
        <h2 className="text-3xl font-bold mb-4 text-[#f7b2d9]">My Projects</h2>
        <p className="mt-4 leading-8 text-gray-400">
          I'm using projects to practice what I learn and understand how
          different technologies work together.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title}
              className="rounded-2xl border border-[#3b2d34] bg-[#241b21] p-5 transition hover:-translate-y-1 hover:border-[#f7b2d9] hover:shadow-[0_0_15px_#f7b2d9]"
            >
              <h3 className="text-xl font-bold text-[#f7b2d9] mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#4d3a43] px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-[#f7b2d9] px-4 py-2 text-sm font-medium text-[#1a1216] hover:bg-[#ff9dcf] transition"
                >
                  View Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-[#f7b2d9] px-4 py-2 text-sm font-medium text-[#f7b2d9] hover:bg-[#2a2026] transition"
                >
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
