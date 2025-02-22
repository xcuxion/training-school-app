"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import CoursesSection from "./portfolio/courses-section";

export default function Home() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-black text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="protected-bg relative bg-mock  bg-no-repeat bg-cover z-0 h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="z-10"
        >
          <h1 className="text-6xl z-30 font-bold text-primary drop-shadow-lg">
            Building the Future of Techpreneurs
          </h1>
          <p className="mt-4 z-30 text-lg max-w-2xl mx-auto">
            Join XCUXION School to gain world-class training in software
            engineering, business strategy, and startup development.
          </p>
          <Button className="mt-6 z-30 px-6 py-3 text-lg bg-primary hover:bg-white hover:scale-105 text-black">
            Start Application <FaArrowRight className="ml-2" />
          </Button>
        </motion.div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/30 to-black" />
      </section>

      {/* Programs */}
      <section className="min-h-screen py-5 md:py-10 md:px-20 px-6 bg-faq-bg bg-no-repeat bg-cover">
        <motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-primary text-center"
          >
            Our Programs
          </motion.h2>{" "}
          <motion.p className="md:text-lg md:w-3/4 mx-auto">
            Gain hands-on training in software development, business strategy,
            and more. Our expert-led courses equip you to launch and scale your
            startup successfully.
          </motion.p>
        </motion.span>
        <CoursesSection />
      </section>

      {/* Admissions */}
      <section className="min-h-screen py-5 md:py-10 md:px-20 bg-galaxybg bg-no-repeat bg-cover">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-primary text-center"
        >
          Our Admissions Process
        </motion.h2>

        <div className="mt-10 flex flex-col px-6 gap-y-6 w-full md:px-20 py-5 md:py-10">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 p-6 shadow-lg shrink-0"
            >
              <p className="text-gray-300">
                "XCUXION transformed my career with hands-on experience and
                real-world projects."
              </p>
              <h4 className="mt-4 font-semibold text-gold-400">
                Jane Doe, Software Engineer
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Financial Aid */}
      <section className="h-screen py-5 md:py-10 md:px-20 bg-secondary">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-primary text-center"
        >
          FInancial Assistance
        </motion.h2>
        <div className="mt-10 flex flex-col gap-6 px-6">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg w-80 shrink-0"
            >
              <p className="text-gray-300">
                "XCUXION transformed my career with hands-on experience and
                real-world projects."
              </p>
              <h4 className="mt-4 font-semibold text-gold-400">
                Jane Doe, Software Engineer
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-black border-t border-gray-700">
        <p className="text-gray-400">
          © 2025 XCUXION School. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
