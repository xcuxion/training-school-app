import React from 'react'
import SessionCard from './session-card'

const sessionInfo = {
  image: '/images/tom-shelby.jpg',
  title: 'Software Engineering Fundamentals',
  description: 'The fundamentals of software engineering include the processes, principles, and phases involved in developing software',
  facilitator: {
    image: '/images/bayat.jpg',
    name: 'Bayat Osman'
  }
}

const PastSessionSection = () => {
  return (
    <div className='grid grid-cols-2 gap-x-4 mt-4'>
        <SessionCard {...sessionInfo}/>
        <SessionCard {...sessionInfo}/>
    </div>
  )
}

export default PastSessionSection