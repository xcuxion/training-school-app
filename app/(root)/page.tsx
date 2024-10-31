import Header from '@/components/portfolio/Header'
import Hero from '@/components/portfolio/Hero'
import Modules from '@/components/portfolio/Modules'
import Partners from '@/components/portfolio/Partners'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <Header/>
      <Hero/>
      <div className='bg-secondary-light rounded-xl'>
        <Modules/>
        <Partners/>
      </div>
      
    </div>
  )
}

export default page
