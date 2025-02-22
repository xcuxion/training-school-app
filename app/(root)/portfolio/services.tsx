"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IServiceCard {
  image: string;
  title: string;
  description: string;
  link: {label: string, href: string};
}

export const ServiceCard = ({
  image,
  title,
  description,
  link,
}: IServiceCard) => {
  return (
    <Card className="py-4">
      <CardContent>
        <div className="flex flex-col flex-start  space-y-4">
          <Image
            className="w-full h-60 rounded-md object-cover"
            src={image}
            alt=""
            width={300}
            height={300}
          />
          <div>
            <h3 className="text-3xl font-medium">{title}</h3>
            <p className="py-2">{description}</p>
          </div>
            <Button variant={"outline"} className="hover:bg-white hover:border-none hover:text-black border-2 rounded-full" asChild>
              <Link
                href={link.href}
                target="_blank"
                              >
                {link.label}
              </Link>
            </Button>
        </div>
      </CardContent>
    </Card>
  );
};
const services = [
  {
    image: "/images/school.jpg",
    title: "School of Engineering & Techpreneurship",
    description:
      "We offer a year-long training program that equips students with skills needed to start and run their startups ",
    link: {href: "/school", label:"Visit"},
  },
  {
    image: "/images/guild.jpg",
    title: "Engineers' Guild",
    description:
      "We provide businesses with top-notch software engineering and technology consultancy services through our pool of seasoned experts.",
    link: {href:"/guild", label:"Explore"},
  },
  {
    image: "/images/pitch.jpg",
    title: "Startups Center",
    description:
      "Our center provides founders and innovators with access to resources they may need in order to create the next big thing.",
    link: {href:"/startup-center", label:"Explore"},
  },
];
const Services = () => {
  return (
    <motion.div className="z-10 bg-gradient-to-br to-black from-gray-950 min-h-screen w-full px-20 flex flex-col py-10 flex-center">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
