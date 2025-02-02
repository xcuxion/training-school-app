"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InquiryForm from "./inquiry-form";
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
    <motion.footer className="bg-gray-100 mt-4 px-20 s py-10 flex items-center">
      <div className="grid grid-cols-2">
        <span className="">
          <h3 className="font-medium">Stay Updated</h3>
          <p className="opacity-75">
            Subscribe to our newsletter for updates, news, and exclusive
            content.
          </p>
          <form className="flex">
            <Input className="mr-1" name="subscriber" type="email" />
            <SubmitButton buttonText="Subscribe" />
          </form>
        </span>
      </div>

      <div className="">
        <div className="flex">
          <Image
            src={"/logo.svg"}
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
        <span className="flex text-sm">
          <FaCopyright className="text-base" /> {new Date().getFullYear()} All
          rights reserved.
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;
