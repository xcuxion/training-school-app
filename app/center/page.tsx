// import React from 'react'

// const Center = () => {
//   return (
//     <div>
//     </div>
//   )
// }

// export default Center
"use client";
import Navigator from "../(root)/portfolio/navigator";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function InnovationCenter() {
  return (
    <div className="relative">
      <Navigator />

      <section className="min-h-screen bg-black text-white py-6 md:py-12 px-5 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center mt-10"
        >
          <h1 className="text-2xl md:text-5xl font-bold text-primary">
            XCUXION Startups & Innovation Center
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Empowering visionary founders to build, scale, and disrupt
            industries.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-12 max-w-5xl mx-auto">
          {/* Startup Founders Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-secondary p-3 md:p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              For Startup Founders
            </h2>
            <ul className="mt-3 text-gray-300 space-y-2">
              <li>🚀 Incubation & mentorship from industry experts</li>
              <li>💡 Access to business development support</li>
              <li>🎯 Build an MVP and refine your startup model</li>
              <li>📈 Funding & investment readiness guidance</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              Apply to our incubation program and accelerate your startup
              journey.
            </p>
            <Link
              href="/center/apply"
              className="block mt-4 bg-primary text-sm md:text-base text-black text-center py-2 rounded-md md:rounded-lg font-semibold hover:bg-yellow-400 transition"
            >
              Apply for Incubation
            </Link>
          </motion.div>

          {/* Business & Investors Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-secondary p-3 md:p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              For Businesses & Investors
            </h2>
            <ul className="mt-3 text-gray-300 space-y-2">
              <li>🔍 Discover high-potential startups</li>
              <li>💼 Partner with innovative ventures</li>
              <li>📊 Invest in the future of tech</li>
            </ul>
            <p className="mt-4 text-sm text-gray-400">
              Connect with emerging startups and explore partnership
              opportunities.
            </p>
            <Link
              href="https://wa.me/233207565990"
              className="mt-4 bg-white text-sm md:text-base text-black text-center py-2 rounded-md md:rounded-lg font-semibold flex items-center justify-center hover:border hover:border-primary transition"
            >
              <FaWhatsapp className="mr-2 text-xl" /> Chat with Us on WhatsApp
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center mt-12 text-gray-400"
        >
          <p>Join the XCUXION Innovation Center and shape the future.</p>
          <Link href="/" className="text-primary font-semibold">
            Go To Homepage
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
