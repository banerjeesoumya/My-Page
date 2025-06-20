import { ProfileSection } from "@/components/ProfileSection";
import { ProjectsSection } from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Connect from "@/components/Connect";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto">
      <ProfileSection />
      <div className="w-full max-w-5xl mx-auto mt-0">
        <ProjectsSection />
      </div>
      <TechStack />
      <Achievements />
      <Connect />
    </main>
  );
}
