import React from "react";
import Image from "next/image";
import { PiSquaresFourBold } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { VscBook } from "react-icons/vsc";
import { Button } from "@/components/ui/button";
const Sidebar = () => {
  return (
    <div className="h-screen w-[250px] sticky top-0 left-0 p-2 flex flex-col justify-between bg-white">
      {/* Top Section */}
      <div className="flex items-center mb-12">
        <Image src={"/icons/download.png"} alt="Logo" width={50} height={50} />
        <h3 className="text-blue-800 pt-2">TW-School</h3>
      </div>

      {/* Middle Section */}
      <div className="space-y-6 ml-8 flex-grow">
        <div className="flex ">
          <PiSquaresFourBold className="text-2xl pt-1 pr-2" />
          Overview
        </div>
        <div className="flex ">
          <FaRegFileAlt className="text-xl pt-1 pr-2" />
          Assignment
        </div>
        <div className="flex ">
          <VscBook className="text-2xl pt-1 pr-2" />
          Careers
        </div>
        <div className="flex ">
          <VscLibrary className="text-2xl pt-1 pr-2" />
          Library
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative w-[200px]">
        <Image
          src={"/icons/manBag.png"}
          alt="Logo"
          width={150}
          height={155}
          className="absolute top-[-100px] left-5 "
        />
      <div className="text-center bg-school-neutral h-[155px] rounded-md flex flex-col items-center justify-center ">
          <p className="leading-tight my-2">
            Explore our guide to try your hands on real-time pressing challenges
          </p>
          <Button
            variant={"default"}
            className="bg-school-primary text-white rounded-full p-2 text-sm"
          >
            Go to Guild
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
