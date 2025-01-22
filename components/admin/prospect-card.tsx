import Image from "next/image";
import React from "react";

const ProspectCard = () => {
  return (
    <div className="border">
      <div className="flex">
        <Image
          src={""}
          alt="image"
          width={60}
          height={60}
          className="w-20 h-20 rounded-full object-cover"
        />
        <span className="">
          <h3 className="text-lg">Prospect Name</h3>
          <p className="text-sm">Prospect Position</p>
        </span>
      </div>
      <p className="">
        School - Programme
      </p>
      <div className="grid grid-cols-2">
        <p className="">Scholarship: Yes</p>
        <p className="">Laptop: Yes</p>
      </div>
    </div>
  );
};

export default ProspectCard;
