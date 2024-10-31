import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-16 h-full flex flex-col flex-between'>
      <section className="">
        <Image 
          src="/images/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        
      </section>
      <section className=""></section>
    </div>
  )
}

export default Sidebar