import React from "react";
import ItemList from "./item-list";

const courses = {
  sartup: [
    {
      image: "/images/business-analytics.jpg",
      title: "Business Analytics",
      subtitle: "Business",
    },
    {
      image: "/images/business-strategy.jpg",
      title: "Business Strategy",
      subtitle: "Business",
    },
    {
      image: "/images/startup-essentials.jpg",
      title: "Startup Essentials",
      subtitle: "Business",
    },
    {
      image: "/images/marketing.jpg",
      title: "Marketing",
      subtitle: "Engineering",
    },
  ],
  engineering: [
    {
      image: "/images/flutter.jpg",
      title: "Mobile Development With Flutter",
      subtitle: "Engineering",
    },
    {
      image: "/images/nextjs.jpg",
      title: "Full-stack Web Development With Next.js",
      subtitle: "Engineering",
    },
    {
      image: "/images/python-backend.jpg",
      title: "Backend Engineering with Python",
      subtitle: "Engineering",
    },
    {
      image: "/images/react-frontend.jpg",
      title: "Frontend Development with React",
      subtitle: "Engineering",
    },
    {
      image: "/images/programming-fundamentals.jpg",
      title: "Fundamentals of Programming",
      subtitle: "Engineering",
    },
    {
      image: "/images/systems-design.jpg",
      title: "Systems Design and Analysis",
      subtitle: "",
    },
  ],
};

const CoursesSection = () => {
  return (
    <div>
      <span className="">
        <h1 className="">Our COurses</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          vitae soluta eligendi omnis asperiores enim, ipsa eveniet voluptates
          deserunt recusandae. Quae placeat sunt, repellat provident totam illo,
          beatae maiores quibusdam velit, suscipit voluptate. Consequuntur,
          corrupti?
        </p>
      </span>
      <div className="grid grid-cols-3 gap-4">
        {courses.sartup.map((course, index) => (
          <ItemList {...course} key={index} />
        ))}
        {courses.engineering.map((course, index) => (
          <ItemList {...course} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
