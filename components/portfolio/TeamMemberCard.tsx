import Image from "next/image";
import React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

const TeamMemberCard = ({ name, role, image }: TeamMemberCardProps) => {
  return (
      <div className="w-full">
        <Image src={image} alt="" width={450} height={300} className="md:w-[400px] md:h-[300px] object-cover object-top rounded-md" />
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-base">{role}</p>
      </div>
  );
};

export default TeamMemberCard;
