"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    icon: '/icons/dashboard.svg',
    href: '/school',
    label: 'Overview',
  },
  {
    icon: '/icons/assignment-sidebar.svg',
    href: '/school/assignment',
    label: 'Assignment',
  },
  {
    icon: '/icons/case.svg',
    href: '/school/case',
    label: 'Case Studies',
  },
  {
    icon: '/icons/library.svg',
    href: '/school/library',
    label: 'Library',
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-screen w-[250px] sticky top-0 left-0 p-4 flex flex-col items-center justify-between bg-white">
      {/* Top Section */}
      <div className="flex items-center mb-12">
        <Image
          src={"/school-logo.svg"}
          alt="Logo"
          width={200}
          height={40}
          className="w-[200px] h-[45px]"
        />
      </div>

      {/* Middle Section */}
      <div className="space-y-4 flex-grow">
        {links.map((link, index) => {
          const isActive =
            (link.href === '/school' && pathname === '/school') || 
            (pathname.startsWith(link.href) && link.href !== '/school');

          return (
            <div
              className={`flex items-center gap-x-4 w-[200px] p-2 hover:bg-school-secondary rounded-md ${
                isActive ? 'bg-school-secondary font-medium' : 'opacity-75'
              }`}
              key={index}
            >
              <Image src={link.icon} alt="" width={16} height={16} className="w-5 h-5" />
              <Link href={link.href}>{link.label}</Link>
            </div>
          );
        })}
      </div>

      {/* Bottom Section */}
      <div className="relative w-[200px]">
        <Image
          src={"/icons/manBag.png"}
          alt="Logo"
          width={150}
          height={155}
          className="absolute top-[-100px] left-5"
        />
        <div className="text-center bg-school-neutral h-[155px] rounded-md flex flex-col items-center justify-center">
          <p className="leading-tight my-2">
            Explore our guide to try your hands on real-time pressing challenges
          </p>
          <Button
            variant={"default"}
            className="bg-school-primary text-white rounded-full text-sm"
          >
            Go to Guild
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
