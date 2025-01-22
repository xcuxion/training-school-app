"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserStore } from "@/store/user-store";

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
    href: "/administrator-office/humn-resource",
  },
  {
    label: "Resources",
    href: "/administrator-office/resources",
  },
];

const AdminHeader = () => {
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
        {links.map((link, index) => (
          <Link href={link.href} key={index} className={``}>
            {link.label}
          </Link>
        ))}
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
