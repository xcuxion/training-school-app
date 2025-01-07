"use client";
import React, { useEffect, useState } from "react";
import MainContent from "../main-content";
import BookCategory from "./book-category";
import BookHistory from "./history";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categoryfetch = [
  { id: 1, name: "All" },
  { id: 2, name: " Marketing" },
  { id: 3, name: " Enterprenuership" },
  { id: 4, name: " Self Help" },
  { id: 5, name: " Programming" },
];

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
        <div className="mb-6 bg-blue-100 rounded-lg flex justify-between  p-6">
          <div>
            <p className="text-xl font-bold">Our Resouces & Book Collections</p>
            <div className="flex mt-2 w-1/2 relative">
              <Input
                type="search"
                className="border border-gray-300 rounded-lg flex-1 w-96"
                placeholder="Search by name, author, etc"
              />
              <Button className="absolute right-0 bg-blue-800 text-white rounded-r-md p-2 hover:bg-blue-600">
                Submit
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-md mb-5">Category</p>
          <div className="flex justify-between ">
            <div className=" rounded-md px-2 text-s">
              {categoryfetch.map((category) => (
                <Button
                  key={category.id}
                  className=" mr-6 bg- text-black"
                >
                  {" "}
                  {category.name}
                </Button>
              ))}
            </div>
            <div>
               Sort By 
              <select className="border-2 m-2 rounded-lg px-2 py-1 "> 
                <option value="" >..none..</option>
                <option value="">AudioBook</option>
                <option value="">Book</option>
                <option value="">Podcast</option>
                <option value="">E-book</option>
                <option value="">VideoBook</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 ">
            {books.map((book, index) => {
              return <BookCategory key={index} book={book} />;
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
