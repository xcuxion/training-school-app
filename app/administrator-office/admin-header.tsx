"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserStore } from "@/store/user-store";
import { usePathname } from 'next/navigation'

const links = [
  {
    label: "Overview",
    href: "/administrator-office",
  },
  {
    label: "Admission",
    href: "/administrator-office/admissions",
  },
  {
    label: "HR",
    href: "/administrator-office/human-resource",
  },
  {
    label: "Resources",
    href: "/administrator-office/resources",
  },
];

const AdminHeader = () => {
  const pathname = usePathname()

  const { user } = useUserStore();
  return (
    <header className="px-10 h-16 flex items-center justify-between">
      <Image
        src={"/logo.svg"}
        alt="logo"
        width={150}
        height={45}
        className=""
      />
      <nav className="space-x-4">
      {
                links.map((link, index)=>{
                const active = (link.href === '/administrator-office' && pathname === '/administrator-office') || (pathname.startsWith(link.href) && link.href !== '/administrator-office');
                return(
                    <Link key={index} href={link.href} className={active? 'text-primary font-medium': 'font-medium opacity-50'}>{link.label}</Link>
                )
                })
            }
      </nav>
      <span>
        {user !== null && (
          <Avatar className={`w-6 h-6 `}>
            <AvatarImage src={user.image} />
            <AvatarFallback className="bg-pink-300">
              {user.name!.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
        )}
      </span>
    </header>
  );
};

export default AdminHeader;
