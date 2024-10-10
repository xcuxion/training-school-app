import React from 'react'
import SectionHeader from './SectionHeader'
import ModuleCard from './ModuleCard'
import { emojis } from '@/constants'

const modules = [
    {
        title: 'Foundations of Software Engineering & Entrepreneurship',
        description: 'Introduces core software engineering principles and entrepreneurial thinking, focusing on problem solving, the software development lifecycle, and identifying tech driven business opportunities',
        image: '/images/hero-image.png',
        facilitator: 'John Doe'
    },
    {
        title: 'Programming With Python & Javascript',
        description: 'Introduces the fundamental concepts of programming using Python and JavaScript, emphasizing problem-solving and algorithmic thinking',
        image: '/images/hero-image.png',
        facilitator: 'Jane Doe'
    },
    {
        title: 'System Design &  Analysis With UI/UX Design',
        description: 'Introduces the fundamental concepts of system analysis and design, emphasizing the importance of understanding user requirements and designing effective systems to meet those needs',
        image: '/images/hero-image.png',
        facilitator: 'John Smith'
    },
    {
        title: 'Project Management Essentials With Jira',
        description: 'Introduces the fundamental concepts of project management, including project planning, execution, and evaluation, emphasizing the importance of effective project management in achieving business goals',
        image: '/images/hero-image.png',
        facilitator: 'Jane Smith'
    },
    {
        title: 'Full Stack Web Application Development',
        description: 'Introduces the fundamental concepts of full stack web application development, emphasizing the importance of understanding user requirements and designing effective systems to meet those needs',
        image: '/images/hero-image.png',
        facilitator: 'John Doe'
    },
    {
        title: 'Business Skills Needed By Techpreneurs',
        description: 'Develops core business skills in crafting compelling presentations and secure buy in, designing sustainable business and revenue models, and analyzing market trends to identify opportunities',
        image: '/images/hero-image.png',
        facilitator: 'Jane Doe'
    }
]

const Modules = () => {
  return (
    <div className='px-10'>
      <SectionHeader title={`our curated curriculum significantly 
boosts your xP in no time ${emojis.meditation}`} description='Our modules are designed to provide a comprehensive and engaging learning experience.' highlight='boosts your xP in no time' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {modules.map((module, index) => (
          <ModuleCard key={index} {...module} />
        ))}
      </div>
    </div>
  )
}

export default Modules
