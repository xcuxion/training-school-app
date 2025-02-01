"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
}

const people = [
  {
    image: "/images/bayat.jpg",
    name: "Bayat Osman",
    role: "Software Engineer",
  },
  {
    image: "/images/p1.jpg",
    name: "Yaw Offeh",
    role: "Software Engineer",
  },
  {
    image: "/images/jess.jpeg",
    name: "Jessica Ennor",
    role: "Software Engineer",
  },
  {
    image: "/images/p1.jpg",
    name: "Solomon Ayisi",
    role: "Fullstack Developer",
  },
  {
    image: "/images/ned.jpeg",
    name: "Prince Nedjoh",
    role: "Fullstack Developer",
  },
  {
    image: "/images/p1.jpg",
    name: "John Agyin",
    role: "Flutter Developer",
  },
];

export const TeamMemberCard = ({ name, role, image }: TeamMemberCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5}}
      className="w-full text-dark flex flex-col items-center"
    >
      <Image
        src={image}
        alt=""
        width={300}
        height={300}
        className="md:w-[300px] md:h-[300px] object-cover object-top rounded-full"
      />
      <h1 className="text-xl font-semibold">{name}</h1>
      <p className="text-base">{role}</p>
    </motion.div>
  );
};

const Team = () => {
  return (
    <motion.div
    id="facilitators"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-10 px-20 flex flex-col flex-center"
    >
      <motion.h1 className="text-4xl font-semibold">Our Facilitators</motion.h1>
      <motion.p className="text-lg w-1/2 text-center">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        eum quod consectetur aut praesentium impedit, asperiores 
      </motion.p>
      <motion.div className="mt-4 grid grid-cols-3 gap-10">
        {people.map((person, index) => (
          <TeamMemberCard key={index} {...person} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Team;
