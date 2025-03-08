"use client";
import ProspectCard from "@/components/admin/prospect-card";
import { Button } from "@/components/ui/button";
import { sendBatchInformation } from "@/lib/actions/admin.actions";
import { fetch_all_applications } from "@/lib/actions/admission.actions";
import { IApplicant } from "@/store/applicant-store";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

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
      <Button
        onClick={async () => {
          const res = await sendBatchInformation();
          toast.message(res.message)
        }}
      >
        Send Batch Information
      </Button>
      {applicants.map((applicant, index) => (
        <ProspectCard key={index} {...applicant} />
      ))}
    </div>
  );
};

export default AdmissionPage;
