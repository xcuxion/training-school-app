"use client";
import React, { useEffect, useState } from "react";
import MainContent from "../main-content";
import Image from "next/image";
import BookCategory from "./book-category";
import BookHistory from "./history";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/books");
      const data = await res.json();
      console.log(data);
      setBooks(data);
    };
    fetchData();
  }, []);
  return (
    <div className="flex w-full">
      <MainContent className="w-full">
        <div className="mb-6 bg-blue-100  flex justify-between  p-6">
          <div>
            <p className="text-xl font-bold">Discover</p>
            <div className="flex mt-2 w-1/2">
              <Input
                type="search"
                className="border border-gray-300 rounded-l-md p-2 flex-1 w-80"
                placeholder="Search..."
              />
              <Button className="bg-blue-500 text-white rounded-r-md p-2 hover:bg-blue-600">
                Submit
              </Button>
            </div>
            <h1 className="text-2xl font-bold mt-4 mb-2">Recommendation</h1>
            <p className="">From Us</p>
            <button
              type="submit"
              className="rounded-lg r border-2  border-gray-400 px-2 mt-5"
            >
              View Recommended Resources
            </button>
          </div>
          <div>
            <Image src={"/icons/manBag.png"} width={250} height={150} alt="" />
          </div>
        </div>

        <div className="mt-36">
          <p className="text-lg">Category</p>
          <div className="grid grid-cols-4 gap-2  ">
            {books.map((book,index)=>{
              return <BookCategory key={index} book={book} />
            })}
        
          </div>
        </div>
        
        <h1 className="mt-16 text-lg">History</h1>
        <div className=" grid grid-cols-3 gap-x-8 gap-y-1">
        <BookHistory />
        <BookHistory />
        <BookHistory />
        <BookHistory />
        <BookHistory />
        <BookHistory />
        </div>
       
      </MainContent>
    </div>
  );
};

export default Page;
