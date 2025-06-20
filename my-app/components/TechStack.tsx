"use client";
import React, { useState } from "react";
import { techs } from "@/lib/data/tech-stack";
import Image from "next/image";

const getIconUrl = (tech: string) => `https://cdn.simpleicons.org/${tech}/fff`;

const TechStack: React.FC = () => {
  // Track which icons failed to load
  const [failedIcons, setFailedIcons] = useState<Record<string, boolean>>({});

  return (
    <section id="techstack" className="w-full max-w-5xl mx-auto mt-8 md:mt-12 mb-8 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
        {techs.map((tech) => (
          failedIcons[tech] ? null : (
            <div
              key={tech}
              className="flex items-center gap-2 bg-black/70 border border-neutral-700 rounded-xl px-4 py-2 text-white text-base font-medium shadow-sm min-w-0"
            >
              <Image
                src={getIconUrl(tech)}
                alt={tech}
                width={28}
                height={28}
                className="inline-block flex-shrink-0"
                onError={() => setFailedIcons((prev) => ({ ...prev, [tech]: true }))}
                unoptimized
              />
              <span className="capitalize break-words min-w-0 truncate block">
                {tech.replace(/dotjs$/, ".js").replace(/_/g, " ")}
              </span>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default TechStack; 