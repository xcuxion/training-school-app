"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";
import { useAdminStore } from "@/store/admin-store";
import { Button } from "@/components/ui/button";
import RegisterAdmin from "./register-admin";
import Announcement from "./announcements/announcement-form";

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
  const [openRegister, setOpenRegister] = useState<boolean>(false);
  const [openAnnouncement, setOpenAnnouncement] = useState<boolean>(false);

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
      {admin?.permissions === "head" ? (
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
      ) : admin?.permissions === "registrar" ? (
        <></>
      ) : (
        ""
      )}

      <span className="flex items-center gap-x-4">
        {admin !== null && (
          <Avatar className={`w-6 h-6 `}>
            <AvatarImage src={"/images/p.jpg"} />
            <AvatarFallback className="bg-pink-300">
              {admin.name!.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
        )}
        {admin?.permissions === "head" ? (
          <span>
            <Button className="" onClick={() => setOpenRegister(true)}>
              {" "}
              New Admin
            </Button>

          </span>
        ) : admin?.permissions === "registrar" ? (
          <div className="flex items-center space-x-2">
            <span>{admin?.name}</span>
            <Button className="" onClick={() => setOpenRegister(true)}>
              {" "}
              Logout
            </Button>
            <Button className="" onClick={() => setOpenAnnouncement(true)}>
              {" "}
              Announce
            </Button>
          </div>
        ) : (
          ""
        )}
        {openRegister && (
          <RegisterAdmin
            show={openRegister}
            onClose={() => setOpenRegister(false)}
          />
        )}
                {openAnnouncement && (
          <Announcement
            show={openAnnouncement}
            onClose={() => setOpenAnnouncement(false)}
          />
        )}
      </span>
    </header>
  );
};

export default AdminHeader;
