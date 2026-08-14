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
    <div className="max-w-6xl mx-auto">
      <hr className="glow-hr" />

      <div className="flex gap-8 mb-10 text-lg font-medium text-white">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`cursor-pointer ${
              activeTab === tab.key ? "text-[#f7b2d9] border-b-2 border-[#f7b2d9]" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>
        {tabs.find((tab) => tab.key === activeTab)?.component}
      </div>
    </div>
    </section>
  );
}

export default Section;
