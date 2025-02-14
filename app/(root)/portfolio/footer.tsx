"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import SubmitButton from "@/components/submit-button";
import { FaCopyright } from "react-icons/fa";
import { motion } from "framer-motion";

const redirects = [
  {
    href: "",
    label: "Privacy",
  },
  {
    href: "",
    label: "Support",
  },
  {
    href: "",
    label: "Cookies",
  },
];

const Footer = () => {
  return (
    <motion.footer className="bg-secondary mt-4 px-5 md:px-20 py-5 md:py-10 flex flex-col md:flex-row md:items-center">
      <div className="grid md:grid-cols-2">
        <span className="">
          <h3 className="font-medium">Stay Updated</h3>
          <p className="opacity-75">
            Subscribe to our newsletter for updates, news, and exclusive
            content.
          </p>
          <form className="flex">
            <Input className="mr-1" placeholder="Email address" name="subscriber" type="email" />
            <SubmitButton buttonText="Subscribe" />
          </form>
        </span>
      </div>

      <div className="mt-4  md:mt-0">
        <div className="flex md:flex-row flex-col">
          <Image
            src={"/logo.png"}
            alt=""
            width={150}
            height={45}
            className=""
          />
        <span className="">
          {redirects.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="p-3 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </span>
        </div>
        <span className="flex items-center mt-8 text-sm">
          <FaCopyright className="text-base mr-1" /> {new Date().getFullYear()} All
          rights reserved.
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;
