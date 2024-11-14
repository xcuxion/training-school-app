import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

interface ModuleCardProps {
  title: string;
  description: string;
  image: string;
  facilitator: string;
}

const ModuleCard = ({
  title,
  description,
  image,
  facilitator,
}: ModuleCardProps) => {
  return (
    <Card className="bg-primary-light ">
      <CardHeader>
        <span className="w-[45px] h-[45px] rounded-full bg-secondary-light border"></span>
        <CardTitle className="text-base md:text-2xl font-semibold ">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="">
        <Image
          src={image}
          alt=""
          width={45}
          height={45}
          className="w-[30px] h-[30px] border-2 rounded-full mr-2 object-cover"
        />
        <span className="text-lg text-color-light">{facilitator}</span>
      </CardFooter>
    </Card>
  );
};

export default ModuleCard;
