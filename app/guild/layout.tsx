import React, { ReactNode } from 'react'
import Sidebar from './sidebar'
import Header from './header'

export const layout = ({children}: {children:ReactNode}) => {
  return (
    <div className='w-full min-h-screen flex'>
        <Sidebar/>
        <main className='h-full'>
            <Header/>
            {children}
        </main>
    </div>
  )
}
