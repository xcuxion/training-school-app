"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import CoursesSection from "./portfolio/courses-section";
import AidCard from "./portfolio/aid-card";
import { title } from "process";
import Footer from "../(root)/portfolio/footer";
import Link from "next/link";
import Login from "../(root)/login";
import MobileNavigator from "../(root)/portfolio/mobile-navigator";
import Register from "../(root)/register";
import Navigator from "../(root)/portfolio/navigator";

const admissionSteps = [
  {
    title: "Submit Application",
    description:
      "Fill out the application form and submit it to our official web portal.",
  },
  {
    title: "Selection Process",
    description:
      "Review the application, schedule interviews, and assess financial need of applicants.",
  },
  {
    title: "Admission Confirmation",
    description: "Receive a confirmation email with your admission details.",
  },
];

const aid = [
  {
    title: "Scholarship",
    requirements: [
      "Must be a student",
      "Willingness to serve as a trac-assistant",
      "Must demonstrate prior knowledge in selected track",
    ],
    benefits: [
      "Full tuition coverage",
      "Mentorship and incubation support",
      "Access to all learning materials and resources",
    ],
    eligibility: [
      "Demonstrated financial need",
      "Exceptional academic or professional background",
      "Commitment to complete the program",
    ],
  },
  {
    title: "Standard Enrollment",
    requirements: [
      "Must be a student",
      "Willingness to serve as a trac-assistant",
      "Must demonstrate prior knowledge in selected track",
    ],
    benefits: [
      "Full tuition coverage",
      "Mentorship and incubation support",
      "Access to all learning materials and resources",
    ],
    eligibility: [
      "Demonstrated financial need",
      "Exceptional academic or professional background",
      "Commitment to complete the program",
    ],
  },
];

export default function School() {
  return (
    <motion.div className="bg-black text-white relative font-sans w-full">
      {/* Navigation */}
      <Navigator />

      {/* Hero Section */}
      <motion.section className="z-10 relative bg-mock bg-no-repeat bg-cover h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Increase the z-index for content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20" // Ensure this is above the overlay
        >
          <h1 className="text-3xl md:text-6xl font-bold text-primary drop-shadow-lg">
            Building the Future of Techpreneurs
          </h1>
          <p className="mt-4 md:text-lg max-w-2xl mx-auto">
            Join XCUXION School to gain world-class training in software
            engineering, business strategy, and startup development.
          </p>
          <Button
            className="mt-6 px-3 md:px-6 py-3 md:text-lg bg-primary hover:bg-white hover:scale-105 text-black"
            asChild
          >
            <Link href={"/school/apply"}>
              Start Application <FaArrowRight className="ml-2" />
            </Link>
          </Button>
        </motion.div>

        {/* The overlay */}
        <motion.div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/30 to-black z-10" />
      </motion.section>
      {/* Programs */}
      <motion.section className="z-30 min-h-screen py-5 md:py-10 md:px-20 px-6 bg-faq-bg bg-no-repeat bg-cover">
        <motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-4xl font-bold text-primary text-center"
          >
            Our Programs
          </motion.h2>{" "}
        </motion.span>
        <CoursesSection />
      </motion.section>

      {/* Admissions */}
      <motion.section className="z-30 h-full py-5 md:py-10 md:px-20 bg-center md:bg-top bg-galaxybg bg-no-repeat bg-cover">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-bold text-primary text-center"
        >
          Our Admissions Process
        </motion.h2>

        <motion.div className=" flex flex-col px-5 gap-y-6 w-full md:px-20 py-5 md:py-10">
          {admissionSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col md:flex-row  md:items-center bg-secondary md:p-6 p-2 shrink-0"
            >
              <span className="w-8 h-8 rounded-md font-mono font-bold text-2xl md:text-4xl flex items-center gap-3">
                {index+1}
              </span>
              <span className="">
                <h4 className=" text-xl text-primary font-semibold text-gold-400">
                  {step.title}
                </h4>
                <p className="text-gray-300">{step.description}</p>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Financial Aid */}
      <motion.section className="z-30 h-full py-5 md:py-10 md:px-20 to-secondary bg-gradient-to-b from-black via-transparent">
        <motion.div className=" grid md:grid-cols-3 gap-6 px-6">
          <motion.span>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl text-center md:text-start md:text-4xl font-bold text-primary "
            >
              FInancial Assistance
            </motion.h2>
            <motion.p className="text-sm text-center md:text-start md:text-base">
              At XCUXION School, we are committed to making tech education
              accessible to talented individuals, regardless of financial
              background.
            </motion.p>
          </motion.span>
          {aid.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black md:p-6 rounded-xl shadow-lg w-full shrink-0"
            >
              <AidCard {...category} key={index} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
