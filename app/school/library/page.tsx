import React from "react";
import SideSection from "../side-section";
import MainContent from "../main-content";
import Image from "next/image";

const BookCard = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full flex">
      <div className="w-1/2 h-full">
        <Image
          src="/icons/bgIcon.jpg"
          alt="Image 1"
          width={32}
          height={16}
          className="w-16 h-16  border-4 border-blue-100"
        />
      </div>
      <div className="w-1/2">
        <h2 className="text-lg font-semibold">books</h2>
        <p className="text-gray-600">book description</p>
      </div>
    </div>
  );
};
const Page = () => {
  return (
    <div className="flex w-full">
      <MainContent>
        <div className="flex-1 p-4 ">
          <div className="mb-6 bg-blue-100 p-4 relative">
            <p className="text-xl font-bold">Discover</p>
            <div className="flex mt-2 w-1/2">
              <input
                type="search"
                className="border border-gray-300 rounded-l-md p-2 flex-1"
                placeholder="Search..."
              />
              <button className="bg-blue-500 text-white rounded-r-md p-2 hover:bg-blue-600">
                Submit
              </button>
            </div>
            <h1 className="text-2xl font-bold mt-4 mb-2">Recommendation</h1>
            <p>From Us</p>

            <div className="absolute bottom-[-40px] left-0 right-0 justify-between px-8 flex gap">
              <Image
                src="/icons/bgIcon.jpg"
                alt="Image 1"
                width={32}
                height={16}
                className="w-16 h-16  border-4 border-blue-100"
              />
              <Image
                src="/icons/bgIcon.jpg"
                alt="Image 2"
                width={32}
                height={16}
                className="w-16 h-16  border-4 border-blue-100"
              />
              <Image
                src="/icons/bgIcon.jpg"
                alt="Image 3"
                width={32}
                height={16}
                className="w-16 h-16  border-4 border-blue-100"
              />
              <Image
                src="/icons/bgIcon.jpg"
                alt="Image 4"
                width={32}
                height={16}
                className="w-16 h-16 border-4 border-blue-100"
              />
            </div>
          </div>
          <div className="mt-36">
            <p className="text-lg">Category</p>
            <div className="grid grid-cols-4 gap-2  ">
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
              <BookCard />
            </div>
          </div>
        </div>
      </MainContent>
      <SideSection />
    </div>
  );
};

export default Page;
