"use client";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const courses = {
  startup: [

    {
      image: "/images/strategy.jpg",
      title: "Business Strategy",
      subtitle: "General Course",
    },
    {
      image: "/images/startupessentials.jpg",
      title: "Startup Essentials",
      subtitle: "General Course",
    },

  ],
  engineering: [
    {
      image: "/images/flutter.jpg",
      title: "Mobile Development With Flutter",
      subtitle: "Track",
    },
    {
      image: "/images/extjs.jpg",
      title: "Full-stack Web Development With Next.js",
      subtitle: "Engineering",
    },
    {
      image: "/images/python.jpg",
      title: "Backend Engineering with Python",
      subtitle: "Engineering",
    },
    {
      image: "/images/react.jpg",
      title: "Frontend Development with React",
      subtitle: "Engineering",
    },
    {
      image: "/images/programming.jpg",
      title: "Fundamentals of Programming",
      subtitle: "Engineering",
    },
    {
      image: "/images/systems.jpg",
      title: "Systems Design and Analysis",
      subtitle: "Engineering",
    },
  ],
};

interface ICourse {
  subtitle: string;
  title: string | ReactElement;
  image: string;
}
export const CourseCard = ({ subtitle, image, title }: ICourse) => {
  return (
    <div className="p-4 flex flex-col items-start bg-gradient-to-r from-gray-900  to-gray-800 border border-gray-700 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-out">
      <Image
        src={image}
        alt="image"
        width={60}
        height={60}
        className="mr-4 w-[60px] h-[60px] object-cover rounded-lg"
      />
      <div className="flex flex-col">
        <p className="text-xs md:text-sm text-gray-400">{subtitle}</p>
        <h2 className="text-lg md:text-xl font-semibold text-white">{title}</h2>
        <p className="text-xs md:text-sm text-gray-500 mt-1">
          Learn more about this course and enhance your skills.
        </p>
      </div>
    </div>
  );
};
const CoursesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-5 md:px-20 py-5 md:py-0 min-h-screen md:h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col flex-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-xl md:text-4xl"
      >
        Our Courses
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:text-xl md:w-3/4 mx-auto text-center"
      >
        Gain hands-on training in software development, business strategy,
        marketing, and fundraising. Our expert-led courses equip you with the
        tools to launch and scale your startup successfully.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid md:grid-cols-4 mt-4 gap-4"
      >
        {courses.startup.map((course, index) => (
          <CourseCard {...course} key={index} />
        ))}
        {courses.engineering.map((course, index) => (
          <CourseCard {...course} key={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CoursesSection;
