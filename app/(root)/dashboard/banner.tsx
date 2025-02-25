
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Banner = () => {

  return (
    <div className="relative w-full h-[80vh] flex flex-col flex-center p-5 md:p20 text-center md:gap-y-6 rounded-lg bg-secondary  ">
      
      <h1 className="md:text-6xl font-bold w-4/5 mx-auto">
        Application Portal Open For{" "}
        <span className="text-primary">Batch'25</span> Admissions
      </h1>
      <p className="text-2xl ">
        Join our next technology and entrepreneurship class to learn crucial
        concepts in Software Engineering, Data Analysis, Product Management, and
        Business Strategy
      </p>
      <Button
        asChild
        className="hover:scale-105 hover:animate-pulse hover:border hover:border-primary hover:text-primary p-8 rounded-full bg-white text-lg font-bold"
      >
        <Link href={"/school/apply"}>Save your seat</Link>
      </Button>

    </div>
  );
};

export default Banner;
