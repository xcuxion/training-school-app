"use client"
import React from "react";
import { motion } from "framer-motion";
interface IAid {
  title: string;
  requirements: string[];
  benefits: string[];
  eligibility: string[];
}
const AidCard = ({ title, requirements, benefits, eligibility }: IAid) => {
  return (
    <motion.div className="flex flex-col gap-y-2 md:gap-y-6">
      <h2 className="text-xl md:text-3xl">{title}</h2>
      <span className="">
        <h4 className="md:text-xl opacity-50">Eligibility</h4>
        <ol className="text-sm md:text-base list-decimal list-inside">
          {eligibility.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ol>
      </span> 
      <span className="">
        <h4 className="md:text-xl opacity-50">Requirements</h4>
        <ol className="text-sm md:text-base list-decimal list-inside">
          {requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ol>
      </span>
    </motion.div>
  );
};

export default AidCard;
