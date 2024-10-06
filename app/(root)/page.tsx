import Header from '@/components/portfolio/Header'
import Hero from '@/components/portfolio/Hero'
import LevelCard from '@/components/portfolio/LevelCard'
import Level from '@/components/portfolio/Levels'
import React from 'react'

const page = () => {
  return (
    <div className='px-10 py-5'>
      <Header/>
      <Hero/>
      <Level/>
    </div>
  )
}

export default page
