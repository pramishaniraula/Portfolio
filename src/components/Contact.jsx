import { useForm } from "@formspree/react";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

function Contact() {
  const [state, handleSubmit] = useForm("xoealnbr");
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/pramishaniraula",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/pramisha_niraula/?hl=en-in",
    },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/pra.mi.sha93",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/pramisha-niraula-4151a931b/",
    },
  ];

  return (
    <section id="contact" className="section">
    <div className="mx-auto max-w-6xl">
      <hr className="glow-hr" />
        <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#f7b2d9]">Contact Me</h2>
          <p className="text-gray-300 mb-8">
            I’d love to connect, collaborate, or just chat about creative ideas.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3 text-[#f7b2d9]">
              ✉️ <span className="text-gray-200">pramisha.niraula24@apexcollege.edu.np</span>
            </p>
            <p className="flex items-center gap-3 text-[#f7b2d9]">
              📞 <span className="text-gray-200">+977 9861007396</span>
            </p>
          </div>

          {/* social links */}
          <div className="mt-10 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#6d5961] px-5 py-3 text-sm font-medium text-gray-200 transition hover:border-[#f7b2d9] hover:bg-[#2a2026] hover:text-[#f7b2d9]"
              >
                {social.icon}
                {social.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Section*/}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text" name="name"
            placeholder="Your Name"
            className="w-full rounded-lg bg-[#2a1e25] px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7b2d9]"
          />
          <input
            type="email" name="email"
            placeholder="Your Email"
            className="w-full rounded-lg bg-[#2a1e25] px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7b2d9]"
          />
          <textarea name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full rounded-lg bg-[#2a1e25] px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f7b2d9]"
          ></textarea>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full cursor-pointer bg-[#f7b2d9] text-[#1a1216] font-semibold py-3 rounded-lg hover:bg-[#ff9dcf] transition"
          >
            {state.submitting ? "Sending..." : "Submit"}
          </button>
          {state.succeeded && (
            <p className="mt-4 text-center text-[#f7b2d9]">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </div>
    </section>
  );
}

export default Contact;
