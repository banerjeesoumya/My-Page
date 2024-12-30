import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { ShimmerButton } from './ui/ShimmerButton'
import { TextGenerateEffect } from './ui/text-generateEffect'

export const Hero = () => {
  return (
    <div className='relative flex flex-col gap-4 px-4'>
        <div className="text-3xl md:text-7xl font-bold text-center">
          <TextGenerateEffect className="text-center-[40px] md:text-5xl lg:text-6xl" words="Serene in thought, building beyond the code" />
        </div>
        <p className="text-center text-white md:tracking-wider mb-4 text-normal md:text-lg lg:text-2xl">
            Hi I&apos;m Soumya Banerjee, an Aspiring Software Developer
        </p>
        <a className='flex justify-center mb-0' href="#work">
          <ShimmerButton title="Show My Work" position="left" icon={<FaGithub />}/>
        </a>
    </div>
  )
}
