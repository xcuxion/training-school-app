"use client";
import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import MobileNavigator from "../(root)/portfolio/mobile-navigator";
import { Button } from "@/components/ui/button";
import Login from "../(root)/login";
import Register from "../(root)/register";
import Services from "./portfolio/services";
import Faqs from "./portfolio/faqs";
import Hero from "./portfolio/hero";
import Contact from "./portfolio/contact";
import Image from "next/image";
import Narrative from "./portfolio/narrative";

const sections = [
  { label: "home", component: <Hero /> },
  { label: "services", component: <Services /> },
  { label: "faqs", component: <Faqs /> },
  { label: "narrative", component: <Narrative /> },
  { label: "contact", component: <Contact /> },
];

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px", // Triggers when the section is in the middle of the viewport
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.label);
      if (element) {
        sectionRefs.current[section.label] = element;
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = sectionRefs.current[section.label];
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="relative ">
      <header className="fixed md:top-0 flex w-full md:w-[60%] flex-between  text-sm md:text-base left-0 md:left-1/2 transform md:-translate-x-1/2 z-50 md:gap-4 p-3 rounded-full bg-black ">
        <Image
          src="/logo.png"
          alt="school logo"
          width={150}
          height={60}
          priority
          className="hidden md:block w-[100px] h-[45px] object-cover"
        />
        <nav className="hidden md:flex ">
          {sections.map((section) => (
            <Link
              key={section.label}
              href={`#${section.label}`}
              className={`transition-colors duration-300 px-4 py-2 rounded-full ${
                activeSection === section.label
                  ? "bg-black text-white"
                  : "opacity-50"
              }`}
            >
              {section.label.charAt(0).toUpperCase() + section.label.slice(1)}
            </Link>
          ))}
        </nav>
        <span className="flex flex-center w-10 h-10 md:hidden">
          <MobileNavigator
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </span>
        <div className="flex items-center md:ml-8 space-x-2 md:space-x-4">
          <Button
            className="rounded-full h-8 md:h-10"
            onClick={() => setOpenRegister(true)}
          >
            Register
          </Button>
          <Button
            onClick={() => setOpenLogin(true)}
            variant="outline"
            className="border-2 border-primary text-primary rounded-full h-8 md:h-10"
          >
            Log in
          </Button>
        </div>
        {openLogin && (
          <Login show={openLogin} onClose={() => setOpenLogin(false)} />
        )}
        {openRegister && (
          <Register
            show={openRegister}
            onClose={() => setOpenRegister(false)}
          />
        )}
      </header>

      {/* Sections */}
      {sections.map((section) => (
        <section
          key={section.label}
          id={section.label}
          className={`transition-opacity duration-500 ${
            activeSection === section.label ? "opacity-100" : "opacity-100"
          } min-h-screen flex items-center justify-center`}
        >
          {section.component}
        </section>
      ))}
    </div>
  );
};

export default Portfolio;
