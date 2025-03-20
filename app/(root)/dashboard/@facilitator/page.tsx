"use client";
import React from "react";
import MainContent from "@/app/school/(student)/learning-space/main-content";
import SideSection from "@/app/school/(student)/learning-space/side-section";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = () => {
  const [showDetails, setShowDetails] = React.useState(false);

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/150",
  };

  const info = [
    {
      title: "Students",
      count: 31,
    },
    {
      title: "Attendance",
      count: "31 / 67",
    },
    {
      title: "Pending Assessment",
      count: 34,
    },
  ];

  const todoContent = [
    {
      title: "Assignment Release",
      count: 31,
    },
    {
      title: "Bank Case Review",
      count: "31 / 67",
    },
    {
      title: "Introduction to Course",
      count: 34,
    },
    {
      title: "Case Study",
      count: 34,
    },
  ];
  return (
    <div>
      <nav className="flex justify-between items-center">
        <Image
          src={"/logo.png"}
          alt="Company Logo"
          width={500}
          height={500}
          className="w-48"
        />
        <div className="flex flex-col items-center w-48 space-x-4 m-2">
          <div className="flex flex-row  space-x-5">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full border-4 border-blue-500 shadow-sm cursor-pointer"
              onClick={() => setShowDetails(!showDetails)}
            />
            <h2 className="mt-4 text-xl font-semibold">{user.name}</h2>
          </div>
          {showDetails && (
            <div className="mt-2 text-center">
              <p className="text-gray-400">{user.email}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </nav>
      <div className="flex flex-row space-x-6">
        <MainContent className="w-2/3">
          <div className="flex flex-row space-x-6">
            {info.map((Item, Index) => (
              <Card key={Index} className="w-full h-48 bg-[#1f1f1f]">
                <CardHeader>
                  <CardTitle className="text-lg mb-1">{Item.title}</CardTitle>
                  <CardDescription className="text-xl">
                    {Item.count}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-white space-y-8">
            <h1 className="text-xl font-extrabold">Management</h1>
            <div className=" bg-[#1f1f1f] w-full h-24 rounded-lg flex space-x-4 p-3 mt-5">
              <img
                src={user.avatar}
                className="w-16 h-16 rounded-full border-4 border-gray-500 shadow-sm cursor-pointer "
              />
              <h2 className="text-2xl font-bold m-3">Learning Resources</h2>
            </div>
            <div className=" bg-[#1f1f1f] w-full h-24 rounded-lg flex space-x-4 p-3 mt-5">
              <img
                src={user.avatar}
                className="w-16 h-16 rounded-full border-4 border-gray-500 shadow-sm cursor-pointer "
              />
              <h2 className="text-2xl font-bold m-3">Course Management</h2>
            </div>
            <div className=" bg-[#1f1f1f] w-full h-24 rounded-lg flex space-x-4 p-3 mt-5">
              <img
                src={user.avatar}
                className="w-16 h-16 rounded-full border-4 border-gray-500 shadow-sm cursor-pointer "
              />
              <h2 className="text-2xl font-bold m-3">Project Space</h2>
            </div>
          </div>
        </MainContent>
        <SideSection className="w-1/3 bg-[#1f1f1f] rounded-lg p-8">
          <nav className="flex justify-between">
            <h1>Activity Calender</h1>
            <p>jgkh</p>
          </nav>
          <div className="bg-black rounded-lg space-y-3 p-3 max-h-max">
            <p>Upcoming</p>
            <h1 className="text-2xl font-bold">
              Basic of programming-Conditional Statements
            </h1>
            {new Date().toLocaleString()} <br />
            <button
              type="submit"
              className="text-black bg-[#FEBC10] rounded-xl px-6 font-extrabold py-1 text lg"
            >
              Start
            </button>
          </div>

          <div>
            {todoContent.map((todo, Index) => (
              <div className="border-gray-500 border-2 w-full h-24 rounded-lg flex space-x-4 p-3 mt-12">
                <input
                  type="checkbox"
                  name=""
                  className="w-8 h-8 rounded-full border-4 border-gray-500 shadow-sm cursor-pointer mt-3"
                />
                <div className="text-lg font-medium ml-2 mt-1">
                  <h2 >{todo.title}</h2>
                  <h2 >{todo.count}</h2>
                </div>
              </div>
            ))}
          </div>
        </SideSection>
      </div>
    </div>
  );
};

export default page;

