"use client";

import { IconCode } from "@tabler/icons-react";
import React from "react";
import { HoverEffect } from "./ui/hover-effect";
import { projects } from "@/lib/data";

export const Projects = () => {
  return (
    <div className="py-20">
      {/* Section Title */}
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold text-white">
          <span className="text-cyan-500 flex items-center gap-2">
            Projects <IconCode size={36} />
          </span>
        </h1>
      </div>

      <div className="max-w-full mx-auto px-1">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

// Sample Projects
