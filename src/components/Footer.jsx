import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-6">
      <hr className="glow-hr" />

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 py-8 text-[#6A6E64] sm:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} Pramisha Niraula
        </p>

        <a
          href="#home"
          className="group relative flex cursor-pointer items-center gap-2 py-1 text-sm text-[#66735A] transition-colors hover:text-[#C98B6B]"
        >
          Back to top
          <FaArrowUp size={13} />

          {/* Underline */}
          <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#C98B6B] transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;