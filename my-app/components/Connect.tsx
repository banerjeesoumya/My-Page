import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const connectItems = [
  {
    icon: <MdMail className="w-7 h-7 text-white" />,
    label: "banerjeesoumya@gmail.com",
    link: "mailto:banerjeerik03@gmail.com",
    display: "banerjeerik03@gmail.com",
  },
  {
    icon: <FaLinkedin className="w-7 h-7 text-white" />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/banerjee-soumya/",
    display: "banerjeesoumya",
  },
  {
    icon: <FaXTwitter className="w-7 h-7 text-white" />,
    label: "Twitter",
    link: "https://x.com/drk_sunshne",
    display: "@drk_sunshne",
  },
  {
    icon: <FaGithub className="w-7 h-7 text-white" />,
    label: "GitHub",
    link: "https://github.com/banerjeesoumya",
    display: "@banerjeesoumya",
  },
  {
    icon: <FaInstagram className="w-7 h-7 text-white" />,
    label: "Instagram",
    link: "https://www.instagram.com/omnipresent_species/",
    display: "@omnipresent_species",
  },
];

const Connect: React.FC = () => {
  return (
    <section id="contact" className="w-full max-w-5xl mx-auto mt-8 md:mt-12 mb-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Connect</h2>
      <div className="flex flex-col gap-4">
        {connectItems.map((item) => (
          <a
            key={item.label}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
            aria-label={item.label}
          >
            <span className="w-8 flex justify-center items-center">{item.icon}</span>
            <span className="text-white text-lg font-normal">{item.display}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Connect; 