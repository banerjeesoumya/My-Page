"use client"

import React from "react";

import {
  IconCode,
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
      title: "Products",
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
      title: "Socials",
      icon: (
        <IconGizmo className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#connect",
    },
  ];
  return (
    <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-center h-[6rem] w-full">
      <FloatingDock 
        items={links}
      />
    </div>
  );
}
