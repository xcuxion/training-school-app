import React, { ReactNode } from 'react'
import Sidebar from './sidebar'

const layout = ({children}: {children:ReactNode}) => {
  return (
    <div>
        <Sidebar/>
        {children}
    </div>
  )
}

export default layout