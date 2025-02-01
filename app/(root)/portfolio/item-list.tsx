import Image from "next/image";
import React from "react";

interface ICourse {
  subtitle: string;
  title: string;
  image: string;
}

const ItemList = ({ subtitle, image, title }: ICourse) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <Image
        src={image}
        alt="image"
        width={60}
        height={60}
        className="w-full md:w-[60px] md:h-[60px] object-cover rounded-md"
      />
      <p className="">{subtitle}</p>
      <h2 className="text-lg font-medium">
        {title}
      </h2>
    </div>
  );
};

export default ItemList;
