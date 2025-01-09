import React from "react";
import { Skeleton } from "./ui/skeleton";

export interface ICaseDescription {
  title: string;
  coverImage: string;
  problemStatement: string;
  requirements: string[];
}

export const CaseDescriptionSkeleton = () => {
  return (
    <div className="">
      <Skeleton />
      <div className="space-y-4">
        <Skeleton className="bg-gray-200">
          <Skeleton className="w-40 h-2" />
          <Skeleton className="w-40 h-2" />
        </Skeleton>

        <Skeleton className="bg-gray-200">
          <Skeleton className="w-40 h-2" />
          <Skeleton className="w-40 h-2" />
        </Skeleton>
      </div>
    </div>
  );
};

const CaseDescription = ({
  title,
  coverImage,
  problemStatement,
  requirements,
}: ICaseDescription) => {
  return (
    <div className="">
      <div
        className="w-full h-[200px] bg-cover bg-top flex items-center justify-center mb-4"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <h2 className="text-primary bg-secondary p-2 text-lg text-center w-4/5 mx-auto ">
          {title}
        </h2>
      </div>
      <div className="space-y-4">
        <section>
          <h3 className="font-semibold text-lg">Problem Statement</h3>
          <p className="font-normal">{problemStatement}</p>
        </section>

        <section>
          <h3 className="font-semibold text-lg">Responsibilities</h3>
          <ol className="list-disc font-medium">
            You are required to:
            <span className="">
              {requirements.map((task, index) => (
                <li className="ml-4 font-normal" key={index}>
                  {task}
                </li>
              ))}
            </span>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default CaseDescription;
