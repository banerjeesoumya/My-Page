import { cn } from "@/lib/utils";
import { IconBrandGithub, IconBrandSuperhuman } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <div className="pt-5">
      <footer
        className={cn(
          "bg-gray-900 text-white py-8 px-4",
          "flex flex-col md:flex-row items-center justify-between"
        )}
      >
        {/* Left Section: Hero Icon and Tagline */}
        <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
          <a href="#home" className="flex items-center gap-2 hover:text-cyan-400 transition">
            <IconBrandSuperhuman size={48} />
            <span className="text-sm">Back to Home</span>
          </a>
          <p className="text-sm text-gray-400 pt-2">
            Crafting innovative solutions, one line of code at a time.
          </p>
        </div>


        <div className="mb-6 md:mb-0 text-center">
          <a
            href="https://github.com/banerjeesoumya/My-Page"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-cyan-400 transition"
          >
            <IconBrandGithub size={24} />
            Peek into the Codebase on GitHub
          </a>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm text-gray-400">
            Crafted with ❤️ and ☕ by Soumya Banerjee.
          </p>
          <p className="text-xs text-gray-500 pt-2">
            Thank you for visiting my portfolio!
          </p>
        </div>
      </footer>
    </div>
  );
};
