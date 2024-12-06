import React from "react";
import Image from "next/image";
import MainContent from "./main-content";
import SideSection from "./side-section";


const page = () => {
  return (
    <div className="w-full p-4 flex flex-row gap-4 items-start ">
      <MainContent/>
      <SideSection/>
    </div>
  );
};
export default page;
