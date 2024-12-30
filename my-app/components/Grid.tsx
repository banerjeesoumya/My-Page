import React from "react";
import {
  IconCookieFilled,
  IconSchool,
  IconUser,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function Grid() {
  return (
    <div className="">
        <div className="flex justify-center text-white items-center w-full text-3xl mt-4 mb-4 font-bold">
            <h1>About Me</h1>
        </div>
        <BentoGrid className="mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    </div>
  );
}
const items = [
  {
    title: "Who Am I",
    description: "Hey There! I am Soumya Banerjee. A 21-year-old aspiring Software Engineer from India. I'm deeply committed to creating meaningful and innovative products through the power of software development. Currently, I'm seeking Summer Internship opportunities for 2025.",
 
    icon: <IconUser className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "What Do I Do",
    description: "I am currently in my 3rd year pursuing B.Tech in Computer Science and Engineering from KIIT Deemed to be University.With each passing day, I thrive on to the excitement of learning and exploring new things. I actively engage myself in exploring new technologies and opportunities. I always dedicate myself to learn new skills; currently, I am focusing and mastering on Data Structures and Algorithms while also exploring and working on projects.",
 
    icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Leisures",
    description: "In my leisure time, I enjoy watching movies, web-series, listening to music and watching football. Also am a percussionist, trained in Indian Classical Music.",
 
    icon: <IconCookieFilled className="h-4 w-4 text-neutral-500" />,
  },
];
