import React from "react";
import { socials } from "@/lib/data/index";
import Image from "next/image";

const Connect: React.FC = () => {
  return (
    <section id="connect" className="w-full max-w-5xl mx-auto mt-8 md:mt-12 mb-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Connect</h2>
      <div className="flex flex-wrap gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black/70 border border-neutral-700 rounded-lg px-3 py-2 hover:bg-neutral-800 transition"
          >
            <Image src={social.icon} alt={social.name} width={24} height={24} />
            <span className="text-white text-sm">{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Connect; 