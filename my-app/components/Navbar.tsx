"use client"

import React from "react";

import {
  IconCode,
  IconFileCv,
  IconGizmo,
  IconHome,
  IconTerminal,
  IconUserBolt,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/floatingDock";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "About Me",
      icon: (
        <IconUserBolt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "My Projects",
      icon: (
        <IconTerminal className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "My Tech Stack",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#techstack",
    },
    {
      title: "My Resume",
      icon: (
        <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1xbcmDiIGslJzTzrhhyol8oiUghPz3EgV/view?usp=sharing",
    },

    {
      title: "Socials",
      icon: (
        <IconGizmo className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#connect",
    },
  ];
  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center h-[6rem] w-full">
      <FloatingDock mobileClassName="fixed top-1/2 transform -translate-y-[-1rem] left-4" desktopClassName="fixed top-0 m-3"
        items={links}
      />
    </div>
  );
}
