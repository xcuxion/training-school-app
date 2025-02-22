"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const content = [
  {
    title: "Knowledge & Skills Acquisition",
    content:
      "We equip aspiring entrepreneurs and technologists with the necessary skills to thrive in today's competitive landscape. Our comprehensive training programs cover engineering, techpreneurship, and business strategy to ensure our participants are industry-ready.",
  },
  {
    title: "Translating Ideas Into Products",
    content:
      "XCUXION provides a structured approach to transforming innovative ideas into viable, market-ready products. Through mentorship, incubation, and resource allocation, we guide startups from ideation to execution.",
  },
  {
    title: "Connecting You To Opportunities",
    content:
      "We leverage our vast network to create opportunities for our participants, connecting them with investors, industry leaders, and potential partners. Whether through pitch events, funding rounds, or strategic alliances, we ensure our community gets the exposure they need to succeed.",
  },
];

const Narrative = () => {
  return (
    <motion.div className="z-10 bg-gateway bg-no-repeat bg-cover bg-center min-h-screen w-full flex flex-between px-20 py-10">
      <motion.div>
        <motion.h1>Our narrative</motion.h1>
        <motion.p></motion.p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-2/3 mt-4"
      >
        <Accordion type="single" collapsible className="space-y-2">
          {content.map((section, index) => (
            <AccordionItem
              className="border border-outline rounded-md px-4 bg-black"
              key={index}
              value={`item-${index}`}
            >
              <AccordionTrigger className="font-semibold md:text-lg">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {section.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  );
};

export default Narrative;
