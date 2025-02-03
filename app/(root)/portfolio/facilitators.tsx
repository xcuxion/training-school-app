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
    image: "/images/yaw.png",
    name: "Yaw Offeh",
    role: "Software Engineer",
  },
  {
    image: "/images/baze.jpeg",
    name: "Jessica Ennor",
    role: "Software Engineer",
  },
  {
    image: "/images/solo.svg",
    name: "Solomon Ayisi",
    role: "Software Engineer",
  },
  {
    image: "/images/ned.jpeg",
    name: "Prince Nedjoh",
    role: "Software Engineer",
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
        className="w-[175px] h-[125px] md:w-[300px] md:h-[300px] bg-center object-cover object-top rounded-full"
      />
      <h1 className="md:text-xl font-semibold">{name}</h1>
      <p className="text-sm md:text-base">{role}</p>
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
      className="min-h-screen py-5 px-5 md:py-10 md:px-20 flex flex-col flex-center"
    >
      <motion.h1 className="text-xl md:text-4xl font-semibold">Our Facilitators</motion.h1>
      <motion.p className="md:text-lg md:w-3/4 text-center">
      Our facilitators are seasoned professionals in software engineering, business strategy, product management, and marketing. They bring real-world insights, hands-on experience, and mentorship to help you navigate the startup ecosystem successfully.
      </motion.p>
      <motion.div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-10">
        {people.map((person, index) => (
          <TeamMemberCard key={index} {...person} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Team;
