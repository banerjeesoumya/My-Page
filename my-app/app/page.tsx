import { ProfileSection } from "@/components/ProfileSection";
import { ProjectsSection } from "@/components/Projects";
import { stack, blogPosts, socials } from "@/lib/data/index";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto">
      <ProfileSection />
      {/* My Work Section */}
      <div className="w-full max-w-5xl mx-auto mt-2 md:mt-8">
        <ProjectsSection />
      </div>
      {/* Stack Section */}
      <section id="stack" className="w-full max-w-5xl mx-auto mt-8 md:mt-12 mb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stack</h2>
        <div className="flex flex-wrap gap-4 mb-4">
          {stack.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 bg-black/70 border border-neutral-700 rounded-lg px-3 py-2">
              <Image src={tech.icon} alt={tech.name} width={24} height={24} />
              <span className="text-white text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-300 text-sm md:text-base max-w-3xl">
          My Strength is building core web applications which solve problems and are scalable. I&apos;m currently working with Go, Typescript and Devops.
        </p>
      </section>
      {/* Blog Section */}
      <section id="blog" className="w-full max-w-5xl mx-auto mt-8 md:mt-12 mb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Recent Blog posts <span className="text-gray-400 font-normal text-base">• Full archive →</span></h2>
        <ul className="space-y-2">
          {blogPosts.map((post) => (
            <li key={post.title} className="text-gray-300 text-sm">
              <span className="text-gray-400 mr-2">{post.date},</span>
              <a href={post.link} className="hover:underline text-white font-medium">{post.title}</a>
            </li>
          ))}
        </ul>
      </section>
      {/* Connect Section */}
      <section id="connect" className="w-full max-w-5xl mx-auto mt-8 md:mt-12 mb-8 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Connect</h2>
        <div className="flex flex-wrap gap-4">
          {socials.map((social) => (
            <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black/70 border border-neutral-700 rounded-lg px-3 py-2 hover:bg-neutral-800 transition">
              <Image src={social.icon} alt={social.name} width={24} height={24} />
              <span className="text-white text-sm">{social.name}</span>
            </a>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full text-center text-gray-500 text-xs py-6 border-t border-neutral-800 mt-8">
        Soumya © {new Date().getFullYear()} &nbsp;|&nbsp; Portfolio. All rights reserved.
      </footer>
    </main>
  );
}
