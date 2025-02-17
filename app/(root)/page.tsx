"use client";
import React, { useEffect, useState } from "react";
import Faqs from "./portfolio/faqs";
import Hero from "./portfolio/hero";
import CoursesSection from "./portfolio/courses-section";
import Team from "./portfolio/admission";
import Contact from "./portfolio/contact";
import Footer from "./portfolio/footer";
import Link from "next/link";
import Login from "./login";
import { Button } from "@/components/ui/button";
import MobileNavigator from "./portfolio/mobile-navigator";

const sections = ["home", "courses", "admission", "faqs", "contact"];

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;

        if (
          scrollPosition >= offsetTop - windowHeight / 2 &&
          scrollPosition < offsetBottom - windowHeight / 2
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative ">
      <header className="fixed md:bottom-10 flex w-full md:w-auto flex-between text-sm md:text-base left-0 md:left-1/2 transform md:-translate-x-1/2 z-50 md:gap-4 bg-gray-900 bg-opacity-50 p-3 rounded-full">
        <nav className="hidden md:flex ">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`transition-colors duration-300 px-4 py-2 rounded-full text-white ${
                activeSection === section ? "bg-black text-black" : "opacity-50"
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
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
            variant={"default"}
            className=" rounded-full h-8 md:h-10"
            asChild
          >
            <Link href="/apply">Apply</Link>
          </Button>
          <Button
            onClick={() => {
              setOpenLogin(true);
            }}
            variant={"outline"}
            className="border-2 border-primary text-primary rounded-full h-8 md:h-10"
          >
            Log in
          </Button>
        </div>
        {openLogin && (
          <Login show={openLogin} onClose={() => setOpenLogin(false)} />
        )}
      </header>
      <section
        id="home"
        className={`${
          activeSection === "home" ? " block" : "hidden"
        } h-screen`}
      >
        <Hero />
      </section>
      <section
        id="courses"
        className={`${
          activeSection === "courses" ? "pt-10 md:pt-0 block" : "hidden"
        } h-screen`}
      >
        <CoursesSection />
      </section>
      <section
        id="admission"
        className={`${
          activeSection === "admission" ? "pt-10 md:pt-0 block" : "hidden"
        } h-screen`}
      >
        <Team />
      </section>
      <section
        id="faqs"
        className={`${
          activeSection === "faqs" ? "pt-10 md:pt-0 block" : "hidden"
        } h-screen`}
      >
        <Faqs />
      </section>
      <section
        id="contact"
        className={`${
          activeSection === "contact" ? "pt-10 md:pt-0 block" : "hidden"
        } h-screen`}
      >
        <Contact />
      </section>
    </div>
  );
};

export default Portfolio;
