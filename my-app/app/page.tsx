import { ProfileSection } from "@/components/ProfileSection";
import { ProjectsSection } from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Connect from "@/components/Connect";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto">
      <ProfileSection />
      {/* My Work Section */}
      <div className="w-full max-w-5xl mx-auto mt-0">
        <ProjectsSection />
      </div>
      {/* Stack Section */}
      <TechStack />
      {/* Achievements Section (placeholder) */}
      <section id="achievements" className="w-full max-w-5xl mx-auto mt-8 md:mt-12 mb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Achievements</h2>
        <ul className="space-y-2">
          <li className="text-gray-300 text-sm">🏆 Example Achievement 1</li>
          <li className="text-gray-300 text-sm">🏆 Example Achievement 2</li>
          <li className="text-gray-300 text-sm">🏆 Example Achievement 3</li>
        </ul>
      </section>
      {/* Connect Section */}
      <Connect />
      {/* Footer */}
      <footer className="w-full text-center text-gray-500 text-xs py-6 border-t border-neutral-800 mt-8">
        Soumya © {new Date().getFullYear()} &nbsp;|&nbsp; Portfolio. All rights reserved.
      </footer>
    </main>
  );
}
