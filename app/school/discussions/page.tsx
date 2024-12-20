import React from "react";
import MainContent from "../main-content";
import SideSection from "../side-section";
import { Button } from "@/components/ui/button";
import Resources from "./resources";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
      <div className=" w-full ">
        <MainContent className="w-full space-y-2 flex flex-col flex-center">
          <Image src={'/images/under-construction.png'} alt="image" height={500} width={500} className="w-[500px] h-[450px] object-fit"/>
          <h1 className="text-4xl font-bold leading-none">Page Currently Under Construction</h1>
          <p className="text-xl font-normal leading-tight">For now, join this community for your discussions</p>
          <Button asChild className="rounded-full bg-school-primary">
            <Link href={''}>Join Here</Link>
          </Button>
        </MainContent>
      </div>
  );
};

export default page;
