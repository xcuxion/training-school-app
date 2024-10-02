import React from 'react';

interface FacilitatorCardProps {
    image: string;
    name: string;
    highlight: string;
}

const FacilitatorCard = ({ image, name, highlight }: FacilitatorCardProps) => {
  return (
    <div
      className={`w-[300px] h-[350px] rounded-[8px] relative bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-tw-secondary absolute bottom-[5%] left-[10%] w-4/5 p-2 rounded-[8px] backdrop-blur-sm bg-opacity-75">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm leading-tight">{highlight}</p>
      </div>
    </div>
  );
};

export default FacilitatorCard;

