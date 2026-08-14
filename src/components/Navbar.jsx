import pramishaLogo from "../assets/logo.png";
function Navbar() {
  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#3b2d34] bg-[#1a151d]">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4">

        {/* Logo */}
        <a href="www.pramishaniraula.com.np" className="cursor-pointer">
          <img
            src={pramishaLogo} // import your logo at the top: 
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

      </div>
    </nav>
  );
}

export default Navbar;