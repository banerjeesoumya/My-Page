import React from "react";
import Image from "next/image";
import { FaXTwitter, FaGithub, FaLinkedin, FaBuilding, FaLaptopCode } from "react-icons/fa6";
// import GitHubCalendar from "react-github-calendar";
import GithubCalender from "@/components/ui/github-calendar";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconCode, IconMail } from "@tabler/icons-react";

// Experience type for future extensibility
interface Experience {
  company: string;
  location?: string;
  role: string;
  period: string;
}

const experiences: Experience[] = [
    {
    company: "Accenture",
    location: "India",
    role: "ASE Summer Intern",
    period: "May 2025 - July 2025",
  },
];

const dockItems = [
  { title: "Home", icon: <IconHome className="w-6 h-6" />, href: "#" },
  { title: "Projects", icon: <FaLaptopCode className="w-6 h-6" />, href: "#projects" },
  { title: "Tech Stack", icon: <IconCode className="w-6 h-6" />, href: "#techstack" },
  { title: "Contact", icon: <IconMail className="w-6 h-6" />, href: "#contact" },
];

export const ProfileSection: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row min-h-[70vh] w-full max-w-5xl mx-auto">
      {/* Floating Dock Navbar */}
      <FloatingDock items={dockItems} />
      {/* Sidebar */}
      <aside className="flex flex-col items-center md:items-start self-stretch py-8 px-2 min-w-[150px] gap-0 w-full md:w-auto">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-700 mb-6 mx-auto md:mx-0">
          <Image src="/assets/Self1.jpg" alt="Avatar" width={80} height={80} />
        </div>
        <nav className="flex flex-col gap-2 text-base font-medium text-white mb-6 items-center md:items-start">
          <a href="#" className="text-white">Home</a>
          <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
        </nav>
        {/* Experience Section */}
        <div className="w-full flex flex-col gap-2 mb-6 items-center md:items-start">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col gap-0.5 mb-2 items-center md:items-start">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <FaBuilding className="w-4 h-4 text-gray-400" />
                <span className="font-medium text-white">
                  {exp.company}
                  {exp.location ? `, ${exp.location}` : ""}
                </span>
              </div>
              <div className="text-[11px] text-gray-400 ml-0 md:ml-6">
                {exp.role} <span className="text-gray-500">|</span> {exp.period}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 mb-2 justify-center md:justify-start w-full">
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X">
            <FaXTwitter className="w-6 h-6 text-white hover:text-gray-400" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 text-white hover:text-gray-400" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 text-white hover:text-gray-400" />
          </a>
        </div>
      </aside>
      {/* Main Content */}
      <section className="flex-1 flex flex-col justify-start px-4 md:px-8 py-8 mt-4 md:mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">Soumya</h1>
        {/* Highlighted line */}
        <div className="mb-4">
          <span className="block text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            &quot;Serene in thought, building beyond the code&quot;
          </span>
        </div>
        <p className="text-base md:text-lg text-white mb-8 max-w-2xl">
          Driven by curiosity and a passion for elegant solutions, I strive to craft digital experiences that go beyond functionality—blending creativity, logic, and a touch of serenity into every line of code.
        </p>
        {/* Dynamic GitHub Contribution Graph */}
        <div className="mt-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          <div className="min-w-[500px]">
            <GithubCalender />
          </div>
        </div>
      </section>
    </div>
  );
}; 