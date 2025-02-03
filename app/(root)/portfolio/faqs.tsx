"use client";
import React, { ReactElement } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface IFaq {
  question: string;
  answer: string | ReactElement;
}

const faqs: IFaq[] = [
  {
    question: "What is XCUXION?",
    answer:
      "XCUXION is a nonprofit organization dedicated to training and supporting aspiring entrepreneurs, particularly tertiary students, to build and launch successful startups. Our one-year techpreneurship training program equips participants with essential skills in software engineering, business analytics, marketing, product management, and startup strategy.",
  },
  {
    question: "How does XCUXION support startups?",
    answer:
      "We provide structured training, mentorship, hands-on project development, and an incubation period for promising startups. Our program also includes pitching opportunities to help participants secure funding and industry connections.",
  },
  {
    question: "Who can apply for the XCUXION training program?",
    answer:
      "Our program primarily targets tertiary students, but anyone passionate about entrepreneurship and willing to commit to the one-year journey can apply. We offer significant subsidies for tertiary students.",
  },
  {
    question: "When do applications open, and how do I apply?",
    answer: (
      <>
        Applications for the Batch '25 program will open in February 2025.
        Interested applicants can apply through our official website by filling
        out an online application form <Link href={"/apply"}>here</Link>.
      </>
    ),
  },
  {
    question: "What are the admission criteria?",
    answer: (
      <ul className="list-disc pl-4">
        <li>Passion for entrepreneurship and innovation</li>
        <li>
          A basic understanding of problem-solving and technology (no coding
          experience required)
        </li>
        <li>Willingness to commit to the one-year program</li>
      </ul>
    ),
  },
  {
    question: "Is the program online or in-person?",
    answer:
      "The program is primarily online using a custom-built web platform. However, there will be minimal in-person meetups for networking, collaboration, and pitching.",
  },
];

const Faqs = () => {
  return (
    <motion.div
      id="faqs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="px-5 md:px-20 min-h-screen bg-gray-100  flex flex-col flex-center"
    >
      <motion.h3 className="text-xl md:text-4xl text-center md:w-1/2 mx-auto font-semibold">
        FAQs
      </motion.h3>
      <motion.p 
      className="md:text-lg md:w-1/2 text-center mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Check out our frequently asked questions below to find the answers you're looking for
    </motion.p>
      <div className="md:w-2/3 mt-4">
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              className="border px-4 bg-gray-50"
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger className="font-semibold md:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
};

export default Faqs;
