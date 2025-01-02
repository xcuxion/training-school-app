import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-between bg-dark">
      <div className="">
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
        <ul>

        </ul>
      </div>
    </div>
  );
};

export default Footer;
