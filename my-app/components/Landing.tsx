"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { TextGenerateEffect } from "./ui/text-generateEffect";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { ShimmerButton } from "./ui/ShimmerButton";

export function Landing() {
  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute flex flex-col gap-4 items-center justify-center px-4" 
      >
      </motion.div>
      <div className="text-3xl md:text-7xl font-bold dark:text-white text-center mb-6">
        <TextGenerateEffect
          className="text-center-[40px] md:text-5xl lg:text-6xl"
          words="Serene in thought, building beyond the code"
        />
      </div>
      <p className="text-center text-white md:tracking-wider mb-8 text-normal md:text-lg lg:text-2xl">
        Hi I&apos;m Soumya Banerjee, an Aspiring Software Developer
      </p>
      <a className="flex justify-center mb-0" href="#projects" onClick={handleScrollToProjects}>
        <ShimmerButton
          title="Show My Work"
          position="left"
          icon={<FaGithub />}
        />
      </a>
    </AuroraBackground>
  );
}
