"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TeamMemberCard from "@/components/portfolio/TeamMemberCard";
import TestimonialCard from "@/components/portfolio/TestimonialCard";
import FaqCard from "@/components/portfolio/faq-card";
import InquiryForm from "@/components/portfolio/inquiry-form";
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

const faqs = [
  {
    question: "How are you?",
    answer: "I am fine please",
  },
  {
    question: "How are you?",
    answer: "I am fine please",
  },
  {
    question: "How are you?",
    answer: "I am fine please",
  },
];

const LandingPage = () => {
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div className="">
      <div className="px-10 w-full h-16 sticky top-0 left-0 flex flex-between py-2 bg-white z-50">
        <div className="flex items-center">
          <Image
            src={"/favicon.svg"}
            alt="logo"
            width={45}
            height={45}
            className="mr-2 w-[45px] h-[45px]"
          />
          <h1 className="text-2xl font-bold md:visible">XCUXION</h1>
        </div>
        <Button
          onClick={() => {
            setOpenLogin(true);
          }}
          variant={"outline"}
          className="border-2 border-primary text-primary rounded-full h-10"
        >
          Log in
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center w-3/5 mx-auto min-h-[60vh]">
        <h1 className="text-4xl font-bold text-center md:text-start">
          Empowering Dreams, Building Futures
        </h1>
        <p className="text-lg text-center my-4">
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
      <div className="px-10">
        <div className=" rounded-lg my-8 p-6 w-full bg-secondary">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <span className="md:w-2/3 ">
              <h2 className="text-2xl font-semibold w-4/5">
                School of Engineering & Techpreneurship
              </h2>
              <p className="pr-6">
                The XCUXION School of Engineering and Techpreneurship is a
                transformative educational program designed to empower aspiring
                technologists and entrepreneurs. By providing hands-on training
                in software engineering, product development, marketing, and
                business strategies, the school equips students with the skills
                and mindset needed to build and scale innovative ventures. The
                program emphasizes practical application, guiding participants
                from idea conception to the launch of viable startups, fostering
                a new generation of tech leaders and changemakers.
              </p>
            </span>
            <Image
              src={"/images/group.jpg"}
              alt="image"
              width={450}
              height={350}
              className="w-full mt-3 md:t-0 md:w-[450px] md:h-[300px] object-cover rounded-md"
            />
          </div>
          <div className="bg-white py-4 px-6 rounded-md mt-8">
            <h3 className="text-3xl font-bold">Admissions In Progress!</h3>
            <p className="my-2">
              Good news! We are currently admitting people to kickstart our next
              batch of training starting March and ending in August. Our 6
              months intensive training program focuses on the fundamentals
              needed to start and run your own tech startup venture. We will
              delve into interesting topics like Product management, Software
              engineering, Marketing, and Strategy. Don’t miss this opportunity
              while it is still available. Simply click the button below to get
              started!
            </p>
            <Button variant={"default"} className=" rounded-full" asChild>
              <Link href={"/apply"}>Start Your Application!</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="px-10 flex flex-col flex-center min-h-[60vh]">
        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
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
      <div className="px-10 flex flex-col flex-center min-h-[70vh]">
        <h2 className="text-2xl font-bold mb-2">Testimonials</h2>
        <div className="px-10">
          <Carousel className="w-full ">
            <CarouselContent className="">
          {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <TestimonialCard {...testimonial} />
              </CarouselItem>
          ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

        </div>
      </div>
      <div className="px-10 flex flex-col md:flex-row items-start justify-between my-4 gap-x-6 min-h-[50vh]">
        <div className="w-full md:w-1/2">
          <h4 className="text-lg font-semibold">
            Frequently Asked Questions (FAQs)
          </h4>
          <div className="space-y-1 5">
            {faqs.map((faq, index) => (
              <FaqCard {...faq} key={index} />
            ))}
          </div>
        </div>
        <InquiryForm />
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
