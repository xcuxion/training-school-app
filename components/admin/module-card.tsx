import Image from "next/image";
import React from "react";

interface IModuleCard {
  title: string;
  image: string;
  facilitator: string;
}

const ModelueCard = ({ title, facilitator, image }: IModuleCard) => {
  return (
    <div className="bg-white p-2 border rounded-md flex flex-between ">
      <div className="flex items-center">
        <span className="flex flex-center mr-4">
          <Image
            src={image}
            alt="image"
            width={60}
            height={60}
            className="w-16 h-16"
          />
        </span>
        <span className="">
          <h1 className="text-xl font-medium">{title}</h1>
          <p className="">{facilitator}</p>
        </span>
      </div>
      <span className="w-8 h-8 rounded-full border bg-light flex flex-center">
        <Image
          src={"/arrow-right.svg"}
          alt="icon"
          width={24}
          height={24}
          className=""
        />
      </span>
    </div>
  );
};

export default ModelueCard;
