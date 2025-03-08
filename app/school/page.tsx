"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import CoursesSection from "./portfolio/courses-section";
import AidCard from "./portfolio/aid-card";
import Footer from "../(root)/portfolio/footer";
import Link from "next/link";
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
    title: "Tuition-Free Enrollment",
    summary:
      "For highly skilled and passionate individuals who contribute significantly to XCUXION's mission.",
    benefits: [
      "Full tuition coverage",
      "Mentorship and leadership opportunities",
      "Hands-on experience assisting facilitators",
      "Exclusive networking and project opportunities",
    ],
    eligibility: [
      "Demonstrated prior knowledge in chosen field",
      "Strong passion for technology and entrepreneurship",
      "Willingness to mentor and assist peers",
      "Recommendation from a facilitator or staff member",
    ],
    requirements: [
      "Must actively contribute to the XCUXION community",
      "Provide a recommendation from a facilitator or staff",
      "Show exceptional value beyond technical skills",
    ],
  },
  {
    title: "Student Offer",
    summary:
      "A significantly discounted tuition plan for tertiary students who aspire to excel in tech and leadership.",
    benefits: [
      "Reduced tuition fees",
      "Real-world project experience",
      "Mentorship from industry experts",
      "Internship and startup opportunities",
    ],
    eligibility: [
      "Must be a currently enrolled tertiary student",
      "Demonstrated adaptability and eagerness to learn",
      "Commitment to contributing to peer development",
      "Desire to become a future leader in tech",
    ],
    requirements: [
      "Proof of tertiary enrollment",
      "Commitment to program engagement and peer collaboration",
      "Demonstrate passion for innovation and problem-solving",
    ],
  },
  {
    title: "Standard Enrollment",
    summary:
      "For professionals, career changers, and entrepreneurs looking to gain top-tier tech skills.",
    benefits: [
      "Comprehensive tech and business training",
      "Hands-on mentorship and real-world projects",
      "Access to a network of tech innovators and startup founders",
      "Flexible learning for career transitions",
    ],
    eligibility: [
      "Open to all individuals passionate about tech",
      "Aspiring entrepreneurs, career switchers, and tech enthusiasts",
      "No prior experience required—just a willingness to learn",
    ],
    requirements: [
      "Commitment to completing the program",
      "Active participation in hands-on projects",
      "Dedication to building a career in tech or launching a startup",
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
                {index + 1}
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
      <motion.section id="finance" className="w-full z-30 h-full py-5 md:py-10 md:px-20 px-5 bg-gradient-to-b from-black via-transparent to-secondary">
        <motion.div className="flex flex-col">
          <motion.span className="md:w-3/5 mx-auto text-center mb-3 md:mb-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-2xl md:text-4xl font-bold text-primary "
            >
              Financial Assistance
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-sm md:text-base mt-2"
            >
              At XCUXION School, we believe financial constraints should never
              be a barrier to innovation. Our financial aid options ensure
              talented individuals can access world-class tech education,
              regardless of their background.
            </motion.p>
          </motion.span>
          <motion.span className="grid md:grid-cols-3 gap-3 md:gap-6 ">
            {aid.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-secondary p-5 md:p-6 rounded-xl shadow-lg w-full"
              >
                <AidCard {...category} />
              </motion.div>
            ))}
          </motion.span>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
