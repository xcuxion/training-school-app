import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

interface IUserProfile {
  name: string;
  image: string;
  aspiration: string;
}

const ProfileCard = ({ name, image, aspiration }: IUserProfile) => {
  return (
    <>
      <div className="bg-secondary row-span-1 border-outline border flex items-center rounded-md w-full p-2 gap-x-6">
        <Image
          src={image}
          alt="user image"
          width={85}
          height={85}
          className="w-[85px] h-[85px] rounded-full object-cover"
        />
        <div className="space-y-1">
          <h3 className="text-lg font-semibold leading-none">{name}</h3>
          <p className=" font-medium leading-none">{aspiration}</p>
          <div className="flex space-x-3">
            <FaLinkedin />
            <MdOutlineEmail />
            <BsTwitterX />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
