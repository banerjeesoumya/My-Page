import { AboutMe } from "@/components/AboutMe";
import { Footer } from "@/components/Footer";
import { Landing } from "@/components/Landing";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Socials } from "@/components/Socials";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto dark">
      <div className="max-w-7xl w-full">
        <Navbar />
        <div id="home">
          <Landing />
        </div>
        <div id="about">
          <AboutMe />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="techstack">
          <TechStack />
        </div>
        <div id="connect">
          <Socials />
        </div>
        <Footer />
      </div>
    </main>
  );
}
