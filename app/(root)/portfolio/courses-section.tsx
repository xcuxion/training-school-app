"use client"
import React from "react";
import ItemList from "./item-list";
import { motion } from "framer-motion";

const courses = {
  sartup: [
    {
      image: "/images/busana.jpg",
      title: "Business Analytics",
      subtitle: "Track",
    },
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
    {
      image: "/images/marketing.jpg",
      title: "Marketing",
      subtitle: "Track",
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

const CoursesSection = () => {
  return (
    <motion.div
    id="courses"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-20 h-screen bg-gray-100 flex flex-col flex-center"
    >
      <motion.h3 className="text-4xl">Our Courses</motion.h3>
      <motion.p className="text-xl w-3/4 mx-auto text-center">
      Gain hands-on training in software development, business strategy, marketing, and fundraising. Our expert-led courses equip you with the tools to launch and scale your startup successfully.
      </motion.p>
      <div className="grid grid-cols-3 mt-4 gap-4">
        {courses.sartup.map((course, index) => (
          <ItemList {...course} key={index} />
        ))}
        {courses.engineering.map((course, index) => (
          <ItemList {...course} key={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default CoursesSection;
