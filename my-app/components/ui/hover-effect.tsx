import { cn } from "@/lib/utils";
import { IconBrandGithub } from "@tabler/icons-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number;
    img: string;
    title: string;
    description: string;
    liveLink: string;
    githubLink: string;
    iconLists: string[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid gap-6",
        "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-4 lg:min-h-[32.5rem] h-auto flex sm:w-96 w-[90vw]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage img={item.img} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                <CardIcons icons={item.iconLists} />
              </div>
              <div className="flex-justify-center items-center">
                <CardButtons link={item.githubLink} label="Github "/>
              </div>
            </div>
            <div>
              <CardButtons link={item.liveLink} label="Live" />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-between rounded-2xl sm:w-96 lg:h-[32.5rem] h-auto w-[90vw] p-6 bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700",
        className
      )}
    >
      <div className="relative flex flex-col justify-center items-center text-center gap-4">
        {children}
      </div>
    </div>
  );
};

export const CardImage = ({
  img,
  className,
}: {
  img: string;
  className?: string;
}) => {
  const defaultIcon = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Logo_of_Github.jpg";

  return (
    <div className={cn("w-full flex justify-center mb-4", className)}>
      <img
        src={img || defaultIcon}
        alt="Card Image"
        className="relative w-full h-full overflow-hidden lg:rounded-3xl"/>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold lg:text-2xl md:text-xl text-base line-clamp-1", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-zinc-400 lg:text-md lg:font-normal font-light text-sm line-clamp-3 tracking-wide leading-relaxed mt-4",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardIcons = ({
  icons,
  className,
}: {
  icons: string[];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex justify-center items-center",
        className
      )}
    >
      {icons.map((icon, idx) => (
        <div key={icon} className="w-8 h-8 border border-white/[0.2] rounded-full bg-black-100 lg:w-10 lg:h-10 flex justify-center items-center" style={{
          transform: `translateX(-${5 * idx * 2}px)`
        }}>
          <img
          key={idx}
          src={icon}
          alt={`Icon ${idx + 1}`}
          className="p-2"/>
        </div>
      ))}
    </div>
  );
};

export const CardButtons = ({
  link,
  label,
  className,
}: {
  link: string;
  label: string;
  className?: string;
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "px-4 py-2 flex lg:text-xl md:text-xs text-sm bg-cyan-500 text-purple rounded-lg hover:bg-cyan-600 transition",
        className
      )}
    >
      <IconBrandGithub />
      {label}
    </a>
  );
};
