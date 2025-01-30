"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TeamMemberCard from "@/components/portfolio/TeamMemberCard";
import TestimonialCard from "@/components/portfolio/TestimonialCard";
import Register from "./register";
import Footer from "@/components/portfolio/footer";
import Login from "./login";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CourseCard from "./course-card";
import FaqList from "@/components/portfolio/faq-list";

const people = [
  {
    image: "/images/p1.jpg",
    name: "Anton Bismark",
    role: "Founder & Director",
  },
  {
    image: "/images/p1.jpg",
    name: "Anton Bismark",
    role: "Founder & Director",
  },
  {
    image: "/images/p1.jpg",
    name: "Anton Bismark",
    role: "Founder & Director",
  },
  {
    image: "/images/p1.jpg",
    name: "Anton Bismark",
    role: "Founder & Director",
  },
];

const testimonials = [
  {
    image: "/images/p1.jpg",
    name: "Anton Bismark",
    position: "Founder & Director",
    content:
      "I joined the training program back in 2022 when I knew very little about technology. Through the program, I met amazing people and learnt a lot about what I could do other than just coding to leave my mark on the walls of the tech industry. Through their support and guidance, I have been able to cofound a tech startup to solve real world challenges in the financial industry.",
  },
  {
    image: "/images/p1.jpg",
    name: "Anton Bismark",
    position: "Founder & Director",
    content:
      "I joined the training program back in 2022 when I knew very little about technology. Through the program, I met amazing people and learnt a lot about what I could do other than just coding to leave my mark on the walls of the tech industry. Through their support and guidance, I have been able to cofound a tech startup to solve real world challenges in the financial industry.",
  },
  {
    image: "/images/p1.jpg",
    name: "Anton Bismark",
    position: "Founder & Director",
    content:
      "I joined the training program back in 2022 when I knew very little about technology. Through the program, I met amazing people and learnt a lot about what I could do other than just coding to leave my mark on the walls of the tech industry. Through their support and guidance, I have been able to cofound a tech startup to solve real world challenges in the financial industry.",
  },
];


const engineeringCourses = [
  {
    image: "",
    title: "Mobile Development With Flutter",
    prerequisite: ["", ""],
    mode: "Blend - Online & In-person",
  },
  {
    image: "",
    title: "Full-stack Web Development With Nextjs",
    prerequisite: ["Javascript", "React"],
    mode: "Online",
  },
  {
    image: "",
    title: "Backend Engineering with Python",
    prerequisite: ["", ""],
    mode: "",
  },
  {
    image: "",
    title: "Frontend Deveopment with React",
    prerequisite: ["", ""],
    mode: "",
  },
];

const startupCourses = [
  {
    image: "",
    title: "Business Analytics",
    prerequisite: ["", ""],
    mode: "Online",
  },
  {
    image: "",
    title: "Business Strategy",
    prerequisite: ["Javascript", "React"],
    mode: "Online",
  },
  {
    image: "",
    title: "Startup Essentials",
    prerequisite: ["", ""],
    mode: "",
  },
  {
    image: "",
    title: "Marketing",
    prerequisite: ["", ""],
    mode: "",
  },
];

const LandingPage = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div className="">
      <div className="px-4 md:px-10 w-full h-12 md:h-16 sticky top-0 left-0 flex flex-between py-2 bg-white z-50">
        <div className="flex items-center">
          <Image
            src={"/favicon.svg"}
            alt="logo"
            width={45}
            height={45}
            className="mr-2 w-[45px] h-[45px]"
          />
          <h1 className="hidden text-2xl font-bold md:block">XCUXION</h1>
        </div>
        <Button
          onClick={() => {
            setOpenLogin(true);
          }}
          variant={"outline"}
          className="border-2 border-primary text-primary rounded-full h-8 md:h-10"
        >
          Log in
        </Button>
      </div>
      <div className="px-4 md:px-0 flex flex-col items-center justify-center md:w-3/5 mx-auto min-h-[75vh] md:min-h-[60vh]">
        <h1 className="text-2xl md:text-4xl font-bold text-center md:text-start">
          Empowering Dreams, Building Futures
        </h1>
        <p className="text-lg text-center my-2 md:my-4">
          At XCUXION, we turn aspirations into achievements. Whether you’re an
          aspiring technologist, a budding entrepreneur, or a skilled engineer,
          we provide the tools, knowledge, and opportunities you need to
          succeed. Are you ready to take the next step? Join XCUXION and start
          your journey today.
        </p>
        <Button
          className="bg-primary text-white font-semibold rounded-full"
          onClick={() => {
            setOpenRegister(true);
          }}
        >
          Become a member
        </Button>
      </div>
      <div className="px-4 md:px-10">
        <div className=" rounded-lg mb-4 md:mb-8 p-2 md:p-6 w-full bg-secondary">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <span className="md:w-2/3 ">
              <h2 className=" text-xl md:text-5xl font-semibold md:w-4/5">
                School of Engineering & Techpreneurship
              </h2>
              <p className="md:pr-6 my-2 w-3/4">
                An educational program designed to empower aspiring
                technologists and entrepreneurs. We equip students with the
                skills and mindset needed to build and scale innovative
                ventures.
              </p>
              <Button
                variant={"default"}
                className="mt-1 md:mt-0 rounded-full"
                asChild
              >
                <Link href={"/apply"}>Start Your Application!</Link>
              </Button>
            </span>
            <Image
              src={"/images/group.jpg"}
              alt="image"
              width={450}
              height={350}
              className="w-full mt-3 md:t-0 md:w-[550px] md:h-[400px] object-cover rounded-md"
            />
          </div>
          <div className="my-8">
            <div className="md:min-h-[60vh]">
              <h2 className="font-semibold text-3xl my-2">Engineering Courses</h2>
              <div className="">
                <div className="grid grid-cols-4 gap-4">
                  {engineeringCourses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                  ))}
                </div>
              </div>
            </div>
            <div className="md:min-h-[60vh]">
              <h2 className="font-semibold text-3xl my-2">Techpreneurship Courses</h2>
              <div className="">
                <div className="grid grid-cols-4 gap-4">
                  {startupCourses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 md:px-10 flex flex-col flex-center min-h-[60vh]">
        <h2 className=" text-xl md:text-2xl font-bold mb-2 md:mb-4">
          Our Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {people.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </div>
      <div className="px-4 md:px-10 flex flex-col flex-center my-8 md:my-8 md:min-h-[70vh]">
        <h2 className="text-xl md:text-2xl font-bold mb-2">Testimonials</h2>
        <div className="md:px-10">
          <Carousel className="w-full ">
            <CarouselContent className="">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
      <div className="px-4 md:px-10 flex flex-col md:flex-row items-start justify-between my-4 gap-y-4 md:gap-y-0 md:gap-x-6 md:min-h-[50vh]">
        <div className="w-full">
          <h4 className="text-xl text-center md:mb-2  md:text-4xl  font-bold">
            Frequently Asked Questions (FAQs)
          </h4>
          <div className="space-y-1 5">
              <FaqList />
          </div>
        </div>
      </div>
      <Footer />
      {openRegister ? (
        <Register show={openRegister} onClose={() => setOpenRegister(false)} />
      ) : (
        ""
      )}
      {openLogin ? (
        <Login show={openLogin} onClose={() => setOpenLogin(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default LandingPage;
