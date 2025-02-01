import Image from "next/image";
import React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

const people = [
  {
    image: "/images/p1.jpg",
    name: "Anton Bismark",
    role: "Founder & Director",
  },
  {
    image: "/images/p1.jpg",
    name: "Anton Bismark",
    role: "Founder & Director",
  },
  {
    image: "/images/p1.jpg",
    name: "Anton Bismark",
    role: "Founder & Director",
  },
  {
    image: "/images/p1.jpg",
    name: "Anton Bismark",
    role: "Founder & Director",
  },
];

export const TeamMemberCard = ({ name, role, image }: TeamMemberCardProps) => {
  return (
    <div className="w-full text-dark flex flex-col items-center">
      <Image
        src={image}
        alt=""
        width={200}
        height={200}
        className="md:w-[200px] md:h-[200px] object-cover object-top rounded-full"
      />
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-base">{role}</p>
    </div>
  );
};

const Team = () => {
  return (
    <div className="">
      <div>
        <h1>Our Facilitators</h1>
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          eum quod consectetur aut praesentium impedit, asperiores voluptatum
          mollitia quas facere quibusdam cum eligendi aliquam tenetur!
        </p>
        <div className=""></div>
      </div>
      {people.map((person, index) => (
        <TeamMemberCard key={index} {...person} />
      ))}
    </div>
  );
};

export default Team;
