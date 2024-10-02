import Image from 'next/image';
import React from 'react'

interface ModuleCardProps {
    image: string;
    title: string;
    description: string;
    instructor: string;
}

const ModuleCard = ({image, title, description, instructor}: ModuleCardProps) => {
  return (
    <div className='w-full flex flex-col gap-y-3 p-3 bg-tw-secondary rounded-md'>
      <section className="">
        <span className="flex flex-center w-[30px] h-[30px] bg-tw-primary rounded-md">
          <Image 
            src={image}
            alt=''
            width={24}
            height={24}
            className='w-[24px] h-[24px]'
          />
        </span>
        <h2 className="text-lg font-medium">{title}</h2>
      </section>
      <div className="text-xl">
        {description}
      </div>
      <span className="">
        {instructor}
      </span>
    </div>
  )
}

export default ModuleCard
