import { Copyright } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-10 p-2 flex flex-between items-center bg-tw-secondary'>
        <span className="">
            Technology Wrights
        </span>
        <span className="flex gap-x-1 items-center">
            <Copyright/>
            Copyright @ {new Date().getFullYear()}
        </span>
    </div>
  )
}

export default Footer
