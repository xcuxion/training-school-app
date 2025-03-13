import MainContent from "@/app/school/(student)/learning-space/main-content";
import SideSection from "@/app/school/(student)/learning-space/side-section";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PublicationCard from "./publication-card";

const navigations = [
  {
    label: "Overview",
    href: "/dashboard",
  },
  {
    label: "Learning",
    href: "/learning-space",
  },
  {
    label: "Network",
    href: "/  ",
  },
  {
    label: "Publications",
    href: "/contact",
  },
  {
    label: "Teams",
    href: "/contact",
  },
];


const page = () => {
  return (
    <div>
      <section className="">
        <div className="">
          <Image
            src={"/logo.svg"}
            alt=""
            width={100}
            height={45}
            className=""
          />
          <h1 className="font-bold text-2xl">Solomon Ayisi</h1>
        </div>
        <div className="">
          <Input className="" placeholder="" type="" />
          <span></span>
          <Image src={"/images/"} alt="" width={100} height={45} className="" />
        </div>
      </section>
      <section className="">
        {navigations.map((nav, index) => (
          <Link href={nav.href} key={index} className="">
            {nav.label}
          </Link>
        ))}
      </section>
      <section>
        <SideSection>

        </SideSection>
        <MainContent>
            <section className="border">

            </section>
            <section>
                <h3 className="text-2xl font-bold">Publications</h3>
                <div className="grid grid-cols-2 gap-6">
                    {
                        // Mock data for demonstration
                        Array(10)
                           .fill(null)
                           .map((_, index) => (
                                <PublicationCard key={index} title={`Publication ${index + 1}`} description={`This is a sample publication ${index + 1}`}/>
                            ))
                    }
                </div>
            </section>
            <section>
                <h3 className="text-2xl font-bold">Activity History</h3>
                <div className="grid-cols-2">
                    
                </div>
            </section>
        </MainContent>
      </section>
    </div>
  );
};

export default page;
