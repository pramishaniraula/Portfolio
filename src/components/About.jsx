
function About() {
  return (
        <div
          className="mt-8 flex gap-6 rounded-2xl border border-[#3b2d34] bg-[#241b21] p-8 
                     transition transform hover:-translate-y-2 hover:scale-[1.02] 
                     hover:border-[#f7b2d9] hover:shadow-lg hover:shadow-[#f7b2d9]/30"
        >
          <div>
            <h3 className="text-xl font-medium text-white">
              Learning, building and growing
            </h3>

            <p className="mt-3 leading-7 text-gray-300">
              I'm a Computer Science student currently in my 4th semester at Apex College. 
              I'm interested in software development and especially enjoy learning how websites 
              and applications are built.
            </p>

            <p className="mt-3 leading-7 text-gray-400">
              I'm strengthening my skills in HTML, CSS, JavaScript, React, Git and SQL by 
              working on projects and learning through practice.
            </p>
          </div>
        </div>
  );
}

export default About;
