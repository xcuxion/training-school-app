import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <main className='min-h-screen flex flex-center w-full bg-gray-100'>
      {children}
    </main>
  )
}

export default layout
