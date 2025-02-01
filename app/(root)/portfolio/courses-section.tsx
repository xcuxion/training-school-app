"use client"
import React from "react";
import ItemList from "./item-list";
import { motion } from "framer-motion";

const courses = {
  sartup: [
    {
      image: "/images/business-analytics.jpg",
      title: "Business Analytics",
      subtitle: "Business",
    },
    {
      image: "/images/business-strategy.jpg",
      title: "Business Strategy",
      subtitle: "Business",
    },
    {
      image: "/images/startup-essentials.jpg",
      title: "Startup Essentials",
      subtitle: "Business",
    },
    {
      image: "/images/marketing.jpg",
      title: "Marketing",
      subtitle: "Engineering",
    },
  ],
  engineering: [
    {
      image: "/images/flutter.jpg",
      title: "Mobile Development With Flutter",
      subtitle: "Engineering",
    },
    {
      image: "/images/nextjs.jpg",
      title: "Full-stack Web Development With Next.js",
      subtitle: "Engineering",
    },
    {
      image: "/images/python-backend.jpg",
      title: "Backend Engineering with Python",
      subtitle: "Engineering",
    },
    {
      image: "/images/react-frontend.jpg",
      title: "Frontend Development with React",
      subtitle: "Engineering",
    },
    {
      image: "/images/programming-fundamentals.jpg",
      title: "Fundamentals of Programming",
      subtitle: "Engineering",
    },
    {
      image: "/images/systems-design.jpg",
      title: "Systems Design and Analysis",
      subtitle: "",
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
      <motion.p className="text-xl w-1/2 mx-auto text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        vitae soluta eligendi omnis asperiores enim, ipsa eveniet voluptates
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
