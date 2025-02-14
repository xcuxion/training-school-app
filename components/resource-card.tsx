import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export type TResource = {
  url: string;
  title: string;
};

const ResourceCard = ({ url, title }: TResource) => {
  return (
    <Link 
      href={url} 
      className="flex items-center bg-black border-outline md:h-16 border rounded-sm p-1 md:p-0" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Image src="/icons/pdf.svg" alt="" width={45} height={45} className="mr-2" />
      <p className="text-sm md:text-base font-medium">{title}</p>
    </Link>
  );
};

export default ResourceCard;
