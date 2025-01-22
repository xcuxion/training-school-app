import Image from "next/image";
import React from "react";

interface IProspectCard {
  fname: string;
  lname: string;
  oname: string;
  createdAt: string;
  school: string;
  programme: string;
  scholarship: boolean;
  laptop: boolean;
  gender: "male" | "female";
}

const ProspectCard = ({
  fname,
  createdAt,
  laptop,
  lname,
  oname,
  programme,
  scholarship,
  school,
  gender,
}: IProspectCard) => {
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
          <h3 className="text-lg">{fname + " " + oname + " " + lname}</h3>
          <p className="text-sm">{gender}</p>
        </span>
      </div>
      <p className="">{school} - {programme}</p>
      <div className="grid grid-cols-2">
        <p className="">{scholarship === true ? "Yes" : "No"}: Yes</p>
        <p className="">{laptop === true ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default ProspectCard;
