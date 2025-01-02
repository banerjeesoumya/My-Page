import { IconCloud } from "./ui/icons-cloud";

export const TechStack = () => {
    return (
      <div className="pt-5">
        <div className="flex justify-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-200 to-gray-400 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-gray-600">
                My Tech Stack
        </span>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative flex h-[500px] w-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-8">
            {/* IconCloud Component */}
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </div>
    );
  };

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "linux",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "mongodb",
    "hono",
    "cloudflare",
    "tailwindcss",
    "flask",
    "python",
    "render"
];
