import LevelCard from '@/components/portfolio/LevelCard'
import React from 'react'

const page = () => {
  return (
    <div>
      <LevelCard 
        title='Level 1'
        description='This is the first level'
        primaryButtonText='Start'
        primaryButtonOnClick={async () => {
          "use server"
        }}
      />
    </div>
  )
}

export default page
