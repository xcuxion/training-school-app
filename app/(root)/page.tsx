// "use client";
// // import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import React from "react";
// import Faqs from "./portfolio/faqs";
// import Hero from "./portfolio/hero";
// import CoursesSection from "./portfolio/courses-section";
// import Team from "./portfolio/admission";
// import Contact from "./portfolio/contact";
// import Footer from "./portfolio/footer";

// const Portfolio = () => {
//   return (
//     <div className="relative flex flex-col">
//       <Hero />
//       <CoursesSection />
//       <Team />
//       <Faqs />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default Portfolio;

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

const sections = ["home", "courses", "admission", "faqs", "contact"];

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [openLogin, setOpenLogin] = useState(false);

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
      <nav className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex gap-4 bg-black bg-opacity-50 p-3 rounded-full">
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
        <div className="ml-8 space-x-4">
          <Button
            onClick={() => {
              setOpenLogin(true);
            }}
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
        {openLogin ? (
          <Login show={openLogin} onClose={() => setOpenLogin(false)} />
        ) : (
          ""
        )}
      </nav>
      <section
        id="home"
        className={`${activeSection === "home" ? "block" : "hidden"} min-h-screen`}
      >
        <Hero />
      </section>
      <section
        id="courses"
        className={`${activeSection === "courses" ? "block" : "hidden"} min-h-screen`}
      >
        <CoursesSection />
      </section>
      <section
        id="admission"
        className={`${activeSection === "admission" ? "block" : "hidden"} min-h-screen`}
      >
        <Team />
      </section>
      <section
        id="faqs"
        className={`${activeSection === "faqs" ? "block" : "hidden"} min-h-screen`}
      >
        <Faqs />
      </section>
      <section
        id="contact"
        className={`${activeSection === "contact" ? "block" : "hidden"} min-h-screen`}
      >
        <Contact />
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Portfolio;
