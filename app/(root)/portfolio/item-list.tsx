import Image from "next/image";
import React, { ReactElement } from "react";

interface ICourse {
  subtitle: string;
  title: string | ReactElement;
  image: string;
}

const ItemList = ({ subtitle, image, title }: ICourse) => {
  return (
    <div className="p-4 flex items-center bg-gray-50 rounded-lg">
      <Image
        src={image}
        alt="image"
        width={60}
        height={60}
        className="w-full mr-2 border md:w-[60px] md:h-[60px] object-cover rounded-md"
      />
      <div className="flex flex-col">
        <p className="rounded-full  text-sm   font-bold">{subtitle}</p>
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
    </div>
  );
};

export default ItemList;
