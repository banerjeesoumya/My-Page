"use client";

import { IconCode } from "@tabler/icons-react";
import React from "react";
import { HoverEffect } from "./ui/hover-effect";
import { projects } from "@/lib/data";

export const Projects = () => {
  return (
    <div className="py-20">
      {/* Section Title */}
      <div className="flex flex-col items-center mb-10">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-200 to-gray-400 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-gray-600">
          Projects
        </span>
        
        {/* Icon with a simple gray color */}
        <IconCode
          size={56}
          className="mt-2 text-gray-500 dark:text-gray-300"
        />
      </div>

      <div className="max-w-full mx-auto px-1">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

// Sample Projects
