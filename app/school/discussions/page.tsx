import React from "react";
import MainContent from "../main-content";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const page = () => {
  return (
    <div className=" w-full h-screen">
      <MainContent className="w-full space-y-1 md:space-y-2 flex flex-col flex-center">
        <Image
          src={"/images/under-construction.png"}
          alt="image"
          height={500}
          width={500}
          className="md:w-[500px] md:h-[450px] object-fit"
        />
        <h1 className="text-2xl text-center md:text-start md:text-4xl font-bold leading-none">
          Page Currently Under Construction
        </h1>
        <p className="text-base text-center md:text-start md:text-xl font-normal leading-tight">
          For now, join this community for your discussions
        </p>
        <Button asChild className="rounded-full text-xs md:text-sm bg-primary">
          <Link href={""}>Join Here</Link>
        </Button>
      </MainContent>
    </div>
  );
};

export default page;
