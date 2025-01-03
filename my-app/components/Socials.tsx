import { cn } from '@/lib/utils';
import React from 'react';
import { Marquee } from './ui/moving-cards';
import Image from 'next/image';
import { socials } from '@/lib/data/socials';


const firstRow = socials.slice(0, socials.length);
const secondRow = socials.slice(socials.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
  redirectTo,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  redirectTo: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 shadow-lg",
        "border-gray-300 bg-gray-100 hover:bg-gray-200",
        "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700",
        "transition-opacity duration-500 opacity-90 hover:opacity-100"
      )}
    >
      <a href={redirectTo} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row items-center gap-2">
          <Image
            className="rounded-full"
            width="32"
            height="32"
            alt="social-icon"
            src={img}
          />
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
            <p className="text-xs font-medium dark:text-white/60">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm dark:text-gray-300">{body}</blockquote>
      </a>
    </figure>
  );
};

export const Socials = () => {
  return (
    <div>
      <div className="flex justify-center text-white items-center w-full text-3xl mt-4 mb-4 font-bold">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-200 to-gray-400 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-gray-600">
          My Socials
        </span>
      </div>

      <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black-100 md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          <div className="flex justify-start gap-4">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </div>
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          <div className="flex justify-start gap-4">
            {secondRow.map((socials) => (
              <ReviewCard key={socials.username} {...socials} />
            ))}
          </div>
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black-100 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black-100 to-transparent"></div>
      </div>
    </div>
  );
};
