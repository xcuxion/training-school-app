import { Description } from '@radix-ui/react-toast'
import React from 'react'
import ModuleCard from './ModuleCard'

const modules = [
  {
    title: 'Module 1',
    image: '/next.svg',
    description: 'Software engineering Concepts',
    facilitator: 'Solomon Ayisi'
  },
  {
    title: 'Module 2',
    image: '/next.svg',
    description: 'Programming With Javascript',
    facilitator: 'Yaw Offeh'
  },
  {
    title: 'Module 3',
    image: '/next.svg',
    description: 'Web Technologies & Concepts',
    facilitator: 'Novelta Osei'
  },
  {
    title: 'Module 4',
    image: '/next.svg',
    description: 'Web Systems Developments',
    facilitator: 'Prince Nedjoh'
  },
  {
    title: 'Module 5',
    image: '/next.svg',
    description: 'Mobile Applications Development',
    facilitator: 'Caleb Darkwah'
  },
  {
    title: 'Module 6',
    image: '/next.svg',
    description: 'Desktop Applications Development',
    facilitator: 'Solomon Ayisi'
  },
]

const Curriculum = () => {
  return (
    <div className='h-[80vh] my-5'>
      <section className="flex gap-x-5">
        <h1 className="text-2xl font-semibold w-1/2">
            Our Structured Curriculum Was Designed To Give You 
            The Best Chance Of Success!
        </h1>
        <p className="w-1/2">
            After our 22' Batch, we experimented with various modes of enhancing the learning experience of our 
            participants. This curriculum after numerous trials and error pushed the boundaries of what we thought was possible with 
            our first batch. 
        </p>
      </section>
      <section className='grid grid-cols-3 gap-4'>
        {
          modules.map((module, index)=>(
            <ModuleCard 
              key={index}
              description={module.description}
              image={module.image}
              title={module.title}
              instructor={module.facilitator}
            />
          ))
        }
      </section>
    </div>
  )
}

export default Curriculum
