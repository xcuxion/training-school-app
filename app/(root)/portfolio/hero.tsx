import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CourseCard from "./item-list";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
    id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="h-screen px-20 flex flex-between "
    >
      <motion.span
        className="w-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.h1 className="text-6xl font-bold">
          School of Engineering & Techpreneurship
        </motion.h1>
        <motion.p className="text-2xl my-2">
          An educational program designed to empower aspiring technologists and
          entrepreneurs. We equip students with the skills and mindset needed to
          build and scale innovative ventures.
        </motion.p>

        <Button
          variant={"default"}
          className=" rounded-full scale-125 mt-1 ml-4 "
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
        className=" mt-3 md:t-0 md:w-[500px] md:h-[500px] object-cover rounded-full"
      />
    </motion.div>
  );
};

export default Hero;
