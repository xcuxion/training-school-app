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
    <footer className="flex flex-col md:flex-row md:flex-between bg-dark text-light p-4 md:p-10 gap-y-4 md:gap-y-0">
      <div className="md:w-2/5">
        <Image src={"/logo.svg"} alt="" width={150} height={45} className="" />
        <p className="">
          XCUXION is a forward-thinking company dedicated to empowering
          individuals and organizations to achieve their full potential through
          technology and innovation. By combining education, entrepreneurship,
          and engineering, XCUXION creates a unique ecosystem that fosters
          growth, creativity, and impact.
        </p>
      </div>
      <div className="">
        <h3 className="">Quick Links</h3>
        <ul className="flex flex-col">
          {redirects.map((link, index) => (
            <Link href={link.href} key={index}>
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
      <InquiryForm />
    </footer>
  );
};

export default Footer;
