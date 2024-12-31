import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

interface IUserProfile {
  name: string;
  image: string;
}

const ProfileCard = () => {
  return (
    <>
      <div className="bg-light border rounded-md w-full p-2">
        <div className="flex flex-col flex-center">
          <Image
            src={"/images/jess.jpeg"}
            alt=""
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <h3 className="text-xl font-medium">Jessica Baze</h3>
          <p>Aspiring Software Developer</p>
        </div>
        <div className="flex justify-center space-x-4 m-2">
          <FaLinkedin />
          <MdOutlineEmail />
          <BsTwitterX />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
