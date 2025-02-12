import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen md:h-screen px-5 md:px-20 flex md:flex-row flex-col-reverse flex-center md:flex-between"
    >
      <motion.span
        className="md:w-1/2 text-center md:text-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-2xl  md:text-6xl font-bold"
        >
          School of Engineering & Techpreneurship
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-base md:text-2xl my-2 "
        >
          An educational program designed to empower aspiring technologists and
          entrepreneurs. We equip students with the skills and mindset needed to
          build and scale innovative ventures.
        </motion.p>

        <Button
          variant={"default"}
          className=" rounded-full md:scale-125 m:mt-1 md:ml-4 "
          asChild
        >
          <Link href={"/apply"}>Start Your Application!</Link>
        </Button>
      </motion.span>
      <Image
        src={"/images/group.jpg"}
        alt="image"
        width={500}
        height={500}
        className="w-[250px] h-[250px] mb-3 md:mb-0 md:mt-3  md:w-[500px] md:h-[500px] object-cover md:rounded-full"
      />
    </motion.div>
  );
};

export default Hero;
