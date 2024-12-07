import React from "react";
import Image from "next/image";
import MainContent from "./main-content";
import SideSection from "./side-section";
import ProfileCard from "@/components/profile-card";
import TodoSection from "@/components/todo-section";
import UpcomingSession from "@/components/upcoming-session";
import PastSessionSection from "@/components/past-session-section";
import PendingTasks from "@/components/pending-tasks";
import FacilitatorCard from "@/components/facilitator-card";

export const facilitatorData = {
  image: '/images/bayat.jpg',
  name: 'Bayat Osman',
  summary: 'Excited about innovations in blockchain technology and financial forecasting'
}

const page = () => {
  return (
    <div className="w-full p-4 flex flex-row gap-4 items-start ">
      <MainContent>
        <UpcomingSession/>
        <div className="w-full grid grid-cols-2 gap-x-4">
          <PendingTasks/>
          <FacilitatorCard {...facilitatorData}/>
        </div>
        <PastSessionSection/>
      </MainContent>
      <SideSection>
        <ProfileCard/>
        <TodoSection/>
        <div>
            <Image src={'/images/tasks.svg'} alt='' width={80} height={80} />
        </div>
      </SideSection>
    </div>
  );
};
export default page;
