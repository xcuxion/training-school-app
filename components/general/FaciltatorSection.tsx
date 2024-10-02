"use client"
import FacilitatorCard from '@/components/general/FacilitatorCard';
import React, { useEffect, useState } from 'react';

const facilitatorsData = [
  {
    image: '/images/addy.png',
    name: 'Jessica Addy',
    highlight: 'Hey',
  },
  {
    image: '/images/jj.png',
    name: 'Jessica Jones',
    highlight: 'Hey',
  },
  {
    image: '/images/steph.jpg',
    name: 'Stephanie Opoku-Mensah',
    highlight: 'Hey',
  },
  {
    image: '/images/bayat.jpg',
    name: 'Bayat Osman',
    highlight: 'Hey',
  },
  {
    image: '/images/ned.jpeg',
    name: 'Prince Nedjoh',
    highlight: 'Hey',
  },
];

const FacilitatorSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const facilitatorsPerPage = 3;
  const slideshowInterval = 5000; // 5 seconds

  const nextFacilitators = () => {
    const newIndex = (startIndex + facilitatorsPerPage) % facilitatorsData.length;
    setStartIndex(newIndex);
  };

  const prevFacilitators = () => {
    const newIndex =
      (startIndex - facilitatorsPerPage + facilitatorsData.length) % facilitatorsData.length;
    setStartIndex(newIndex);
  };

  const currentFacilitators = facilitatorsData.slice(
    startIndex,
    startIndex + facilitatorsPerPage
  );

  // Handle wrapping around if we're at the end of the list
  if (currentFacilitators.length < facilitatorsPerPage) {
    currentFacilitators.push(
      ...facilitatorsData.slice(0, facilitatorsPerPage - currentFacilitators.length)
    );
  }

  useEffect(() => {
    const interval = setInterval(nextFacilitators, slideshowInterval);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [startIndex]);

  return (
    <div className="flex flex-col flex-center h-full p-5">
      <section className='w-full flex flex-col flex-center'>
        <h1 className="text-center text-2xl font-semibold">Meet Our Facilitators</h1>
        <p className="mb-2">Our facilitators are people from various backgrounds.</p>
      </section>
      <section className="flex gap-x-10 items-center">
        <span
          className="w-8 h-8 border-2 border-tw-text rounded-full flex flex-center cursor-pointer"
          onClick={prevFacilitators}
        >
        </span>
        {currentFacilitators.map((facilitator, index) => (
          <FacilitatorCard
            name={facilitator.name}
            image={facilitator.image}
            highlight={facilitator.highlight}
            key={index}
          />
        ))}
        <span
          className="w-8 h-8 border-2 border--tw-text rounded-full flex flex-center cursor-pointer"
          onClick={nextFacilitators}
        >
        </span>
      </section>
    </div>
  );
};

export default FacilitatorSection