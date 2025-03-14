"use client";
import ProspectCard from "@/components/admin/prospect-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendBatchInformation } from "@/server/actions/admin.actions";
import { fetch_all_applications } from "@/server/actions/admission.actions";
import { IApplicant } from "@/store/applicant-store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import {useDebouncedCallback} from "use-debounce"
const AdmissionPage = () => {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  useEffect(() => {
    const fetch = async () => {
      const data: IApplicant[] | any = await fetch_all_applications();
      setApplicants(data);
    };
    fetch();
  }, []);
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
    setApplicants(
      applicants.filter((applicant) =>
        applicant.fname.toLowerCase().includes(term.toLowerCase())
      )
    );
  });
  return (
    <main>
      <section className="">
        <Input 
        defaultValue={searchParams.get('query')?.toString()}
        onChange={(e) => handleSearch(e.target.value)} 
        />
        {/* <Button
          onClick={async () => {
            const res = await sendBatchInformation();
            toast.message(res.message)
          }}
        >
          Send Batch Information
        </Button> */}
      </section>
      <section className="grid grid-cols-4 gap-4">
        {applicants.map((applicant, index) => (
          <ProspectCard key={index} {...applicant} />
        ))}
      </section>
    </main>
  );
};

export default AdmissionPage;
