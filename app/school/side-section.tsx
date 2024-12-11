import ProfileCard from '@/components/profile-card'
import TodoSection from '@/components/todo-section'
import Image from 'next/image'
import React from 'react'

const SideSection = ({children}: {children?:React.ReactNode}) => {
  return (
    <div className='h-screen w-1/3 flex flex-col gap-4 sticky top-0 right-0 p-4 '>
      {children}
    </div>
  )
}

export default SideSection