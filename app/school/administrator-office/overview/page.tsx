import FaciltatorCard from '@/components/admin/faciltator-card'
import HighlightCard from '@/components/admin/highlight-card'
import ModuleCard from '@/components/admin/module-card'
import React from 'react'



const highlights = [
  {
    title: 'Pending Admission',
    rate: '24',
    link: {
      href: '/school/administrator-office/admission',
      label: 'Admission portal'
    }
  },
  {
    title: 'Total Wrights',
    rate: '240',
  },
  {
    title: 'Outstanding Balance',
    rate: '3000',
  },
]

const modules = [
  {
    title: 'Foundations of Techpreneurship',
    facilitator: 'Bayat Osman',
    image: '/images/techpreneur.png'
  },
  {
    title: 'Product Management',
    facilitator: 'Peter Jonah',
    image: '/images/pm.png'
  },
  {
    title: 'Software Engineering',
    facilitator: 'Samuel Inkoom',
    image: '/images/se.png'
  },
  {
    title: 'Marketing & Strategy',
    facilitator: 'Solomon Ayisi',
    image: '/images/market-strategy.png'
  },
]

const facilitators = [
  {
    name: 'Musah Iddrisu',
    image: '/images/react.jpg',
    course: 'Web Development Concepts',
    email: 'mussah.id@gmail.com'
  },
  {
    name: 'Mansah Barnes',
    image: '/images/python.jpg',
    course: 'UI/UX Designing',
    email: 'mbarnes@gmail.com'
  },
  {
    name: 'Caleb Darkwah',
    image: '/images/marketing.jpg',
    course: 'Marketing',
    email: 'callydark.id@gmail.com'
  },
]

const page = () => {
  return (
    <div className='w-full flex md:flex-row flex-col md:gap-x-4 gap-y-4 md:gap-y-0'>
      <div className="md:w-2/3 space-y-6">
        <section className="grid md:grid-cols-3 md:gap-x-10 md:gap-y-0 gap-y-4 ">
          {
            highlights.map((data, index)=>(
              <HighlightCard {...data} key={index}/>
            ))
          }
        </section>
        <section className="bg-secondary rounded-lg w-full min-h-80 p-2">
          <h1 className="text-lg font-semibold">Module Management</h1>
          <div className="space-y-4">
            {
              modules.map((data, index)=>(
                <ModuleCard {...data} key={index}/>
              ))
            }
          </div>
        </section>
      </div>
      <div className="md:w-1/3 bg-secondary rounded-t-lg min-h-80 p-2">
        <h1 className="text-lg font-semibold">Facilitators</h1>
        <section className="space-y-4">
          {
            facilitators.map((data, index)=>(
              <FaciltatorCard {...data} key={index}/>
            ))
          }
        </section>
      </div>
    </div>
  )
}

export default page