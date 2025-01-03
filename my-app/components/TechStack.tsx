import { techs } from "@/lib/data/tech-stack";
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
            <IconCloud iconSlugs={techs} />
          </div>
        </div>
      </div>
    );
  };

