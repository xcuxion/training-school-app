import { emojis } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Levels from './Levels'

const Hero = () => {
  return (
    <section className='px-10'>
      <div className='w-full pt-16 flex flex-start relative'>
        <div className="w-2/3">
          <h1 className="text-6xl font-semibold mb-4 leading-[64px]">
            {emojis.fire} Forging Digital Titans: Crafting the Legends of Tomorrow's Tech
          </h1>
          <p className="text-lg w-4/5">
              At Technology Wrights, we believe every aspiring technologist 
              and entrepreneur has the potential to become a hero in the digital 
              age. Our three tiered adventure is designed to awaken your 
              powers, hone your skills, and launch you into the stratosphere of 
              tech success.
          </p>
        </div>
        <Image src={'/images/hero-image.png'} alt='' width={300} height={300} className=' w-[650px] mb-[-48px] z-[-10]' />
      </div>
      <Levels />
    </section>
  )
}

export default Hero
