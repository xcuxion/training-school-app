import ProfileCard from '@/components/profile-card'
import TodoSection from '@/components/todo-section'
import Image from 'next/image'
import React from 'react'

const SideSection = () => {
  return (
    <div className='w-1/3  flex flex-col gap-6'>
        <ProfileCard/>
        <TodoSection/>
        <div>
            <Image src={''} alt='' width={80} height={80} />
        </div>
    </div>
  )
}

export default SideSection