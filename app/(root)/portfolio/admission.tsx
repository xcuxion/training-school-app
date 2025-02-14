import React from "react";
import { motion } from "framer-motion";

const Admission = () => {
  return (
    <motion.section
      id="admission"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex  items-center bg-admission-bg bg-no-repeat bg-cover justify-center  text-dark px-5 md:px-20 text-center"
    >
      <motion.div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black">
        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          Admission Process
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-3xl">
          Join XCUXION School and embark on your journey to becoming a tech
          innovator! Our admission process is simple:
        </p>
          <ul className="list-disc text-left mt-4">
            <li>Submit your application online.</li>
            <li>Attend an interview with our admissions team.</li>
            <li>Receive your admission decision within two weeks.</li>
          </ul>
      </motion.div>
      <motion.div className="">
        <h2 className="text-3xl md:text-5xl font-bold mb-5">Financial Aid</h2>
        <p className="text-lg md:text-2xl max-w-3xl">
          We believe in equal opportunity. XCUXION School offers financial aid
          and scholarships to deserving students, ensuring that financial
          constraints do not hinder your aspirations.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default Admission;
