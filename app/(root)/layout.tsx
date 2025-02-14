import React from 'react'
import Navigator from './portfolio/navigator'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-black'>
      {/* <Navigator/> */}
      {children}
    </div>
  )
}

export default layout
