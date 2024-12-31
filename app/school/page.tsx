import React from "react";
import Image from "next/image";
import MainContent from "./main-content";
import SideSection from "./side-section";
import ProfileCard from "@/components/profile-card";
import TodoSection from "@/components/todo-section";
import UpcomingSession from "@/components/upcoming-session";
import PastSessionSection from "@/components/past-session-section";
import ModuleDetails from "@/components/module-details";

const moduleData = {
  name: 'Software Engineering',
  image: '/images/se.png',
  resources: [
    {
      url: '',
      title: 'Activities'
    },
    {
      url: '',
      title: 'Assignments'
    },
    {
      url: '',
      title: 'Course Materials'
    },
  ],
  facilitator: 'Yaw Offeh'
}

const page = () => {
  return (
    <div className="w-full flex flex-row gapx-4 items-start ">
      <MainContent>
        <UpcomingSession/>
        <div className="w-full mt-4">
          <ModuleDetails {...moduleData}/>
        </div>
        <PastSessionSection/>
      </MainContent>
      <SideSection>
        <ProfileCard />
        <TodoSection />
        <div className="w-full h-[125px] bg-primary rounded-md flex px-6 items-center justify-between">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">237</h1>
            <p className="text-lg">Achievement Points</p>
          </div>
          <Image src={"/images/trophy.svg"} alt="" width={80} height={80} />
        </div>
      </SideSection>
    </div>
  );
};
export default page;
