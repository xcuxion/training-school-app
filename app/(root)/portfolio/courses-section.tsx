"use client";
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-5 md:px-20 py-5 md:py-0 min-h-screen md:h-screen bg-gray-100 flex flex-col flex-center"
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
        className="grid md:grid-cols-3 mt-4 gap-4"
      >
        {courses.sartup.map((course, index) => (
          <ItemList {...course} key={index} />
        ))}
        {courses.engineering.map((course, index) => (
          <ItemList {...course} key={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CoursesSection;
