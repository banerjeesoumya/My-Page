"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";

export function Landing() {
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
        className="min-h-screen flex flex-col"
      >
        {/* Navbar at the top */}
        <header className="w-full">
          <Navbar />
        </header>

        {/* Hero section centered */}
        <main className="flex-grow flex items-center justify-center">
          <Hero />
        </main>
      </motion.div>
    </AuroraBackground>
  );
}