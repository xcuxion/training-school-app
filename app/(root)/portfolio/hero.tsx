import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative min-h-screen md:h-screen px-5 md:px-20 flex md:flex-row flex-col-reverse items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-10 bg-cover"
      >
        <source src="/videos/classroom.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <motion.span
        className="md:w-3/4 flex flex-col flex-center text-center text-white z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Image
          src="/logo.png"
          alt="school logo"
          width={300}
          height={200}
          className=""
          />
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl md:text-6xl font-bold drop-shadow-lg"
        >
          School of Engineering & Techpreneurship
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base md:text-2xl my-2 drop-shadow-md"
        >
          An educational program designed to empower aspiring technologists and
          entrepreneurs. We equip students with the skills and mindset needed to
          build and scale innovative ventures.
        </motion.p>

        <Button
          variant={"default"}
          className="rounded-full md:scale-125 md:mt-1 md:ml-4 shadow-lg"
          asChild
        >
          <Link href="/apply">Start Your Application!</Link>
        </Button>
      </motion.span>

    </motion.div>
  );
};

export default Hero;
