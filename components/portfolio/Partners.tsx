import React from 'react'
import SectionHeader from './SectionHeader'
import PartnerCard from './PartnerCard'

const partners = [
    {
        name: 'John Doe',
        field: 'Software Development',
        image: '/images/bayat.jpg'
    },
    {
        name: 'Jane Doe',
        field: 'Software Development',
        image: '/images/steph.jpg'
    },
    {
        name: 'John Doe',
        field: 'Software Development',
        image: '/images/bayat.jpg'
    },
    {
        name: 'John Doe',
        field: 'Software Development',
        image: '/images/bayat.jpg'
    },
]

const Partners = () => {
  return (
    <div className='px-10'>
      <SectionHeader title='Connecting you with industry experts for mentorship' description='Our partners are the backbone of our community. They are the ones who make it possible for us to provide the best education to our students.' highlight='industry experts' />
      <div className="flex md:grid-cols-4 gap-4">
        {partners.map((partner, index) => (
            <PartnerCard key={index} name={partner.name} field={partner.field} image={partner.image} />
        ))}
      </div>
    </div>
  )
}

export default Partners
