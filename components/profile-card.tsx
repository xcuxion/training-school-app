import Image from 'next/image'
import React from 'react'

interface IUserProfile {
  name: string
  image: string
  
}

const ProfileCard = () => {
  return (
    <div className='w-full h-[250px] bg-school-neutral flex flex-col flex-center'>
        <Image src={'/images/jess.jpeg'} alt='' width={100} height={100} className='rounded-full object-cover' />
        <h3 className="text-xl font-medium">Jessica Baze</h3>
        <p>Aspiring Software Developer</p>
    </div>
  )
}

export default ProfileCard