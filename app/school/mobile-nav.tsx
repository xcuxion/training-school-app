import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
    {
      icon: '/icons/dashboard.svg',
      href: '/school',
    },
    {
      icon: '/icons/discussion.svg',
      href: '/school/discussions',
    },
    {
      icon: '/icons/assignment-sidebar.svg',
      href: '/school/case',
    },
    {
      icon: '/icons/library.svg',
      href: '/school/library',
    },
  ];
  

const MobileNav = () => {
  return <div className="w-full px-10 h-16 flex flex-between fixed bottom-0 left-0 bg-white md:hidden">{
    links.map((link, index) => (
      <Link href={link.href} key={index}>
        <Image src={link.icon} alt="" width={24} height={24} />
      </Link>
    ))
  }</div>;
};

export default MobileNav;
