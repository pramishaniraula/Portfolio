import { FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-6">
      <hr className="glow-hr" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 text-gray-400 sm:flex-row py-8">
        <p className="text-sm">
          © {new Date().getFullYear()} Pramisha Niraula
        </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-sm transition hover:text-[#c9a6b2]"
          >
            Back to top
            <FaArrowUp size={13} />
          </a>
      </div>
    </footer>
  );
}

export default Footer;