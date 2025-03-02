"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
    {
      icon: '/icons/dashboard.svg',
      href: '/school/learning-space',
    },
    {
      icon: '/icons/discussion.svg',
      href: '/school/learning-space/discussions',
    },
    {
      icon: '/icons/assignment-sidebar.svg',
      href: '/school/learning-space/case',
    },
    {
      icon: '/icons/library.svg',
      href: '/school/learning-space/library',
    },
  ];
  

const MobileNav = () => {
  const pathname = usePathname();

  return <div className="w-full px-10 h-16 flex flex-between fixed bottom-0 left-0 bg-black md:hidden">
        {links.map((link, index) => {
          const active =
            (link.href === "/school" &&
              pathname === "/school") ||
            (pathname.startsWith(link.href) &&
              link.href !== "/school");
          return (
            <Link
              key={index}
              href={link.href}
              className={
                active ? "rounded-full p-2 bg-secondary" : " opacity-70"
              }
            >
              <Image src={link.icon} alt="" width={24} height={24} />
            </Link>
          );
        })}
  </div>;
};

export default MobileNav;
