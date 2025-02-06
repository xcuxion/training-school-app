"use client";
import React, { useState } from "react";
import MainContent from "../main-content";
import BookItem from "./book-item";
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
const bookStore = [
  {
    id: 11,
    title: "How To Code in Python 3",
    subtitle: "",
    author: "Lisa Tagliaferri",
    image: "/images/p1.jpg",
    url: "",
  },
  {
    id: 12,
    title: "A Whirlwind Tour of Python",
    subtitle: "",
    author: "Jake VanderPlas",
    image: "/images/p1.jpg",
    url: "",
  },
  {
    id: 13,
    title: "Python Notes for Professionals",
    subtitle: "",
    author: "Stack Overflow Community",
    image: "/images/p1.jpg",
    url: "",
  },
  {
    id: 14,
    title: "The Coder&#039;s Apprentice",
    subtitle: "Learning Programming with Python 3",
    author: "Pieter Spronck",
    image: "/images/p1.jpg",
    url: "",
  },
  {
    id: 15,
    title: "Introduction to Scientific Programming with Python",
    subtitle: "",
    author: "Joakim Sundnes",
    image: "/images/p1.jpg",
    url: "",
  },
  {
    id: 16,
    title: "Snake Wrangling for Kids",
    subtitle: "Learning to Program with Python",
    author: "Jason Briggs",
    image: "/images/p1.jpg",
    url: "",
  },
  {
    id: 17,
    title: "Python for Everybody",
    subtitle: "Exploring Data Using Python 3",
    author: "Dr. Charles Severance",
    image: "/images/p1.jpg",
    url: "",
  },
  {
    id: 18,
    title: "Python for You and Me",
    subtitle: "",
    author: "Kushal Das",
    image: "/images/p1.jpg",
    url: "",
  },
  {
    id: 19,
    title: "Open Workbook of Cryptology",
    subtitle: "A project-based introduction to crypto in Python",
    author: "Jonathan A. Poritz",
    image: "/images/p1.jpg",
    url: "",
  },
  {
    id: 20,
    title: "Learn Python the right way",
    subtitle: "How to think like a computer scientist",
    author: "Peter Wentworth, Jeffrey Elkner, Allen B. Downey, Chris Meyers",
    image: "/images/p1.jpg",
    url: "",
  },
];
const historylog = [
  { image: "/images/ad-bg.jpg", title: "Book 1", date: new Date("2021-01-01") },
  { image: "/images/ad-bg.jpg", title: "Book 2", date: new Date("2021-02-01") },
  { image: "/images/ad-bg.jpg", title: "Book 3", date: new Date("2021-03-01") },
];

const Page = () => {

  //@ts-ignore
  const [books, setBooks] = useState(bookStore);
  const [history, setHistory] = useState<IHistroy[]>(historylog);

  //@t-ignore
  const [sortItem, setSortItem] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("http://localhost:3000/api/resources");
  //     const data = await res.json();
  //     console.log(data);
  //     setBooks(data);
  //   };
  //   fetchData();
  // }, []);
  return (
    <MainContent className="w-full pr-10 space-y-6">
      <div className=" bg-secondary rounded-lg flex justify-between  p-6">
        <div>
          <p className="text-3xl font-bold mb-4">
            Our Resouces & Book Collections
          </p>
          <div className="bg-white px-2 py-1 rounded-full flex flex-between">
            <Input
              type="search"
              className="w-96 border-none focus-visible:ring-0 shadow-none bg-transparent"
              placeholder="Search by name, author, etc"
            />
            <Button variant={"default"} className=" rounded-full ">
              Submit
            </Button>
          </div>
        </div>
      </div>

      <h1 className="font-semibold text-lg">Recently Accessed</h1>
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
          </>
        )}
      </div>

      <div className="">
        <p className="font-semibold text-xl">Catalog</p>
        <div className="flex items-center justify-between my-2">
          <div className="w-full rounded-md px-2 text-sm space-x-2 ">
            {categoryfetch.map((category) => (
              <span
                key={category.id}
                className="rounded-3xl border p-2 hover:bg-dark hover:text-light hover:cursor-pointer"
              >
                {" "}
                {category.name}
              </span>
            ))}
          </div>
          <Select onValueChange={(value) => setSortItem(value)}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
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
            return <BookItem key={index} book={book} />;
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
    </MainContent>
  );
};

export default Page;
