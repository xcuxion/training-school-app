import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const user = {
  image: "",
  name: "",
};
const AdmissionPortal = () => {
  return (
    <div>
      <header className="h-16 w-full flex flex-between">
        <Image src={""} alt="" width={150} height={45} className="" />
        <span>
          {user !== null && (
            <Avatar className={`w-6 h-6 `}>
              <AvatarImage src={user.image} />
              <AvatarFallback className="bg-pink-300">
                {user.name!.slice(0, 1)}
              </AvatarFallback>
            </Avatar>
          )}
        </span>
      </header>
      <section className="w-200 h-40">
        <Image src={''} alt="" width={150} height={150} className="rounded-full" />
        <span className="">
          <h1 className="text-4xl">Pending Admission</h1>
          <p className="">General Notice</p>
        </span>
      </section>
      <section>
        <span className="">
          <h3 className="text-lg">Field</h3>
          <p className="text-base">Field input from database</p>
        </span>
        <span className="">
          <h3 className="text-lg">Field</h3>
          <p className="text-base">Field input from database</p>
        </span>
      </section>
    </div>
  );
};

export default AdmissionPortal;
