import Image from 'next/image';
import React from 'react'
import { Button } from '../ui/button';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProjectCard = ({title, description, image, link}: ProjectCardProps) => {
  return (
    <div className='flex flex-col gap-4'>
      <Image src={image} alt={title} width={300} height={300}  className='rounded-md object-cover w-[90%] h-[45%] mx-auto'/>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={link}>
        View Project <ArrowRightIcon className='w-4 h-4'/>
      </Link>
    </div>
  )
}

export default ProjectCard
