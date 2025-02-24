"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import Login from "../login";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import Hero from "./hero";
import Services from "./services";
import Faqs from "./faqs";
import Narrative from "./narrative";
import Contact from "./contact";
import { motion } from "framer-motion";
import Register from "../register";
import MobileNavigator from "./mobile-navigator";

const pages = [
  { label: "home", href: "/" },
  { label: "school", href: "/school" },
  { label: "guild", href: "/guild" },
  { label: "Startup Center", href: "/center" },
];

const sections = [
  { label: "home", component: <Hero /> },
  { label: "services", component: <Services /> },
  { label: "faqs", component: <Faqs /> },
  { label: "narrative", component: <Narrative /> },
  { label: "contact", component: <Contact /> },
];

const Navigator = () => {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [activePage, setActivePage] = useState<string>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePage(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
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
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed md:top-0 flex w-full flex-between text-sm md:text-base left-0 z-50 md:gap-4 px-5 md:px-20 py-3 bg-black"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="flex flex-center w-10 h-10 md:hidden">
        <MobileNavigator
          activeSection={activePage}
          setActiveSection={setActivePage}
        />
      </span>
      <Image
        src="/logo.png"
        alt="school logo"
        width={150}
        height={60}
        priority
        className="hidden md:block w-[100px] h-[45px] object-cover"
      />
      <div className="hidden md:flex gap-x-4 relative items-center">
        {pages.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <Link
              href={link.href}
              key={index}
              className={`relative capitalize ${
                isActive
                  ? "font-semibold "
                  : "opacity-50 hover:opacity-100 transition"
              }`}
            >
              {/* {link.label} */}
              {link.label === "home" ? (
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="text-white">
                        Home
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="bg-black p-2 rounded-md shadow-lg">
                        <div className="flex flex-col space-y-2">
                          {sections.map((section) => (
                            <Link
                              key={section.label}
                              href={`#${section.label}`}
                              className="block text-white px-4 py-2 hover:bg-gray-700 rounded-md"
                            >
                              {section.label.charAt(0).toUpperCase() +
                                section.label.slice(1)}
                            </Link>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              ) : (
                <>{link.label}</>
              )}
              {isActive && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-blue-300 rounded-full"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>
      <div className="flex items-center md:ml-8 space-x-2 md:space-x-4">
        <Button
          className="hidden md:block rounded-full h-8 md:h-10"
          onClick={() => setOpenRegister(true)}
        >
          Register
        </Button>
        <Button
          onClick={() => setOpenLogin(true)}
          variant="outline"
          className="w-14 md:w-auto border-2 rounded-full h-8 md:h-10"
        >
          Log in
        </Button>
      </div>
      {openLogin && (
        <Login show={openLogin} onClose={() => setOpenLogin(false)} />
      )}
      {openRegister && (
        <Register show={openRegister} onClose={() => setOpenRegister(false)} />
      )}
    </motion.header>
  );
};

export default Navigator;
