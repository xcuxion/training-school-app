import React, { ReactNode } from 'react'
import Sidebar from './sidebar'

const layout = ({children}: {children:ReactNode}) => {
  return (
    <div className='w-full flex flex-row gap-x-4 bg-white'>
        <Sidebar/>
          {children} 
    </div>
  )
}

export default layout