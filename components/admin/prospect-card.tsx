import { IApplicant } from "@/store/applicant-store";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { accept_admission, admit_applicant, reject_applicant } from "@/lib/actions/admission.actions";
import { toast } from "sonner";

interface IProspectData {
  fname: string;
  lname: string;
  oname?: string | null;
  createdAt: Date;
  updatedAt: Date;
  email?: string;
  id: string;
  school?: string;
  programme?: string;
  scholarship: boolean;
  laptop: boolean;
  gender: "male" | "female";
  contact: string;
  status: "pending" | "admitted" | "rejected";
  statement?: string | null;
  student: boolean;
  batch: string | null;
  balance: string;
  reason: string | null;
  track: string | null;
  dob: Date;
  country: string;
  year?: string;
}

const ProspectData = ({
  id,
  fname,
  laptop,
  lname,
  oname,
  createdAt,
  programme,
  scholarship,
  school,
  gender,
  contact,
  status,
  statement,
  student,
  year,
  balance,
  reason,
  track,
  batch,
  country,
  email,
  dob,
}: IProspectData | IApplicant) => {
  const [admissionType, setAdmissionType] = useState<"full" | "student" | "nonStudent">("student")
  const handleRejection = async () => {
    const response = await reject_applicant(id)
    toast(response?.message)
  }
  const handleAcceptance = async () => {
    const response = await admit_applicant(id, admissionType)
    toast(response?.message)
  }
  return (
    <Sheet>
      <SheetTrigger>
        <div className="hover:cursor-pointer border rounded-md p-2 bg-secondary space-y-2">
          <div className="">
            <h3 className="text-lg">
              {fname} {oname && oname} {lname}
            </h3>
            <p className="text-sm capitalize">{gender}</p>
          </div>
          {student && (
            <p className="capitalize">
              {school} - {programme}
            </p>
          )}
          <div className="grid grid-cols-2">
            <p className="">
              Scholarship:{scholarship === true ? "Yes" : "No"}
            </p>
            <p className="">Laptop: {laptop === true ? "Yes" : "No"}</p>
          </div>

          <hr />
          {createdAt && (
            <span className="text-xs">
              Applied on: {new Date(createdAt).toLocaleDateString()}
            </span>
          )}
        </div>
      </SheetTrigger>
      <SheetContent className="" side={"top"}>
        <SheetHeader>
          <SheetTitle>Applicant Information</SheetTitle>
        </SheetHeader>
        <section className="my-6 space-y-3">
          <h1 className="text-2xl font-bold">Background Information</h1>
          <div className="grid grid-cols-3 gap-y-3 capitalize">
            <span>
              <h3 className="text-lg">Name</h3>
              <p>
                {fname} {oname && oname} {lname}
              </p>
            </span>
            <span>
              <h3 className="text-lg">Date of Birth</h3>
              <p>{new Date(dob).toDateString()}</p>
            </span>
            <span>
              <h3 className="text-lg">Gender</h3>
              <p>{gender}</p>
            </span>
          </div>
          <div className="grid grid-cols-3 gap-y-3 ">
            <span>
              <h3 className="text-lg ">Country</h3>
              <p className="capitalize">{country}</p>
            </span>
            <span>
              <h3 className="text-lg">Email</h3>
              <p>{email && email}</p>
            </span>
            <span>
              <h3 className="text-lg">WhatsApp Number</h3>
              <p>{contact}</p>
            </span>
          </div>
          {student && (
            <div className="grid grid-cols-3 gap-y-3 ">
              <span>
                <h3 className="text-lg ">School</h3>
                <p className="capitalize">{school}</p>
              </span>
              <span>
                <h3 className="text-lg">Programme</h3>
                <p>{programme}</p>
              </span>
              <span>
                <h3 className="text-lg">Year</h3>
                <p>{year}</p>
              </span>
            </div>
          )}
          <div className="grid grid-cols-3 gap-y-3 ">
            <span>
              <h3 className="text-lg ">Track</h3>
              <p className="capitalize">{track}</p>
            </span>
            <span>
              <h3 className="text-lg">Batch</h3>
              <p>{batch === "batch25" ? "Batch'25" : ""}</p>
            </span>
          </div>
        </section>
        <section className="space-y-3">

        {statement && (
          <div>
            <h1 className="text-lg">Scholarship Need Request</h1>
            <span className="">{statement}</span>
          </div>
        )}
        <div>
          <h1 className="text-lg">Intention on Balance</h1>
          <span className="">{balance}</span>
        </div>
        <div>
          <h1 className="text-lg">Statement of Purpose</h1>
          <span className="">{reason}</span>
        </div>
        </section>
        <section className="">
        <Select
              onValueChange={(choice) => setAdmissionType(choice as "student" | "full" | "nonStudent")}
              name="admissionType"
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Select" defaultValue={admissionType} />
              </SelectTrigger>
              <SelectContent className="bg-secondary">
                <SelectItem value="full">Full Scholarship</SelectItem>
                <SelectItem value="student">Student Offer</SelectItem>
                <SelectItem value="nonStudent">Non-student Offer</SelectItem>
              </SelectContent>
            </Select>
          <Button variant={"outline"} onClick={()=>{handleRejection}}>Decline</Button>
          <Button variant={"default"} onClick={()=>{handleAcceptance}}>Accept</Button>
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default ProspectData;
