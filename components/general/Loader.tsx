import React from 'react'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className='flex flex-center w-[40px] h-[40px] bg-black rounded-lg'>
      <Image
        src='/icons/loading-circle.svg'
        alt='Loading'
        width={30}
        height={30}

      />
    </div>
  )
}

export default Loader
