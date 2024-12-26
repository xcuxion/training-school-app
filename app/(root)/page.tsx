import Header from "@/components/portfolio/Header";
import React from "react";

import Link from 'next/link'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TeamMemberCard from "@/components/portfolio/TeamMemberCard";

const links = [
  {
    label: 'About Us',
    link: '/about-us'
  },
  {
    label: 'School of Engineering & Techpreneurship',
    link: '/school-portfolio'
  },
  {
    label: 'Engineers\' Guild',
    link: '/guild-portfolio'
  },
]

const people = [
  {
    image: '/p1.jpg',
    name: 'Anton Bismark',
    role: 'Founder & Director'
  },
  {
    image: '/p1.jpg',
    name: 'Anton Bismark',
    role: 'Founder & Director'
  },
  {
    image: '/p1.jpg',
    name: 'Anton Bismark',
    role: 'Founder & Director'
  },
  {
    image: '/p1.jpg',
    name: 'Anton Bismark',
    role: 'Founder & Director'
  },
]

const page = () => {
  return (
    <div className='px-10 py-4'>      
      <Header/>
      <div className="">
        <h1 className="text-4xl font-bold">Empowering Dreams, Building Futures</h1>
        <p className="text-lg text-center">At XCUXION, we turn aspirations into achievements. Whether you’re an aspiring technologist, a budding entrepreneur, or a skilled engineer, we provide the tools, knowledge, and opportunities you need to succeed. Are you ready to take the next step? Join XCUXION and start your journey today.</p>
      </div>
      <div className="">
        <div className="flex">
          <span className="">
            <h2 className="text-2xl font-semibold">
              School of Engineering & Techpreneurship
            </h2>
            <p className="">The XCUXION School of Engineering and Techpreneurship is a transformative educational program designed to empower aspiring technologists and entrepreneurs. By providing hands-on training in software engineering, product development, marketing, and business strategies, the school equips students with the skills and mindset needed to build and scale innovative ventures. The program emphasizes practical application, guiding participants from idea conception to the launch of viable startups, fostering a new generation of tech leaders and changemakers.</p>
          </span>
          <Image src={''} alt="image" width={300} height={250} className=""/>
        </div>
        <div className="">
          <h3 className="text-3xl font-bold">Admissions In Progress!</h3>
          <p className="">Good news! We are currently admitting people to kickstart our next batch of training starting March and ending in August. Our 6 months intensive training program focuses on the fundamentals needed to start and run your own tech startup venture. We will delve into interesting topics like Product management, Software engineering, Marketing, and Strategy. Don’t miss this opportunity while it is still available. Simply click the button below to get started!</p>
          <Button>Start Yoour Application!</Button>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <div className="grid grid-cols-3">
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
    </div>
  );
};

export default page;
