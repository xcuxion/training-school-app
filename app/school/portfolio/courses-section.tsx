"use client";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const courses = [
  {
    index: 1,
    image: "/images/strategy.jpg",
    title: "Marketing & Strategy",
    description:
      "Craft effective marketing strategies and business plans to drive growth and success.",
  },
  {
    index: 2,
    image: "/images/startupessentials.jpg",
    title: "Startup Essentials",
    description:
      "Learn the foundational skills needed to launch and scale a startup.",
  },
  {
    index: 3,
    image: "/images/flutter.jpg",
    title: "Mobile App Development",
    description:
      "Build cross-platform mobile applications using modern frameworks like Flutter.",
  },
  {
    index: 4,
    image: "/images/extjs.jpg",
    title: "Fullstack Web Development",
    description:
      "Master front-end and back-end development for dynamic web applications.",
  },
  {
    index: 5,
    image: "/images/python.jpg",
    title: "Backend Engineering",
    description:
      "Learn cloud computing, server management, devops engineering and backend development.",
  },
  {
    index: 6,
    image: "/images/react.jpg",
    title: "Data Analysis",
    description: "Gain proficiency in data collection, cleaning, and analysis.",
  },
  {
    index: 7,
    image: "/images/programming.jpg",
    title: "Programming Fundamentals",
    description:
      "Build a strong foundation in programming concepts and problem-solving.",
  },
  {
    index: 8,
    image: "/images/systems.jpg",
    title: "Systems Design and Analysis",
    description:
      "Understand complex systems and design scalable, efficient architectures.",
  },
];

interface ICourse {
  title: string | ReactElement;
  image: string;
  description: string;
  index: number;
}
export const CourseCard = ({ image, title, description, index }: ICourse) => {
  return (
    <motion.div
      className="p-4 flex flex-col items-start bg-opacity-70 bg-gradient-to-br from-gray-800 to-gray-900 border-b-2 border-gray-700  shadow-lg hover:scale-105 transition-transform duration-0 ease-out"
      whileHover={{ scale: 1.05 }}
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <Image
        src={image}
        alt={"title"}
        width={80}
        height={80}
        className="mb-4 w-[80px] h-[80px] object-cover rounded-lg"
        priority
      />
      <div className="flex flex-col">
        <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

const CoursesSection = () => {
  return (
    <motion.div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 z-10">
      {courses.map((course) => (
        <CourseCard {...course} key={course.index} />
      ))}
    </motion.div>
  );
};

export default CoursesSection;
