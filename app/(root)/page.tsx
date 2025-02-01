"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Faqs from "./portfolio/faqs";

const Portfolio = () => {
  return (
    <Parallax pages={5} className="">
      <ParallaxLayer offset={0} speed={0.5} className="">
        <motion.header
          className="t"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        ></motion.header>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.3} className="">

      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.2}
        className=""
      >

      </ParallaxLayer>

      <ParallaxLayer
        offset={3}
        speed={0.2}
        className=""
      >

      </ParallaxLayer>

      <ParallaxLayer
        offset={4}
        speed={0.2}
        className=""
      >
        <Faqs />
      </ParallaxLayer>

      <ParallaxLayer
        offset={5}
        speed={0.2}
        className=""
      ></ParallaxLayer>

      <ParallaxLayer
        offset={6}
        speed={0.2}
        className=""
      >

      </ParallaxLayer>
    </Parallax>
  );
};

export default Portfolio;
