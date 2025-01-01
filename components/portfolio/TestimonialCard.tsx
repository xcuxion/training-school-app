import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  content: string;
  image: string;
  position: string;
}

const TestimonialCard = ({
  name,
  content,
  image,
  position,
}: TestimonialCardProps) => {
  return (
    <Card className="bg-primary-light min-w-80 min-h-40 ">
      <CardHeader>
        <CardTitle className="flex text-base md:text-2xl font-semibold items-center">
          <Image
            src={image}
            alt=""
            width={60}
            height={60}
            className="w-[60px] h-[60px] border-2 rounded-full mr-2 object-cover"
          />
          <span className="text-lg text-color-light">
            <h3 className="text-xl">{name}</h3>
            <p className="text-sm">{position}</p>
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className=""></CardFooter>
    </Card>
  );
};

export default TestimonialCard;
