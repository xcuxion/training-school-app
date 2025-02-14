"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import Login from "../login";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#courses", label: "Courses" },
  { href: "#facilitators", label: "Facilitators" },
  { href: "#faqs", label: "FAQs" },
  { href: "#contact", label: "Contact" },
];

const Navigator = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      className="bg-black bg-opacity-60 z-50 flex justify-center items-center gap-x-4 border-t border-outline rounded-t-2xl shadow-lg fixed bottom-4 left-1/2 transform -translate-x-1/2 w-auto px-6 py-3 backdrop-blur-md"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-x-4 relative">
        {links.map((link, index) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              href={link.href}
              key={index}
              className={`relative text-white text-sm md:text-base ${
                isActive
                  ? "font-semibold text-blue-300"
                  : "opacity-50 hover:opacity-100 transition"
              }`}
            >
              {link.label}
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
      <Button
        onClick={() => {
          setOpenLogin(true);
        }}
        variant={"outline"}
        className="border-2 border-primary text-primary rounded-full h-8 md:h-10"
      >
        Log in
      </Button>
      {openLogin ? (
        <Login show={openLogin} onClose={() => setOpenLogin(false)} />
      ) : (
        ""
      )}
    </motion.nav>
  );
};

export default Navigator;
