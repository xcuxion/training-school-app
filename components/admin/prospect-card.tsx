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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  accept_admission,
  admit_applicant,
  reject_applicant,
} from "@/lib/actions/admission.actions";
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  const [admissionType, setAdmissionType] = useState<
    "full" | "student" | "nonStudent"
  >("student");
  const [loading, setLoading] = useState<boolean>(false);

  const handleRejection = async () => {
    const response = await reject_applicant(id);
    toast(response?.message);
  };
  const handleAcceptance = async () => {
    setLoading(true);
    try {
      const response = await admit_applicant(id, admissionType);
      console.log(response);
      toast(response?.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div className="hover:cursor-pointer border rounded-md p-2 bg-secondary space-y-2">
            <div className="">
              <h3 className="text-lg opacity-50">
                {fname} {oname && oname} {lname}
              </h3>
              <p className="text-sm capitalize">{gender}</p>
            </div>
            {student && (
              <p className="capitalize">
                {school} - {programme}
              </p>
            )}
            <div className="grid md:grid-cols-2">
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
          <ScrollArea className="h-[90vh]">
            <section className="my-6 space-y-3">
              <h1 className="text-2xl font-bold">Background Information</h1>
              <div className="grid grid-cols-3 gap-y-3 capitalize">
                <span>
                  <h3 className="text-lg opacity-50">Name</h3>
                  <p>
                    {fname} {oname && oname} {lname}
                  </p>
                </span>
                <span>
                  <h3 className="text-lg opacity-50">Date of Birth</h3>
                  <p>{new Date(dob).toDateString()}</p>
                </span>
                <span>
                  <h3 className="text-lg opacity-50">Gender</h3>
                  <p>{gender}</p>
                </span>
              </div>
              <div className="grid grid-cols-3 gap-y-3 ">
                <span>
                  <h3 className="text-lg opacity-50">Country</h3>
                  <p className="capitalize">{country}</p>
                </span>
                <span>
                  <h3 className="text-lg opacity-50">Email</h3>
                  <p>{email && email}</p>
                </span>
                <span>
                  <h3 className="text-lg opacity-50">WhatsApp Number</h3>
                  <p>{contact}</p>
                </span>
              </div>
              {student && (
                <div className="grid grid-cols-3 gap-y-3 ">
                  <span>
                    <h3 className="text-lg opacity-50">School</h3>
                    <p className="capitalize">{school}</p>
                  </span>
                  <span>
                    <h3 className="text-lg opacity-50">Programme</h3>
                    <p>{programme}</p>
                  </span>
                  <span>
                    <h3 className="text-lg opacity-50">Year</h3>
                    <p>{year}</p>
                  </span>
                </div>
              )}
              <div className="grid grid-cols-3 gap-y-3 ">
                <span>
                  <h3 className="text-lg opacity-50">Track</h3>
                  <p className="capitalize">{track}</p>
                </span>
                <span>
                  <h3 className="text-lg opacity-50">Batch</h3>
                  <p>{batch === "batch25" ? "Batch'25" : ""}</p>
                </span>
              </div>
            </section>
            <section className="space-y-3">
              {statement && (
                <div>
                  <h1 className="text-lg opacity-50">
                    Scholarship Need Request
                  </h1>
                  <span className="">{statement}</span>
                </div>
              )}
              <div>
                <h1 className="text-lg opacity-50">Intention on Balance</h1>
                <span className="">{balance}</span>
              </div>
              <div>
                <h1 className="text-lg opacity-50">Statement of Purpose</h1>
                <span className="">{reason}</span>
              </div>
            </section>
            <section className="grid md:grid-cols-3 gap-y-2 md:gap-y-0 md:gap-x-10 my-4">
              <Button
                variant={"outline"}
                onClick={() => {
                  handleRejection;
                }}
              >
                Decline
              </Button>
              <Select
                onValueChange={(choice) =>
                  setAdmissionType(choice as "student" | "full" | "nonStudent")
                }
                name="admissionType"
              >
                <SelectTrigger className="">
                  <SelectValue
                    placeholder="Select"
                    defaultValue={admissionType}
                  />
                </SelectTrigger>
                <SelectContent className="bg-secondary">
                  <SelectItem value="full">Full Scholarship</SelectItem>
                  <SelectItem value="student">Student Offer</SelectItem>
                  <SelectItem value="nonStudent">Non-student Offer</SelectItem>
                </SelectContent>
              </Select>
              <Button
              disabled={loading === true? true: false}
                variant={"default"}
                onClick={() => {
                  handleAcceptance;
                }}
                className={`${loading === true ? 'opacity-50': ''}`}
              >
                {loading === true ? 'Accept' : 'Accepting...'}
              </Button>
            </section>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ProspectData;
