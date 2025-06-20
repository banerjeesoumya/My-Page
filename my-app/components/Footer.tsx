"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full py-4 px-4 flex flex-col md:flex-row items-center justify-between bg-transparent overflow-hidden z-10 text-sm">
      {/* Spotlight background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <Spotlight />
      </div>
      <div className="flex flex-col items-start z-10">
        <Link href="#home" className="flex items-center gap-2 text-white font-semibold mb-1">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#fff" fillOpacity="0.05"/><path d="M7.5 12L12 7.5L16.5 12" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 16.5V7.5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <a href="https://soumyabanerjee.tech/#home" className="text-blue-300 bg-gray-800 rounded px-2 py-1 text-xs inline-block">Back to Home</a>
        </Link>
        <span className="text-gray-300 text-xs mb-1">Crafting innovative solutions, one line of code at a time.</span>
      </div>
      <div className="flex flex-col items-end z-10 mt-2 md:mt-0">
        <span className="text-gray-400 text-xs">Soumya © 2025  |  Portfolio. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer; 