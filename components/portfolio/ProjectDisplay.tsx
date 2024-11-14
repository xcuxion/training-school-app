import Link from "next/link";
import React from "react";
import { ArrowRightIcon } from "lucide-react";
interface ProjectDisplayProps {
  title: string;
  description: string;
  link: string;
  image: string;
  foundingYear: string;
}

const ProjectDisplay = ({
  title,
  description,
  link,
  image,
  foundingYear,
}: ProjectDisplayProps) => {
  return (
    <div>
      <div className="flex flex-col w-2/5">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link
          href={link}
          className="flex items-center gap-2 w-fit p-2 rounded-full"
        >
          View Project <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectDisplay;
