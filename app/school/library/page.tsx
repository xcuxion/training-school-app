"use client";
import React, { useEffect, useState } from "react";
import MainContent from "../main-content";
import BookCategory from "./book-category";
import BookHistory, { HistorySkeleton, IHistroy } from "./history";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ResourceSkeleton from "./resource-skeleton";

const categoryfetch = [
  { id: 1, name: "All" },
  { id: 2, name: " Marketing" },
  { id: 3, name: " Enterprenuership" },
  { id: 4, name: " Self Help" },
  { id: 5, name: " Programming" },
];

const historylog = [
  { image: "/images/ad-bg.jpg", title: "Book 1", date: new Date("2021-01-01") },
  { image: "/images/ad-bg.jpg", title: "Book 2", date: new Date("2021-02-01") },
  { image: "/images/ad-bg.jpg", title: "Book 3", date: new Date("2021-03-01") },
  { image: "/images/ad-bg.jpg", title: "Book 4", date: new Date("2021-04-01") },
  { image: "/images/ad-bg.jpg", title: "Book 5", date: new Date("2021-05-01") },
  { image: "/images/ad-bg.jpg", title: "Book 6", date: new Date("2021-06-01") },
];

const Page = () => {
  const [books, setBooks] = useState([]);
  const [history, setHistory] = useState<IHistroy[]>([]);
  const [sortItem, setSortItem] = useState("");
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
                <span key={category.id} className="rounded-3xl border p-2">
                  {" "}
                  {category.name}
                </span>
              ))}
            </div>
            <div>
              Sort By
              <Select onValueChange={(value) => setSortItem(value)}>
                <SelectTrigger className="">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="audiobook">Audiobook</SelectItem>
                  <SelectItem value="ebook">Ebook</SelectItem>
                  <SelectItem value="podcast">podcast</SelectItem>
                  <SelectItem value="video">Video Tutorial</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
            {books.length > 0 ? (
              books.map((book, index) => {
                return <BookCategory key={index} book={book} />;
              })
            ) : (
              <>
                <ResourceSkeleton />
                <ResourceSkeleton />
                <ResourceSkeleton />
                <ResourceSkeleton />
                <ResourceSkeleton />
                <ResourceSkeleton />
                <ResourceSkeleton />
              </>
            )}
          </div>
        </div>

        <h1 className="mt-16 text-lg">History</h1>
        <div className=" grid grid-cols-3 gap-x-8 gap-y-1">
          {history.length > 0 ? (
            history.map((book, index) => {
              return <BookHistory key={index} {...book} />;
            })
          ) : (
            <>
              <HistorySkeleton />
              <HistorySkeleton />
              <HistorySkeleton />
              <HistorySkeleton />
              <HistorySkeleton />
              <HistorySkeleton />
              <HistorySkeleton />
              <HistorySkeleton />
            </>
          )}
        </div>
      </MainContent>
    </div>
  );
};

export default Page;
