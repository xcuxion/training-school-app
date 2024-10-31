import React from 'react'
import Image from 'next/image';
interface IQuestCard {
    title: string;
    desciption: string;
    openRoles: string[];
    image: string;
    consultant?: string;

}

const QuestCard = ({ title, desciption, openRoles, image, consultant}:IQuestCard) => {
  return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <Image 
                    width={60}
                    height={60}
                    src={image}
                    alt="quest logo"
                    className="rounded-lg"
                />
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    {consultant && (
                        <p className="text-sm text-gray-600">Consultant: {consultant}</p>
                    )}
                </div>
            </div>
            
            <p className="text-base">{desciption}</p>

            <div className="flex flex-wrap gap-2">
                {openRoles.map((role, index) => (
                    <span 
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                    >
                        {role}
                    </span>
                ))}
            </div>
        </div>
  )
}

export default QuestCard