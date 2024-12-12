"use client"
import React, {useEffect, useState} from "react";
import SideSection from "../side-section";
import MainContent from "../main-content";
import Image from "next/image";
import BookCategory from "./book-category";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const Page = () => {
  const [books, setBooks] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch('http://localhost:3000/books')
      const data = await res.json()
      console.log(data)
      setBooks(data)
    }
    fetchData()
  }, [])
  return (
    <div className="flex w-full">
      <MainContent className="w-full">
        <div className="flex-1 p-4 ">
          <div className="mb-6 bg-blue-100 p-4 relative">
            <p className="text-xl font-bold">Discover</p>
            <div className="flex mt-2 w-1/2">
              <Input
                type="search"
                className="border border-gray-300 rounded-l-md p-2 flex-1"
                placeholder="Search..."
              />
              <Button className="bg-blue-500 text-white rounded-r-md p-2 hover:bg-blue-600">
                Submit
              </Button>
            </div>
            <h1 className="text-2xl font-bold mt-4 mb-2">Recommendation</h1>
            <p className="">From Us</p>
          </div>
          <div className="mt-36">
            <p className="text-lg">Category</p>
            <div className="grid grid-cols-4 gap-2  ">
              <BookCategory />
            </div>
          </div>
        </div>
      </MainContent>
    </div>
  );
};

export default Page;
