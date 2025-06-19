"use client";

import React from "react";
import { projects } from "@/lib/data/index";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="mt-16 mb-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black/80 border border-neutral-700 rounded-2xl p-6 flex flex-col min-h-[180px] shadow-lg hover:shadow-xl transition-shadow relative"
          >
            <h3 className="text-xl font-bold text-white mb-1 text-left">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-3 text-left">{project.description}</p>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.iconLists.map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon}
                  alt="tech"
                  width={24}
                  height={24}
                  className="inline-block filter grayscale brightness-125"
                />
              ))}
            </div>
            <div className="flex items-center justify-end gap-3 mt-auto absolute bottom-4 right-6">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                  aria-label="Live Link"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                  aria-label="GitHub Link"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Sample Projects
