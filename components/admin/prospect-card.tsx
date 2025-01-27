import Image from "next/image";
import React from "react";

interface IProspectCard {
  fname: string;
  lname: string;
  oname?: string;
  profile: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
  };
  school: string;
  programme: string;
  scholarship: boolean;
  laptop: boolean;
  gender: "male" | "female";
}

const ProspectCard = ({
  fname,
  profile,
  laptop,
  lname,
  oname,
  programme,
  scholarship,
  school,
  gender,
}: IProspectCard) => {
  return (
    <div className="hover:cursor-pointer border rounded-md p-2 bg-light space-y-2">
      <div className="flex items-center">
        <Image
          src={"/images/p2.jpg"}
          alt="image"
          width={60}
          height={60}
          className="w-16 h-16 rounded-full object-cover"
        />
        <span className="">
          <h3 className="text-lg">{fname} { oname && oname } {lname}</h3>
          <p className="text-sm capitalize">{gender}</p>
        </span>
      </div>
      <p className="capitalize">
        {school} - {programme}
      </p>
      <div className="grid grid-cols-2">
        <p className="">Scholarship:{scholarship === true ? "Yes" : "No"}</p>
        <p className="">Laptop: {laptop === true ? "Yes" : "No"}</p>
      </div>

      <hr />
      <span className="text-xs">
        Applied on: {new Date(profile.createdAt).toLocaleDateString()}
      </span>
    </div>
  );
};

export default ProspectCard;
