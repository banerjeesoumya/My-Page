import React from 'react'
import { EvervaultCard } from './ui/evervault';

export const Cards = ({
    title,
    description
  }: {
    title?: string;
    description?: string
  }) => {
  return (
    <div className="flex flex-col items-start max-w-sm p-4 relative h-[20rem] sm:h-[25rem] md:h-[30rem]">
        {/* <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
   */}
        <EvervaultCard text={title} />
  
        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          {description}
        </h2>
      </div>
  )
}
