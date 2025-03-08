import Image from "next/image";
import React from "react";

interface ITestimonialCard {
  image: string;
  name: string;
  batch: string;
  content: string;
}
export const TestimonialCard = ({
  image,
  name,
  batch,
  content,
}: ITestimonialCard) => {
  return (
    <div className="">
      <Image src={image} alt="" width={200} height={150} className="" />
      <h1 className="text-xl">{name}</h1>
      <p className="text-sm">{batch}</p>
      <p className="text-base my-4">{content}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="">
      <section className=""></section>
      <section className="">
        <h4 className="text-sm uppercase">meet our students</h4>
        <h1 className="text-3xl font-bold">
          Becoming a Future-Ready Tech Innovator
        </h1>
        <p className="">
          In a rapidly evolving digital world, the need for skilled innovators
          who can build, scale, and lead technology-driven solutions has never
          been greater. XCUXION School is more than just an educational
          institution—it is a dynamic hub designed to foster techpreneurs,
          software engineers, and problem-solvers who are ready to shape the
          future.
        </p>
        <p className="">
          At XCUXION, we bridge the gap between learning and real-world
          application, ensuring that our students are not only equipped with
          technical expertise but also with the entrepreneurial mindset and
          leadership skills needed to drive impact in the tech industry. Our
          mission is to cultivate an ecosystem where knowledge, innovation, and
          collaboration converge to create groundbreaking solutions.
        </p>
      </section>
    </div>
  );
};

export default Testimonials;
