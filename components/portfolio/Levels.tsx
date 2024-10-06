import React from 'react'
import LevelCard, { LevelCardProps } from './LevelCard'
import { emojis } from '@/constants'

const TWLevels:LevelCardProps[] = [
  {
    title: `Level One: The Dojo ${emojis.medal}`,
    description: `Master the fundamentals of software 
engineering and entrepreneurship. Here, 
sensei level experts guide you through the 
basics of coding, design thinking, and business 
acumen.`,
    primaryButtonText: `Join now!`,
    primaryButtonLink: ``,
    secondaryButtonLink: '',
    secondaryButtonText: 'Explore program',
    isDojo:true
  },
  {
    title: `Level Two: The Guild ${emojis.shield}`,
    description: `Put your skills to the test in real world quests. 
Work on industry standard projects, 
collaborate with fellow guild members, and 
level up your abilities.`,
    secondaryButtonText: ``,
    secondaryButtonLink: ``,
  },
  {
    title: `Level Three: The Incubator ${emojis.gem}`,
    description: `Enter the sacred halls where startup dreams 
are forged into reality. Receive guidance from 
legendary mentors, access exclusive resources, 
and craft your unicorn.`,
    secondaryButtonText: ``,
    secondaryButtonLink: ``,
  },
]

const Levels = () => {
  return (
    <div className='w-full h-[40vh] bg-color-light rounded-3xl flex gap-5 p-5 items-center justify-around'>
      {
        TWLevels.map((level, index) => (
          <LevelCard 
            description={level.description}
            title={level.title}
            key={index}
            primaryButtonLink={level.primaryButtonLink}
            primaryButtonText={level.primaryButtonText}
            secondaryButtonLink={level.secondaryButtonLink}
            secondaryButtonText={level.secondaryButtonText}
            isDojo={level.isDojo}
          />
        ))
      }
    </div>
  )
}

export default Levels
