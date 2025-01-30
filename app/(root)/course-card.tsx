import Image from "next/image";
import React from "react";

interface ICourse {
  mode: string;
  prerequisite?: string[];
  title: string;
  image: string;
}

const CourseCard = ({ mode, image, prerequisite, title }: ICourse) => {
  return (
    <div className="p-2 bg-white">
      <Image
        src={"/images/group.jpg"}
        alt="image"
        width={300}
        height={200}
        className="w-full mt-3 md:t-0 md:w-full md:h-[200px] object-cover rounded-md"
      />
      <h2 className="text-xl font-medium">
        Mobile App Development with Flutter
      </h2>
      <p className="text-gray-500 text-sm">
        {" "}
        Mode: 
        {mode}
      </p>
      <p className="">Pre-requisite: {prerequisite?.join(", ")}</p>
    </div>
  );
};

export default CourseCard;
