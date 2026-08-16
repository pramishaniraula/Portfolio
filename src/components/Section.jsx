import { useState } from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import About from "./About";

function Section() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { key: "about", label: "About Me", component: <About /> },
    { key: "skills", label: "Skills", component: <Skills /> },
    { key: "experience", label: "Experience", component: <Experience /> },
    { key: "education", label: "Education", component: <Education /> },
  ];

  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl">
        <hr className="glow-hr" />

        <div className="mb-10 flex flex-wrap gap-x-8 gap-y-4 text-lg font-medium">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`group relative cursor-pointer py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-[#C98B6B]"
                    : "text-[#2F3328] hover:text-[#C98B6B]"
                }`}
              >
                {tab.label}

                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C98B6B] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div>
          {tabs.find((tab) => tab.key === activeTab)?.component}
        </div>
      </div>
    </section>
  );
}

export default Section;