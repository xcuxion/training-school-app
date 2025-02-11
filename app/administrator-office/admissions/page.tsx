"use client";
import ProspectCard from "@/components/admin/prospect-card";
import { fetch_all_applications } from "@/lib/actions/admission.actions";
import { IApplicant } from "@/store/applicant-store";
import React, { useEffect, useState } from "react";


const AdmissionPage = () => {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data: IApplicant[] | any = await fetch_all_applications();
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
