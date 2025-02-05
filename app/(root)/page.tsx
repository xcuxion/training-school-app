"use client";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Faqs from "./portfolio/faqs";
import Header from "./portfolio/Header";
import Hero from "./portfolio/hero";
import CoursesSection from "./portfolio/courses-section";
import Team from "./portfolio/facilitators";
import Contact from "./portfolio/contact";
import Footer from "./portfolio/footer";

const Portfolio = () => {
  return (
    <div className="relative flex flex-col">
      <Header />
      {/* <Parallax pages={5} className=""> */}
        {/* Hero Section */}
        {/* <ParallaxLayer offset={0} speed={0.2} factor={1}> */}
          <Hero />
        {/* </ParallaxLayer> */}

        {/* Courses Section */}
        {/* <ParallaxLayer
          offset={1}
          speed={0.4}
          factor={1}
          className="-h-[100vh] py-5"
        > */}
          <CoursesSection />
        {/* </ParallaxLayer> */}

        {/* Team Section */}
        {/* <ParallaxLayer
          offset={2}
          speed={0.3}
          factor={1}
          className=""
        > */}
          <Team />
        {/* </ParallaxLayer> */}

        {/* FAQs Section */}
        {/* <ParallaxLayer
          offset={3}
          speed={0.2}
          factor={1}
          className=""
        > */}
          <Faqs />
        {/* </ParallaxLayer> */}

        {/* Contact Section */}
        {/* <ParallaxLayer
          offset={4}
          speed={0.1}
          factor={1}
          className=""
        > */}
          <Contact />
        {/* </ParallaxLayer> */}

      {/* </Parallax> */}
      <Footer />
    </div>
  );
};

export default Portfolio;
