import Image from 'next/image'
import React from 'react'

type TFacilitator = {
  image: string
  name: string
}

interface SessionCardProps {
  image: string
  title: string
  description: string
  facilitator: TFacilitator
}

const SessionCard = ({image, title, description, facilitator}: SessionCardProps) => {
  return (
    <div className=''>
      <Image src={image} alt='cover image' width={250} height={150} className='w-[] h-[] object-cover' />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="">{description}</p>

      <div className="">
        <Image src={facilitator.image} alt='facilitator image' width={30} height={30} className='rounded-full w-7 h-7 object-cover'/>
        <span>{facilitator.name}</span>
      </div>
    </div>
  )
}

export default SessionCard