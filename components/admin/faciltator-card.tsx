import Image from 'next/image'
import React from 'react'

interface IFacilitatorCard {
    image: string
    name: string
    email: string
    course: string
}

const FaciltatorCard = ({image, email, name, course}: IFacilitatorCard) => {
  return (
    <div className='h-[100px] flex items-center space-x-4 bg-brand-light p-2'>
        <Image src={image} alt='facilitator image' width={65} height={75} className='rounded-md'/>
        <span className="">
            <h1 className="text-lg font-medium">{name}</h1>
            <p className="text-base">{course}</p>
            <p className="text-sm">{email}</p>
        </span> 
    </div>
  )
}

export default FaciltatorCard