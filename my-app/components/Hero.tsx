"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { TextGenerateEffect } from "./ui/text-generateEffect";


export function Hero() {
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
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold text-center">
          <TextGenerateEffect className="text-center-[40px] md:text-5xl lg:text-6xl" words="Serene in thought, building beyond the code" />
        </div>
        <p className="text-center text-white md:tracking-wider mb-4 text-normal md:text-lg lg:text-2xl">
            Hi I&apos;m Soumya Banerjee, an Aspiring Software Developer
        </p>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Debug now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}