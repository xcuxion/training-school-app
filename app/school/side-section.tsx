import ProfileCard from '@/components/profile-card'
import TodoSection from '@/components/todo-section'
import Image from 'next/image'
import React from 'react'

const SideSection = () => {
  return (
    <div className='h-screen w-1/3 flex flex-col gap-4 sticky top-0 `u8 right-0'>
        <ProfileCard/>
        <TodoSection/>
        <div>
            <Image src={'/images/tasks.svg'} alt='' width={80} height={80} />
        </div>
    </div>
  )
}

export default SideSection