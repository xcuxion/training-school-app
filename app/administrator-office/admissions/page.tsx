"use client";
import ProspectCard from "@/components/admin/prospect-card";
import { fetch_all_applications } from "@/lib/actions/admission.actions";
import { IUser } from "@/store/user-store";
import React, { useEffect, useState } from "react";

export interface IApplicant {
  profile: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    password: string;
  };
  profileId: string | null;
  id: string;
  fname: string;
  dob: Date;
  lname: string;
  oname: string | undefined;
  statement: string | undefined | null;
  gender: "male"|"female";
  contact: string;
  programme: string;
  status: string;
  reason: string;
  laptop: boolean;
  scholarship: boolean;
  school: string;
  balance: string;
  year: string;
}
const AdmissionPage = () => {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data: IUser[] | any = await fetch_all_applications();
      setApplicants(data);
    };
    fetch();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4">
      {applicants.map((applicant, index) => (
        <ProspectCard key={index} {...applicant}/>
      ))}
    </div>
  );
};

export default AdmissionPage;
