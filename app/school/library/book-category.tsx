import Image from "next/image";
import React from "react";

type BookType = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  author: string;
  url: string;
};

const BookCategory = ({ book }: { book: BookType }) => {
  console.log(book);
  return (
    <div className="relative bg-white p-2 rounded-md shadow-md w-full">
      <button className="absolute top-0 right-0 bg-slate-100 m-6 text-black text-lg font-bold px-2 py-1 rounded-md">hello</button>
      <div className="w-full mb-1">
        <Image
          src='/icons/bgIcon.jpg'
          alt="Image 1"
          width={100}
          height={6}
          className="w-full bg-slate-100 "
        />
      </div>
      <div>
        <h2 className="font-semibold mb-2">{book.title}</h2>
        <p className="text-gray-600 text-sm">{book.subtitle}</p>
      </div>
    </div>
  );
};

export default BookCategory;