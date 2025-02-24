// "use client";

// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// import { motion } from "framer-motion";

// const content = [
//   {
//     title: "XCUXION School",
//     content:
//       "We equip aspiring entrepreneurs and technologists with the necessary skills to thrive in today's competitive landscape. Our comprehensive training programs cover engineering, techpreneurship, and business strategy to ensure our participants are industry-ready.",
//   },
//   {
//     title: "XCUXION Guild",
//     content:
//       "XCUXION provides a structured approach to transforming innovative ideas into viable, market-ready products. Through mentorship, incubation, and resource allocation, we guide startups from ideation to execution. The Guild provides hands-on experience, project-based learning, and collaboration opportunities, enabling professionals to work on impactful technology solutions.",
//   },
//   {
//     title: "XCUXION Innovations & Startups Center",
//     content:
//       "We leverage our vast network to create opportunities for our participants, connecting them with investors, industry leaders, and potential partners. Whether through pitch events, funding rounds, or strategic alliances, we ensure our community gets the exposure they need to succeed. We incubate and support innovative startups by providing mentorship, funding guidance, and access to a robust entrepreneurial ecosystem. Our center nurtures groundbreaking ideas and helps transform them into successful businesses.",
//   },
// ];

// const Narrative = () => {
//   return (
//     <motion.div className="z-10 bg-gateway bg-no-repeat bg-cover bg-center min-h-screen w-full flex flex-col md:flex-row flex-center md:flex-between px-5 py-6 md:px-20 md:py-10">
//       <motion.div className="w-full md:w-1/3 md:space-y-6">
//         <motion.h1 className="text-xl md:text-4xl font-bold text-primary">Our Narrative</motion.h1>

//         <motion.div>
//           <motion.h2 className="text-lg md:text-2xl font-semibold text-white">Our Mission</motion.h2>
//           <motion.p className="text-base text-gray-300">
//             To empower aspiring entrepreneurs and technologists with cutting-edge skills, mentorship, and resources, enabling them to build innovative, sustainable, and impactful solutions for the future.
//           </motion.p>
//         </motion.div>

//         <motion.div>
//           <motion.h2 className="text-lg md:text-2xl font-semibold text-white">Our Vision</motion.h2>
//           <motion.p className="text-base text-gray-300">
//             To be the leading ecosystem for nurturing techpreneurs, fostering innovation, and driving economic transformation through technology-driven entrepreneurship.
//           </motion.p>
//         </motion.div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="w-full md:w-3/5 mt-4"
//       >
//         <Accordion type="single" collapsible defaultValue="item-0" className="space-y-2">
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

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Register from "../register";

const Narrative = () => {
  const [openRegister, setOpenRegister] = useState<boolean>(false);

  return (
    <motion.div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-gateway bg-no-repeat bg-cover bg-center text-white px-6 md:px-20 py-10">
      {/* The Overarching Vision */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-primary">
          We Don't Just Build Businesses, We Build The Future
        </h1>
        <p className="mt-4 text-lg text-gray-300 md:text-xl">
          XCUXION is more than a training ground—it’s a launchpad for
          visionaries, a battleground for disruptors, and a sanctuary for those
          who dare to create. We don’t just talk about innovation; we live it.
        </p>
      </motion.div>

      {/* The Three Pillars of XCUXION */}
      <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-black/80 p-6 rounded-2xl border border-outline shadow-lg hover:shadow-xl hover:bg-black/90 transition"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-primary">
              {pillar.title}
            </h2>
            <p className="mt-2 text-gray-300">{pillar.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="mt-12"
      >
        <Button
          onClick={() => setOpenRegister(true)}
          className="px-6 py-3 text-lg font-semibold"
        >
          Join The Movement
        </Button>

      </motion.div>
      {openRegister && (
        <Register show={openRegister} onClose={() => setOpenRegister(false)} />
      )}
    </motion.div>
  );
};

const pillars = [
  {
    title: "Mastery Through Action",
    content:
      "We don't just teach; we immerse. Through real-world projects, mentorship, and hands-on experience, you gain skills that actually matter.",
  },
  {
    title: "From Ideas to Reality",
    content:
      "Your vision deserves more than just a notebook. We provide the ecosystem, the tools, and the network to turn your ideas into scalable products.",
  },
  {
    title: "Opportunities Beyond Borders",
    content:
      "A global network of investors, industry leaders, and game-changers—XCUXION connects you to the people and resources that make success inevitable.",
  },
];

export default Narrative;
