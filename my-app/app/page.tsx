import { AboutMe } from "@/components/AboutMe";
import { Landing } from "@/components/Landing";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto dark">
      <div className="max-w-7xl w-full">
        <Navbar />
        <Landing />
        <AboutMe />
        <Projects />
        <TechStack />
      </div>
    </main>
  );
}
