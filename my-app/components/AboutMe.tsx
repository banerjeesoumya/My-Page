import React from "react";
import { Cards } from "./Cards";

export function AboutMe() {
  return (
    <div>
      <div className="flex justify-center text-white items-center w-full text-3xl mt-4 mb-4 font-bold">
        <h1>About Me</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 place-items-center">
        <Cards 
          title="Story"
          description="I'm Soumya Banerjee, a 21-year-old aspiring Software Engineer from India, passionate about building impactful software products. I'm currently seeking Summer Internship opportunities for 2025."
        />

        <Cards 
          title="Journey"
          description="I'm a 3rd-year B.Tech Computer Science student at KIIT, passionate about learning new technologies, mastering Data Structures and Algorithms, and actively working on projects."
        />

        <div className="sm:col-span-full sm:flex sm:justify-center lg:col-span-1">
          <Cards 
            title="Leisures"
            description="In my leisure time, I enjoy watching movies, web-series, listening to music and watching football. Also am a percussionist, trained in Indian Classical Music."
          />
        </div>
      </div>
    </div>
  );
}

// const items = [
//   {
//     title: "Who Am I",
//     description: "Hey There! I am Soumya Banerjee. A 21-year-old aspiring Software Engineer from India. I'm deeply committed to creating meaningful and innovative products through the power of software development. Currently, I'm seeking Summer Internship opportunities for 2025.",
 
//     icon: <IconUser className="h-6 w-6 text-neutral-500" />,
//   },
//   {
//     title: "What Do I Do",
//     description: "I am currently in my 3rd year pursuing B.Tech in Computer Science and Engineering from KIIT Deemed to be University.With each passing day, I thrive on to the excitement of learning and exploring new things. I actively engage myself in exploring new technologies and opportunities. I always dedicate myself to learn new skills; currently, I am focusing and mastering on Data Structures and Algorithms while also exploring and working on projects.",
 
//     icon: <IconSchool className="h-6 w-6 text-neutral-500" />,
//   },
//   {
//     title: "Leisures",
//     description: "In my leisure time, I enjoy watching movies, web-series, listening to music and watching football. Also am a percussionist, trained in Indian Classical Music.",
 
//     icon: <IconCookieFilled className="h-6 w-6 text-neutral-500" />,
//   },
// ];
