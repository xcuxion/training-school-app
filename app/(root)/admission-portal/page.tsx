"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { fetch_applicant_data } from "@/lib/actions/admission.actions";
import { useApplicantStore } from "@/store/applicant-store";
import { logOut } from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const AdmissionPortal = () => {
  const { applicant } = useApplicantStore();
  const [editOn, setEditOne] = useState<boolean>(true)
  const [editableData, setEditableData] = useState({
    contact: applicant?.contact || "",
    programme: applicant?.programme || "",
    reason: applicant?.reason || "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch_applicant_data(applicant?.id as string);
      if (result) {
        console.log("Updating Zustand Store with:", result); // ✅ Debugging log
        useApplicantStore.getState().update(result); // Update Zustand store
        setEditableData({
          contact: result?.contact ?? "",
          programme: result?.programme ?? "",
          reason: result?.reason ?? "",
        });
      } else {
        console.warn("applicant data not found.");
      }
    };
    fetchData();
  }, [applicant?.id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEditableData({ ...editableData, [e.target.name]: e.target.value });
  };

  return (
    <div className=" w-full md:w-4/5 mx-auto p-6">
      {/* Header */}
      <header className="h-16 w-full flex justify-between items-center border-b border-outline pb-4 sticky top-4 bg-black z-50 left-0">
        <Image src={"/logo.png"} alt="Logo" width={150} height={45} />
        <div className="flex items-center">
          {applicant && (
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-secondary text-dark">
                {applicant.email.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          )}
          <Button variant={"default"} onClick={() => logOut()}>
            Log out
          </Button>
        </div>
      </header>

      {/* Banner Section */}
      <section className="flex items-center bg-secondary p-4 rounded-md gap-6 my-6">
        <Image
          src={"/images/p1.jpg"}
          alt="applicant Photo"
          width={150}
          height={150}
          className="rounded-full border border-outline w-[150px] h-[150px] object-cover "
        />
        <div>
          <h1 className="text-5xl font-semibold">
            {applicant?.fname} {applicant?.lname}
          </h1>
          <p className="text-dark text-3xl">
            {applicant?.programme} - Year {applicant?.year}
          </p>
          <p className="text-2xl text-dark opacity-70">
            Status:{" "}
            <span className="font-bold">
              {applicant?.status?.toUpperCase()}
            </span>
          </p>
        </div>
        {
          applicant?.status?.toUpperCase()
        }
      </section>

      {/* applicant Details Section */}
      <section className="grid grid-cols-2 gap-6 mt-4">
        {/* First Column */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Full Name</h3>
            <p className="text-base text-dark">
              {applicant?.fname} {applicant?.lname} {applicant?.oname}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Date of Birth</h3>
            <p className="text-base text-dark">
              {new Date(applicant?.dob as Date).toDateString()}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Gender</h3>
            <p className="text-base text-dark capitalize">
              {applicant?.gender}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Country</h3>
            <p className="text-base text-dark capitalize">
              {applicant?.country}
            </p>
          </div>
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <p className="text-base text-dark">{applicant?.email}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Phone Contact</h3>
            <Input
              type="text"
              name="contact"
              value={editableData.contact}
              onChange={handleChange}
              disabled={editOn}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Programme of Study</h3>
            <Input
              type="text"
              name="programme"
              value={editableData.programme}
              onChange={handleChange}
              disabled={editOn}
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Year</h3>
            <p className="text-base text-dark">{applicant?.year}</p>
          </div>
        </div>
      </section>

      {/* Editable Reason Section */}
      <section className="mt-6">
        <h3 className="text-lg font-medium">Reason for Application</h3>
        <Textarea
          name="reason"
          value={editableData.reason}
          onChange={handleChange}
          disabled={editOn}

          className="w-full border p-2 rounded-md h-24"
        />
      </section>
    </div>
  );
};

export default AdmissionPortal;
