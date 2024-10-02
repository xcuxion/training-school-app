import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full min-h-screen bg-tw-primary text-tw-text'>
      {children}
    </div>
  )
}

export default layout
