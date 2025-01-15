import Image from "next/image";
import React from "react";

type BookType = {
  id: string | number;
  title: string;
  subtitle: string;
  image: string;
  author: string;
  url: string;
};

const BookItem = ({ book }: { book: BookType }) => {
  console.log(book);
  return (
    <div className="  w-full">
      <div className="bg-neutral rounded-md relative py-3">
        <Image
          src="/icons/bgIcon.jpg"
          alt="Image 1"
          width={100}
          height={125}
          className="w-1/2 mx-auto bg-slate-100 "
        />
      <span className="absolute top-0 right-0 bg-slate-50 m-1 text-slate-400 text-sm font-bold p-1 rounded-full">
        hello
      </span>
      </div>
      <h2 className="font-medium mb-2">{book.title}</h2>
      <p className=" text-sm">{book.subtitle}</p>
    </div>
  );
};

export default BookItem;
