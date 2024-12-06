import React, { ReactNode } from 'react'
import Sidebar from './sidebar'

const layout = ({children}: {children:ReactNode}) => {
  return (
    <div className='w-full inline-flex gap-5 bg-white'>
        <Sidebar/>
        {children}
    </div>
  )
}

export default layout