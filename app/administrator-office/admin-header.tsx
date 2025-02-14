"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { useAdminStore } from "@/store/admin-store";

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
  const pathname = usePathname();

  const { admin } = useAdminStore();
  return (
    <header className="px-10 h-16 flex items-center justify-between">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={150}
        height={45}
        className=""
      />
      <nav className="space-x-4">
        {links.map((link, index) => {
          const active =
            (link.href === "/administrator-office" &&
              pathname === "/administrator-office") ||
            (pathname.startsWith(link.href) &&
              link.href !== "/administrator-office");
          return (
            <Link
              key={index}
              href={link.href}
              className={
                active ? "text-primary font-medium" : "font-medium opacity-50"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <span>
        {admin !== null && (
          <Avatar className={`w-6 h-6 `}>
            <AvatarImage src={'/images/p.jpg'} />
            <AvatarFallback className="bg-pink-300">
              {admin.fname!.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
        )}
      </span>
    </header>
  );
};

export default AdminHeader;
