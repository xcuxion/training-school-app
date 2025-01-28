import { name } from "@/app/school/main-content";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import MobileSheet from "@/app/school/mobile-sheet";
import ProfileCard from "./profile-card";
import TodoSection from "./todo-section";
import { profile } from "@/app/school/page";

const UpcomingSession = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="w-full bg-white sticky top-0 py-2">
          <h1 className="font-semibold text-xl">Hello</h1>
          <p>Welcome Back, {name}! </p>
        </div>
        <MobileSheet title="Profile">
          <ProfileCard {...profile} />
          <TodoSection />
          <div className="w-full h-[125px] bg-primary rounded-md flex px-6 items-center justify-between">
            <div className="text-white">
              <h1 className="text-4xl font-semibold">237</h1>
              <p className="text-lg">Achievement Points</p>
            </div>
            <Image
              src={"/images/trophy.svg"}
              alt=""
              width={80}
              height={80}
              className="w-[80px] h-[80px] object-cover"
            />
          </div>
        </MobileSheet>
      </div>
      <section className="flex flex-start bg-secondary p-2 md:p-4 md:mt-4 rounded-lg ">
        <div className="">
          <h4 className="text-sm font-semibold">Upcoming Live Session</h4>
          <div className="mt-2 md:mt-8">
            <h1 className="text-2xl md:text-4xl font-semibold">
              {new Date().toDateString()}
            </h1>
            <p className="text-lg md:text-2xl my-1 font-medium">
              {new Date().toLocaleTimeString()}
            </p>
            <Button
              variant="default"
              className="bg-primary text-xs md:text-sm text-white rounded-full"
            >
              Preview Materials
            </Button>
          </div>
        </div>

        <Image
          src={"/VectorImg/overview.png"}
          alt="Logo"
          width={250}
          height={200}
          className="hidden mb-1 md:block w-[250px] h-[200px] object-cover"
        />
      </section>
    </>
  );
};

export default UpcomingSession;
