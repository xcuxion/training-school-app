import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='w-full h-screen flex flex-center'>
      <Image src="/icons/loading-circle.svg" alt="" width={30} height={30} />
    </div>
  )
}

export default Loader