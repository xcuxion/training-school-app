import Image from "next/image";
import Link from "next/link";
import React from "react";
import InquiryForm from "./inquiry-form";

const support = [
  {
    href: "",
    label: "School Administrator",
  },
  {
    href: "",
    label: "Support Team",
  },
  {
    href: "",
    label: "Career",
  },
];

const redirects = [
  {
    href: "",
    label: "School",
  },
  {
    href: "",
    label: "Guild",
  },
  {
    href: "",
    label: "About Us",
  },
];

const Footer = () => {
  return (
    <footer className="">
      <div className="">
        <Image src={"/logo.svg"} alt="" width={150} height={45} className="" />

      </div>
      <div className="">

      </div>
    </footer>
  );
};

export default Footer;
