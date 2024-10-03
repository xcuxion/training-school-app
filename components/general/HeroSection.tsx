import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div className="flex flex-between h-[40vh]">
    <section className="flex flex-col justify-between w-2/5 h-2/3">
      <h1 className="text-3xl font-normal mb-3">Accomplish Your Tech Dream With Us, Join Our Cohort Now!</h1>
      <p className="text-base font-medium">
        Unleash your creativity and become a skilled professional contributing to changing the world!
      </p>
    </section>
    <section className="flex flex-col w-1/2 h-2/3 justify-between">
      <p className="text-base ">
        Through our experience working in the tech industry and our carefully constructed 
        curriculum, we will quickly transform you to become the tech pro you dream of. 
        Meet fellow aspirants, work on exciting projects that change the world and become a jewel sought after by big tech corporations.
      </p>
      <div className="flex">
        <Link href={'/become-a-wright'}>
          <Button className='bg-tw-accent font-medium hover:opacity-85 mr-4 rounded-full'>Enroll Now!</Button>
        </Link>
        <Button className='border-2  rounded-full font-medium '>Explore Curriculum</Button>
      </div>
    </section>
  </div>
  )
}

export default HeroSection
