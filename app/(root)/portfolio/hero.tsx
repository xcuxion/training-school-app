import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CourseCard from "./item-list";

const engineeringCourses = [
  {
    image: "/images/flutter.jpg",
    title: "Mobile Development With Flutter",
    summary:
      "Learn to build cross-platform mobile apps for Android and iOS using Flutter and Dart. Covers UI/UX, state management, API integration, and deployment.",
  },
  {
    image: "/images/nextjs.jpg",
    title: "Full-stack Web Development With Next.js",
    summary:
      "Master front-end and back-end web development with Next.js, React, and Node.js. Learn SSR, API routes, authentication, and database integration.",
  },
  {
    image: "/images/python-backend.jpg",
    title: "Backend Engineering with Python",
    summary:
      "Dive deep into backend development using Python, FastAPI, and Django. Covers RESTful APIs, authentication, database management, and cloud deployment.",
  },
  {
    image: "/images/react-frontend.jpg",
    title: "Frontend Development with React",
    summary:
      "Explore modern frontend development using React.js, TypeScript, Tailwind CSS, and state management tools like Redux and React Query.",
  },
  {
    image: "/images/programming-fundamentals.jpg",
    title: "Fundamentals of Programming",
    summary:
      "Perfect for beginners! Learn programming logic, algorithms, data structures, and problem-solving with Python and JavaScript.",
  },
  {
    image: "/images/systems-design.jpg",
    title: "Systems Design and Analysis",
    summary:
      "Learn how to design scalable, efficient, and maintainable software systems. Covers architectural patterns, microservices, and cloud computing.",
  },
];

const startupCourses = [
  {
    image: "/images/business-analytics.jpg",
    title: "Business Analytics",
    summary:
      "Use data-driven insights to make business decisions. Learn data visualization, SQL, Google Analytics, and business intelligence tools.",
  },
  {
    image: "/images/business-strategy.jpg",
    title: "Business Strategy",
    summary:
      "Understand strategic planning, competitive analysis, and growth hacking techniques for startups. Learn from real-world case studies..",
  },
  {
    image: "/images/startup-essentials.jpg",
    title: "Startup Essentials",
    summary:
      "Covers everything from ideation, market research, and business modeling to funding and scaling your startup. Essential for aspiring entrepreneurs.",
  },
  {
    image: "/images/marketing.jpg",
    title: "Marketing",
    summary:
      "Learn how to build and execute effective marketing strategies, including branding, digital marketing, social media, and growth hacking.",
  },
];

const Hero = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <span className="">
            <h2 className="">
              School of Engineering & Techpreneurship
            </h2>
            <p className="">
              An educational program designed to empower aspiring technologists
              and entrepreneurs. We equip students with the skills and mindset
              needed to build and scale innovative ventures.
            </p>
            <Button
              variant={"default"}
              className="mt-1 md:mt-0 rounded-full"
              asChild
            >
              <Link href={"/apply"}>Start Your Application!</Link>
            </Button>
          </span>
        </div>
        <Image
          src={"/images/group.jpg"}
          alt="image"
          width={450}
          height={450}
          className="w-full mt-3 md:t-0 md:w-[450px] md:h-[450px] object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;
