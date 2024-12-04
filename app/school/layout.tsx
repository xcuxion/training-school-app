import React, { ReactNode } from 'react'
import Sidebar from './sidebar'

const layout = ({children}: {children:ReactNode}) => {
  return (
    <div className='inline-flex gap-5'>
        <Sidebar/>
        {children}
    </div>
  )
}

export default layout