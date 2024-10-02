import FacilitatorSection from '@/components/tw/FaciltatorSection'
import Header from '@/components/tw/Header'
import HeroSection from '@/components/tw/HeroSection'
import TrainingCenterSection from '@/components/tw/TrainingCenterSection'
import Curriculum from '@/components/tw/Curriculum'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '@/components/tw/Footer'





const facilitators = [
  {
    image: '/images/addy.png',
    name: 'Jessica Addy',
    highlight: 'Hey'
  },
  {
    image: '/images/jj.png',
    name: 'Jessica Jones',
    highlight: 'Hey'
  },
  {
    image: '/images/steph.jpg',
    name: 'Stephanie Opoku-Mensah',
    highlight: 'Hey'
  },
  {
    image: '/images/bayat.jpg',
    name: 'Bayat Osman',
    highlight: 'Hey'
  },
  {
    image: '/images/ned.jpeg',
    name: 'Prince Nedjoh',
    highlight: 'Hey'
  },
]

const page = () => {
  return (
    <main className='w-full bg-tw-primary text-tw-text px-10 py-2'>
      <Header/>
      <HeroSection/>
      <TrainingCenterSection/>
      <Curriculum/>
      <FacilitatorSection/>
      <Footer/>
    </main>
  )
}

export default page