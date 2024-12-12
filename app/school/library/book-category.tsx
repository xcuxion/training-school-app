import Image from 'next/image'
import React from 'react'

const BookCategory = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full flex">
      <div className="w-1/2 h-full">
        <Image
          src="/icons/bgIcon.jpg"
          alt="Image 1"
          width={32}
          height={16}
          className="w-full"
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-lg font-semibold">books</h2>
        <p className="text-gray-600">book description</p>
      </div>
    </div>
  )
}

export default BookCategory