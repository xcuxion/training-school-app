"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Register from "../register";

const pages = [
  { label: "home", href: "/" },
  { label: "school", href: "/school" },
  { label: "guild", href: "/guild" },
  { label: "Startup Center", href: "/center" },
];
interface MobileNavigatorProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MobileNavigator: React.FC<MobileNavigatorProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openRegister, setOpenRegister] = useState<boolean>(false);

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false); // Close the sheet after clicking a link
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <MdMenu className="w-8 h-8" />
      </SheetTrigger>
      <SheetContent side={"left"} className="">
        <SheetHeader>
          <SheetTitle>
            <Image src={"/logo.png"} alt="logo" width={150} height={60} />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col">
          {pages.map((section) => (
            <Link
              key={section.label}
              href={section.href}
              className={`transition-colors duration-300 px-4 py-2 rounded-full text-white ${
                activeSection.toLocaleLowerCase() ===
                section.label.toLocaleLowerCase()
                  ? "bg-gray-900"
                  : "opacity-50"
              }`}
              onClick={() => handleLinkClick(section.label)}
            >
              {section.label.charAt(0).toUpperCase() + section.label.slice(1)}
            </Link>
          ))}
        </nav>
      <SheetFooter>
        <Button
          className="w-full rounded-lg h-8 mt-20"
          onClick={() => setOpenRegister(true)}
        >
          Register
        </Button>
      </SheetFooter>
      </SheetContent>
      {openRegister && (
        <Register show={openRegister} onClose={() => setOpenRegister(false)} />
      )}
    </Sheet>
  );
};

export default MobileNavigator;
