import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='w-full p-4'>
        {children}
    </div>
  )
}

export default layout