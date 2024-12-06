import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='w-full h-[300px] bg-school-neutral'>
        <Image src={''} alt='' width={100} height={100} className='' />
        <h3 className="text-lg font-medium">Antwi Kofi Samuel</h3>
    </div>
  )
}

export default ProfileCard