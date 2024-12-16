import Image from 'next/image'
import React from 'react'

type BookType = {
  id: string
  title: string
  subtitle: string
  image: string
  author: string
  url: string
  }
const BookCategory = ({book}:{book:BookType}) => {
  
  console.log(book);
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full flex">
      <div className="w-1/2 h-full">
        <Image
          src="/icons/bgIcon.jpg"
          alt="Image 1"
          width={82}
          height={16}
          className="w-full"
        />
      </div>
      <div className="w-1/2">
        <h2 className="font-semibold mb-2">{book.title}</h2>
        <p className="text-gray-600">{book.subtitle}</p>
      </div>
    </div>
  )
}

export default BookCategory