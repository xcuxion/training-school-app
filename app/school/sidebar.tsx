import React from "react";
import Image from "next/image";
import { PiSquaresFourBold } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { VscLibrary } from "react-icons/vsc";
import { VscBook } from "react-icons/vsc";
const Sidebar = () => {
  return (
    <div className="w-[300px] border-2 border-black p-2 flex flex-col justify-between bg-white">
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
      <div className="text-center bg-slate-200 m-1 px-2 rounded-md flex flex-col items-center">
        <Image
          src={"/icons/manBag.png"}
          alt="Logo"
          width={180}
          height={120}
          className="mb-1"
        />
        <h3>
          Explore our guide to try your hands on real-time pressing challenges
        </h3>
        <button
          type="submit"
          className="bg-blue-800 text-white rounded-lg p-1 mt-3 mb-3 text-sm"
        >
          Go to Guild
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
