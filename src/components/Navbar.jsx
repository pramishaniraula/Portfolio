import React, { useState } from "react";
import {
FaBars,
FaTimes
} from "react-icons/fa";
import pramishaLogo from "../assets/logo.png";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
  const [menuOpen,setMenuOpen] =useState(false);
  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#3b2d34] bg-[#1a151d]">
      <div className="hidden md:flex mx-auto max-w-6xl items-center justify-between py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a href="/" className="cursor-pointer">
          <img
            src={pramishaLogo}
            alt="Pramisha Logo"
            className="w-30 h-10 object-contain"
          />
        </a>

        <div className="flex items-center gap-6">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="cursor-pointer text-sm text-gray-300 transition hover:text-[#c9a6b2]"
            >
              {item.name}
            </a>
          ))}
        </div>
        <button className="md:hidden ml-auto text-2xl text-slate-700 p-1" 
          onClick={()=> setMenuOpen(!menuOpen)}
        >
          {menuOpen? <FaTimes/> : <FaBars/>}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-14 left-0 w-full bg-white shadow-lg p-4 space-y-1"> 
          <a href="/" className="cursor-pointer">
          <img
            src={pramishaLogo}
            alt="Pramisha Logo"
            className="w-30 h-10 object-contain"
          />
        </a>

        <div className="flex items-center gap-3 px-4 py-2.5">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="cursor-pointer text-sm text-gray-300 transition hover:text-[#c9a6b2]"
            >
              {item.name}
            </a>
          ))}
        </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;