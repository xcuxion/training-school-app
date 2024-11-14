import React from "react";

interface PartnerCardProps {
  name: string;
  field: string;
  image: string;
}

const PartnerCard = ({ name, field, image }: PartnerCardProps) => {
  return (
    <div
      className={`bg-[url('/images/bayat.jpg')] bg-cover bg-center bg-no-repeat h-[450px] w-full relative rounded-xl`}
    >
      <div className="absolute bottom-4 left-[10%] bg-primary-light p-4 w-4/5 rounded-md">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p className="text-base">{field}</p>
      </div>
    </div>
  );
};

export default PartnerCard;
