"use clien";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import Login from "../login";
import Link from "next/link";

const links = [
  {
    href: '',
    label: 'Home'
  },
  {
    href: '#courses',
    label: 'Courses'
  },
  {
    href: '#facilitators',
    label: 'Facilitators'
  },
  {
    href: '#faqs',
    label: 'FAQs'
  },
  {
    href: '#contact',
    label: 'Contact'
  },
]

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="px-4 md:px-10 w-full h-12 md:h-16 sticky top-0 left-0 flex flex-between py-2 bg-white z-50">
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
      <div className="">
        {
          links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className={` ${
                link.href === location.pathname? "" : ""
              } `}
            >
              {link.label}
            </Link>
          ))
        }
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
    </div>
  );
};

export default Header;
