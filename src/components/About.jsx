function About() {
  return (
    <div
      className="mt-8 flex gap-6 rounded-2xl border border-[#A8B29B]/70 bg-[#F9F6F0] p-8
                 transition duration-300
                 hover:-translate-y-1 hover:border-[#66735A]
                 hover:shadow-lg hover:shadow-[#66735A]/10"
    >
      <div>
        <h3 className="text-xl font-medium text-[#2F3328]">
          Learning, building and growing
        </h3>

        <p className="mt-3 leading-7 text-[#4F5549]">
          I'm a Computer Science student currently in my 4th semester at Apex College.
          I'm interested in software development and especially enjoy learning how websites
          and applications are built.
        </p>

        <p className="mt-3 leading-7 text-[#6A6E64]">
          I'm strengthening my skills in HTML, CSS, JavaScript, React, Git and SQL by
          working on projects and learning through practice.
        </p>
      </div>
    </div>
  );
}

export default About;