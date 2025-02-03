import Image from "next/image";
import React, { ReactElement } from "react";

interface ICourse {
  subtitle: string;
  title: string | ReactElement;
  image: string;
}

const ItemList = ({ subtitle, image, title }: ICourse) => {
  return (
    <div className="p-2 md:p-4 flex md:items-center bg-gray-50 rounded-lg">
      <Image
        src={image}
        alt="image"
        width={60}
        height={60}
        className="mr-2 border w-[45px] h-[45px] md:w-[60px] md:h-[60px] object-cover rounded-md"
      />
      <div className="flex flex-col">
        <p className="rounded-full text-xs  md:text-sm   font-bold">
          {subtitle}
        </p>
        <h2 className="text-base md:text-lg font-medium">{title}</h2>
      </div>
    </div>
  );
};

export default ItemList;
