"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logOut } from "@/lib/actions/general.action";

const links = [
  {
    icon: '/icons/dashboard.svg',
    href: '/school',
    label: 'Overview',
  },
  {
    icon: '/icons/discussion.svg',
    href: '/school/discussions',
    label: 'Discussions',
  },
  {
    icon: '/icons/assignment-sidebar.svg',
    href: '/school/case',
    label: 'Case Study',
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
    <div className="hidden h-screen w-[250px] sticky top-0 left-0 p-4 md:flex flex-col items-center justify-between bg-white border-r">
      {/* Top Section */}
      <div className="flex items-center mb-12">
        <Image
          src={"/logo.svg"}
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
            <Link href={link.href} className={`flex items-center gap-x-4 w-[200px] p-2 hover:bg-secondary rounded-md ${
              isActive ? 'bg-secondary font-medium' : ''}`}
              key={index}
            >
              <Image src={link.icon} alt="" width={16} height={16} className="w-5 h-5" />
            <span>{link.label}</span>
            </Link>
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
        <div className="text-center bg-neutral h-[155px] rounded-md flex flex-col items-center justify-center">
          <p className="leading-none text-sm my-2 font-normal">
            
          </p>
          <Button
            onClick={()=>{logOut()}}
            variant={"default"}
            className="bg-primary text-white rounded-full text-sm"
          >
            Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
