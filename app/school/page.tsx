import React from "react";
import Image from "next/image";
import MainContent from "./main-content";
import SideSection from "./side-section";
import ProfileCard from "@/components/profile-card";
import TodoSection from "@/components/todo-section";
import UpcomingSession from "@/components/upcoming-session";
import PastSessionSection from "@/components/past-session-section";
import PendingTasks from "@/components/pending-tasks";
import FacilitatorCard, { IFacilitator } from "@/components/facilitator-card";

const facilitatorData: IFacilitator = {
  image: '/images/bayat.jpg',
  name: 'Bayat Osman',
  summary: 'Excited about innovations in blockchain technology and financial forecasting',
  email: 'bayatosman123@gmail.com',
  link: 'bayat.com',
  linkedIn: 'https://linkedin.com/in/bayat-123',
  role: 'Software Engineer',
  x: 'https://x.com/bayati'
}

const page = () => {
  return (
    <div className="w-full flex flex-row gapx-4 items-start ">
      <MainContent>
        <UpcomingSession/>
        <div className="w-full grid grid-cols-2 gap-x-4 mt-4">
          <PendingTasks/>
          <FacilitatorCard {...facilitatorData}/>
        </div>
        <PastSessionSection/>
      </MainContent>
      <SideSection>
        <ProfileCard />
        <TodoSection />
        <div className="w-full h-[125px] bg-school-primary">
          <Image src={"/images/tasks.svg"} alt="" width={80} height={80} />
        </div>
      </SideSection>
    </div>
  );
};
export default page;
