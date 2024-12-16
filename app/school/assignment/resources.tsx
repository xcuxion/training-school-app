import React from "react";
import Image from "next/image";
const resources = () => {
  return (
    <div className="bg-gray-100 rounded-md shadow-md w-full mt-4 p-2  text-center">
      <div className="h-full mr-4">
        <Image
          src="/icons/bgIcon.jpg"
          alt="Image 1"
          width={82}
          height={16}
          className=" rounded-full"
        />
        <h2 className="font-semibold">books title</h2>
      </div>
    </div>
  );
};

export default resources;
