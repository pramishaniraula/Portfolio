import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import pramishaLogo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#A8B29B]/50 bg-[#F4F1EA]/95 backdrop-blur-sm">

      {/* Desktop Navbar */}
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4">

        {/* Logo */}
        <a href="#home" className="cursor-pointer">
          <img
            src={pramishaLogo}
            alt="Pramisha Logo"
            className="h-10 w-20 object-contain"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="group relative cursor-pointer py-1 text-sm font-medium text-[#2F3328] transition-colors hover:text-[#C98B6B]"
            >
              {item.name}

              <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#C98B6B] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto cursor-pointer p-1 text-xl text-[#2F3328] md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[#A8B29B]/50 bg-[#F4F1EA] px-6 py-5 shadow-sm md:hidden">

          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="group relative w-fit cursor-pointer py-1 text-sm font-medium text-[#2F3328] transition-colors hover:text-[#C98B6B]"
              >
                {item.name}

                <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#C98B6B] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;