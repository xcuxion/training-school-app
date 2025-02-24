"use client";
import React from "react";
import Services from "./portfolio/services";
import Faqs from "./portfolio/faqs";
import Hero from "./portfolio/hero";
import Contact from "./portfolio/contact";
import Narrative from "./portfolio/narrative";
import Navigator from "./portfolio/navigator";

const sections = [
  { label: "home", component: <Hero /> },
  { label: "services", component: <Services /> },
  { label: "faqs", component: <Faqs /> },
  { label: "narrative", component: <Narrative /> },
  { label: "contact", component: <Contact /> },
];

const Portfolio: React.FC = () => {
  return (
    <div className="relative">
      <Navigator />
      {/* Sections */}
      {sections.map((section) => (
        <section
          key={section.label}
          id={section.label}
          className="min-h-screen flex items-center justify-center"
        >
          {section.component}
        </section>
      ))}
    </div>
  );
};

export default Portfolio;
