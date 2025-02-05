"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import Login from "../login";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#courses",
    label: "Courses",
  },
  {
    href: "#facilitators",
    label: "Facilitators",
  },
  {
    href: "#faqs",
    label: "FAQs",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      className="md:h-16 bg-white z-50 flex flex-between border-b sticky top-0 left-0 md:px-20 px-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center">
        <Image
          src={"/favicon.svg"}
          alt="logo"
          width={45}
          height={45}
          className="mr-2 w-[45px] h-[45px]"
        />
        <h1 className="hidden text-2xl font-bold md:block">XCUXION</h1>
      </div>
      <div className="gap-x-4 flex items-center">
        <div className="hidden md:flex md:gap-x-4">
          {links.map((link, index) => {
            const isActive =pathname.startsWith(link.href) ;
            return (
              <Link
                href={link.href}
                key={index}
                className={` ${isActive} ? "font-semibold text-dark" : "opacity-50"} `}
              >
                {link.label}
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
      </div>
      {openLogin ? (
        <Login show={openLogin} onClose={() => setOpenLogin(false)} />
      ) : (
        ""
      )}
    </motion.header>
  );
};

export default Header;
