"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Register from "../register";

const Hero = () => {
  const [openRegister, setOpenRegister] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative h-screen px-5 md:px-20 flex md:flex-row flex-col-reverse items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        poster="/images/wallpaper.jpg"
        controlsList="nodownload nofullscreen noremoteplayback"
        className="fixed top-0 left-0 w-full h-full object-cover z-0 bg-cover"
      >
        <source src="/videos/schoolvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-5"></div>

      <motion.span
        className="md:w-3/4 flex flex-col flex-center text-center text-white z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-7xl font-bold drop-shadow-lg"
        >
          We help you turn your ideas into startups
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-sm md:text-xl my-4 drop-shadow-md"
        >
          At Xcuxion, we are all about empowering you by actualizing your
          dreams. We offer you with custom-tailored services that will quickly
          move you from just an idea to a business venture.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button
            variant={"default"}
            className="rounded-full md:scale-125 md:mt-4 shadow-lg hover:bg-white hover:text-black transition-colors"
            onClick={() => setOpenRegister(true)}
          >
            Join us!
          </Button>
        </motion.div>
      </motion.span>
      {openRegister && (
        <Register show={openRegister} onClose={() => setOpenRegister(false)} />
      )}
    </motion.div>
  );
};

export default Hero;
