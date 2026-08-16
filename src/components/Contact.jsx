import { useForm } from "@formspree/react";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
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

        <div className="grid gap-12 md:grid-cols-2">

          {/* Left Section */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-[#66735A]">
              Contact Me
            </h2>

            <p className="mb-8 leading-7 text-[#5F6258]">
              I’d love to connect, collaborate, or learn about creative ideas.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-[#C98B6B]">
                ✉️
                <span className="text-[#2F3328]">
                  pramishaniraula93@gmail.com
                </span>
              </p>

              <p className="flex items-center gap-3 text-[#C98B6B]">
                📞
                <span className="text-[#2F3328]">
                  +977 9819773397
                </span>
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#A8B29B] px-5 py-3 text-sm font-medium text-[#2F3328] transition duration-200 hover:border-[#C98B6B] hover:bg-[#F0E4DB] hover:text-[#C98B6B]"
                >
                  {social.icon}
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-[#A8B29B]/70 bg-[#F9F6F0] p-6 shadow-sm md:p-8"
          >
            <div className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-lg border border-[#C9CEC0] bg-[#F4F1EA] px-4 py-3 text-[#2F3328] placeholder-[#85897E] transition focus:border-[#66735A] focus:outline-none focus:ring-2 focus:ring-[#A8B29B]/40"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-lg border border-[#C9CEC0] bg-[#F4F1EA] px-4 py-3 text-[#2F3328] placeholder-[#85897E] transition focus:border-[#66735A] focus:outline-none focus:ring-2 focus:ring-[#A8B29B]/40"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full resize-none rounded-lg border border-[#C9CEC0] bg-[#F4F1EA] px-4 py-3 text-[#2F3328] placeholder-[#85897E] transition focus:border-[#66735A] focus:outline-none focus:ring-2 focus:ring-[#A8B29B]/40"
              ></textarea>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full cursor-pointer rounded-lg bg-[#66735A] py-3 font-semibold text-[#F4F1EA] transition duration-200 hover:bg-[#59644E]"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>

              {state.succeeded && (
                <p className="mt-4 text-center text-sm font-medium text-[#66735A]">
                  Message sent successfully!
                </p>
              )}

            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;