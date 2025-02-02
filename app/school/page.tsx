import React from "react";
import Image from "next/image";
import MainContent from "./main-content";
import SideSection from "./side-section";
import ProfileCard from "@/components/profile-card";
import TodoSection from "@/components/todo-section";
import UpcomingSession from "@/components/upcoming-session";
import PastSessionSection from "@/components/past-session-section";
import ModuleDetails from "@/components/module-details";
import MobileSheet from "./mobile-sheet";

const moduleData = {
  name: 'Software Engineering',
  image: '/images/se.png',
  resources: [
    {
      url: 'https://drive.google.com/file/d/1Myzohru5vX73ku2UasZcbcosQ80-V6Tl/view?t=3',
      title: 'Activities'
    },
    {
      url: 'https://drive.google.com/file/d/1khREi9R77t4z8VgLKGH_PLGDc9aSlG5m/view?usp=sharing',
      title: 'Assignments'
    },
    {
      url: 'https://drive.google.com/file/d/1PMn4TsvxsZoyO-MWO1VVEmRUmA9bCqDZ/view?usp=sharing',
      title: 'Course Materials'
    },
  ],
  facilitator: 'Yaw Offeh'
}
const profile = {
  name: "Mans Watzen",
  image: "/images/p1.jpg",
  aspiration: "Software Engineer"
}
const page = () => {
  return (
    <div className="w-full flex flex-row gap-x-4 items-start ">
      <MainContent className="w-full md:w-2/3">
        <UpcomingSession/>
        <div className="w-full mt-4">
          <ModuleDetails {...moduleData}/>
        </div>
        <PastSessionSection/>
      </MainContent>
      <SideSection className="w-1/3">
          <ProfileCard {...profile}/>
        <TodoSection />
        <div className="w-full h-[125px] bg-primary rounded-md flex px-6 items-center justify-between">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">237</h1>
            <p className="text-lg">Achievement Points</p>
          </div>
          <Image src={"/images/trophy.svg"} alt="" width={80} height={80} className="w-[80px] h-[80px] object-cover" />
        </div>  
      </SideSection>
    </div>
  );
};
export default page;
