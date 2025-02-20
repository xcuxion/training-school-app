import React, { ReactNode } from 'react'
import Sidebar from './sidebar'
import MobileNav from './mobile-nav'

const layout = ({children}: {children:ReactNode}) => {
  return (
    <div className='w-full flex flex-row gap-x-4 bg-black font-normal'>
        <Sidebar/>
        <MobileNav/>
          {children} 
    </div>
  )
}

export default layout