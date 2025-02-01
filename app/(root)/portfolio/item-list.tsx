import Image from "next/image";
import React from "react";

interface ICourse {
  subtitle: string;
  title: string;
  image: string;
}

const ItemList = ({ subtitle, image, title }: ICourse) => {
  return (
    <div className="p-4 flex items-center bg-white rounded-lg">
      <Image
        src={image}
        alt="image"
        width={60}
        height={60}
        className="w-full md:w-[60px] md:h-[60px] object-cover rounded-md"
      />
      <div className="flex flex-col">
        <p className="rounded-full bg-slate-200 text-sm text-red-300 p-1 w-[100px] text-center font-bold">{subtitle}</p>
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
    </div>
  );
};

export default ItemList;
