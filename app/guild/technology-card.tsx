import Image from 'next/image';
import React from 'react'

interface ITechnologyCard {
    image: string;
    title: string;
    description: string;
}

const TechnologyCard = ({image, title, description}: ITechnologyCard) => {
  return (
    <div>
        <Image 
            width={45}
            height={45}
            className='w-[] h-[] '
            src={image}
            alt='technology logo'
        />
        <h3 className="text-lg font-semibold">
            {title}
        </h3>
        <p className="text-sm font-normal">
            {description}
        </p>
    </div>
  )
}

export default TechnologyCard