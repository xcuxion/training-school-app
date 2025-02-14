"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Admission = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col gap-10 bg-admission-bg bg-no-repeat bg-cover justify-center text-white px-5 md:px-20 py-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-lg p-8 bg-gradient-to-br from-slate-900 via-gray-900 to-black shadow-xl"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary leading-tight">Admission Process</h1>
        <p className="text-lg md:text-xl mb-4 leading-relaxed text-gray-300">
          Embark on your journey with <span className="text-dark font-bold">XCUXION School</span> to become a tech innovator! Our admission process is designed to be straightforward and transparent:
        </p>
        <ul className="list-disc list-inside text-left space-y-3 text-base md:text-lg text-gray-200">
          <li>Submit your application through our official web portal.</li>
          <li>Attach all required supporting documents in PDF format.</li>
          <li>Shortlisted candidates will be invited for an interview (virtual or in-person).</li>
          <li>Selection is based on merit, financial need, and commitment to completing the program.</li>
        </ul>
        <Button variant="default" className="mt-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-primary  px-6 py-3" asChild>
          <Link href="/apply">Apply Now</Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-lg p-8 bg-gradient-to-br from-black via-gray-800 to-black shadow-xl"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary leading-tight">Financial Aid & Scholarships</h2>
        <p className="text-lg md:text-xl mb-4 leading-relaxed text-gray-300">
          At <span className="text-dark font-bold">XCUXION School</span>, we are committed to making tech education accessible to talented individuals, regardless of financial background. Our Batch ‘25 Training Program offers three financial aid options:
        </p>
        <div className="text-left space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-accent leading-snug">1. Full Scholarship</h3>
            <p className="text-lg leading-relaxed">
              <strong>What It Covers:</strong><ul className='list-disc list-inside ml-4'><li>Full tuition coverage</li><li>Mentorship and incubation support</li><li>Access to all learning materials and resources</li></ul></p>
            <p className="text-lg leading-relaxed">
              <strong>Eligibility:</strong><ul className='list-disc list-inside ml-4'><li>Demonstrated financial need</li><li>Exceptional academic or professional background</li><li>Commitment to complete the program</li></ul></p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-accent leading-snug">2. Partial Scholarship</h3>
            <p className="text-lg leading-relaxed">
              <strong>What It Covers:</strong><ul className='list-disc list-inside ml-4'><li>Full tuition coverage</li><li>Mentorship and incubation support</li><li>Access to all learning materials and resources</li></ul></p>
            <p className="text-lg leading-relaxed">
              <strong>Eligibility:</strong><ul className='list-disc list-inside ml-4'><li>Demonstrated financial need</li><li>Exceptional academic or professional background</li><li>Commitment to complete the program</li></ul></p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-accent leading-snug">3. Standard Enrollment</h3>
            <p className="text-lg leading-relaxed">
              <strong>Fee Structure:</strong> Enrollment Fee (GHS 100) and Tuition Fee (GHS 750 - GHS 950), covering full training, mentorship, and incubation support.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Eligibility:</strong><ul className='list-disc list-inside ml-4'><li>Demonstrated financial need</li><li>Exceptional academic or professional background</li><li>Commitment to complete the program</li></ul></p>
          </div>
        </div>
        <Button variant="default" className="mt-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-primary  px-6 py-3" asChild>
          <Link href="/scholarships">Learn More</Link>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="rounded-lg p-8 bg-gradient-to-br from-slate-900 via-gray-900 to-black shadow-xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Financial Plan</h2>
        <p className="text-lg md:text-xl mb-6">
          To ensure financial responsibility, all students must adhere to a
          structured three-month financial plan:
        </p>
        <ul className="list-disc list-inside text-left space-y-2">
          <li>Month 1: Enrollment Fee Payment</li>
          <li>Month 2: 50% of remaining tuition balance</li>
          <li>Month 3: Final 50% tuition balance</li>
        </ul>
        <p className="text-lg mt-4">
          <strong>Consequences of Non-Adherence:</strong> Late payment penalty,
          access restrictions, scholarship revocation, or program dismissal.
        </p>
        <Button variant="default" className="mt-6 rounded-full shadow-lg" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Admission;

