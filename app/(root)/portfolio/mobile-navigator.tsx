"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

const sections = ["home", "courses", "admission", "faqs", "contact"];

interface MobileNavigatorProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MobileNavigator: React.FC<MobileNavigatorProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false); // Close the sheet after clicking a link
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <MdMenu className="w-8 h-8" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <Image src={"/logo.png"} alt="logo" width={150} height={60} />
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className={`transition-colors duration-300 px-4 py-2 rounded-full text-white ${
                activeSection === section
                  ? "bg-gray-900 text-black"
                  : "opacity-50"
              }`}
              onClick={() => handleLinkClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigator;
