// "use client";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { motion } from "framer-motion";

// const content = [
//   {
//     title: "Knowledge & Skills Acquisition",
//     content:
//       "We equip aspiring entrepreneurs and technologists with the necessary skills to thrive in today's competitive landscape. Our comprehensive training programs cover engineering, techpreneurship, and business strategy to ensure our participants are industry-ready.",
//   },
//   {
//     title: "Translating Ideas Into Products",
//     content:
//       "XCUXION provides a structured approach to transforming innovative ideas into viable, market-ready products. Through mentorship, incubation, and resource allocation, we guide startups from ideation to execution.",
//   },
//   {
//     title: "Connecting You To Opportunities",
//     content:
//       "We leverage our vast network to create opportunities for our participants, connecting them with investors, industry leaders, and potential partners. Whether through pitch events, funding rounds, or strategic alliances, we ensure our community gets the exposure they need to succeed.",
//   },
// ];

// const Narrative = () => {
//   return (
//     <motion.div className="z-10 bg-gateway bg-no-repeat bg-cover bg-center min-h-screen w-full flex flex-col md:flex-row flex-center md:flex-between px-20 py-10">
//       <motion.div>
//         <motion.h1 className="text-xl md:text-4xl ">Our narrative</motion.h1>
//         <motion.p></motion.p>
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="md:w-2/3 mt-4"
//       >
//         <Accordion type="single" collapsible className="space-y-2">
//           {content.map((section, index) => (
//             <AccordionItem
//               className="border border-outline rounded-md px-4 bg-black"
//               key={index}
//               value={`item-${index}`}
//             >
//               <AccordionTrigger className="font-semibold md:text-lg">
//                 {section.title}
//               </AccordionTrigger>
//               <AccordionContent className="text-base">
//                 {section.content}
//               </AccordionContent>
//             </AccordionItem>
//           ))}
//         </Accordion>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Narrative;

"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const content = [
  {
    title: "XCUXION School",
    content:
      "We equip aspiring entrepreneurs and technologists with the necessary skills to thrive in today's competitive landscape. Our comprehensive training programs cover engineering, techpreneurship, and business strategy to ensure our participants are industry-ready.",
  },
  {
    title: "XCUXION Guild",
    content:
      "XCUXION provides a structured approach to transforming innovative ideas into viable, market-ready products. Through mentorship, incubation, and resource allocation, we guide startups from ideation to execution. The Guild provides hands-on experience, project-based learning, and collaboration opportunities, enabling professionals to work on impactful technology solutions.",
  },
  {
    title: "XCUXION Innovations & Startups Center",
    content:
      "We leverage our vast network to create opportunities for our participants, connecting them with investors, industry leaders, and potential partners. Whether through pitch events, funding rounds, or strategic alliances, we ensure our community gets the exposure they need to succeed. We incubate and support innovative startups by providing mentorship, funding guidance, and access to a robust entrepreneurial ecosystem. Our center nurtures groundbreaking ideas and helps transform them into successful businesses.",
  },
];

const Narrative = () => {
  return (
    <motion.div className="z-10 bg-gateway bg-no-repeat bg-cover bg-center min-h-screen w-full flex flex-col md:flex-row flex-center md:flex-between px-5 py-6 md:px-20 md:py-10">
      <motion.div className="w-full md:w-1/3 md:space-y-6">
        <motion.h1 className="text-xl md:text-4xl font-bold text-primary">Our Narrative</motion.h1>
        
        <motion.div>
          <motion.h2 className="text-lg md:text-2xl font-semibold text-white">Our Mission</motion.h2>
          <motion.p className="text-base text-gray-300">
            To empower aspiring entrepreneurs and technologists with cutting-edge skills, mentorship, and resources, enabling them to build innovative, sustainable, and impactful solutions for the future.
          </motion.p>
        </motion.div>
        
        <motion.div>
          <motion.h2 className="text-lg md:text-2xl font-semibold text-white">Our Vision</motion.h2>
          <motion.p className="text-base text-gray-300">
            To be the leading ecosystem for nurturing techpreneurs, fostering innovation, and driving economic transformation through technology-driven entrepreneurship.
          </motion.p>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-3/5 mt-4"
      >
        <Accordion type="single" collapsible defaultValue="item-0" className="space-y-2">
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
