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
        <h1 className="text-xl md:text-4xl font-extrabold text-primary">
          We Don't Just Build Businesses, We Build The Future
        </h1>
        <p className="mt-4 text-sm text-gray-300 md:text-xl">
          XCUXION is more than a training ground, it’s a launchpad for
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
