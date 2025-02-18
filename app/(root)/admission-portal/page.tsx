"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { edit_application, fetch_applicant_data } from "@/lib/actions/admission.actions";
import { useApplicantStore } from "@/store/applicant-store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FaPen } from "react-icons/fa";

const AdmissionPortal = () => {
  const { applicant } = useApplicantStore();
  const [editOff, setEditOff] = useState(true);
  const {update, logout} = useApplicantStore()
  const [editableData, setEditableData] = useState({
    contact: applicant?.contact || "",
    programme: applicant?.programme || "",
    reason: applicant?.reason || "",
    dob: applicant?.dob || applicant?.dob,
    gender: applicant?.gender || "",
    fname: applicant?.fname || "",
    oname: applicant?.oname || "",
    lname: applicant?.lname || "",
    country: applicant?.country || "",
    balance: applicant?.balance || "",
  });
  const handleSave = async () => {
    const formData = new FormData();
    Object.entries(editableData).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    await edit_application(applicant?.id as string, formData);
    setEditOff(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch_applicant_data(applicant?.id as string);
      if (result) {
        update(result);
        setEditableData({
          contact: result?.contact ?? "",
          programme: result?.programme ?? "",
          reason: result?.reason ?? "",
          dob: result?.dob || new Date(),
          gender: result?.gender || "",
          fname: result?.fname || "",
          oname: result?.oname || "",
          lname: result?.lname || "",
          country: result?.country || "",
          balance: result?.balance || "",
        });
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
    <div className="w-full min-h-screen md:w-4/5 mx-auto p-6 space-y-6">
      <header className="flex justify-between items-center border-b border-outline pb-4 mb-4 sticky top-0 bg-black z-50">
        <Image src="/logo.png" alt="Logo" width={150} height={45} />
        <div className="flex items-center space-x-4">
          {applicant && (
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-secondary text-dark">
                {applicant.email.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          )}
          <Button variant="outline" onClick={() => logout()}>
            Log out
          </Button>
        </div>
      </header>

      <section className="bg-secondary p-6 rounded-lg shadow-md flex gap-6 items-center justify-between">
        <span className="flex items-center gap-x-8">
          <Image
            src="/images/dummy.jpeg"
            alt="applicant Photo"
            width={150}
            height={150}
            className="rounded-full border border-outline w-[150px] h-[150px] object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold">
              {applicant?.fname} {applicant?.lname}
            </h1>
            <p className="text-xl text-dark">
              {applicant?.programme} - Year {applicant?.year}
            </p>
            <p className="text-lg text-gray-300">
              Status:{" "}
              <span className="font-semibold">
                {applicant?.status?.toUpperCase()}
              </span>
            </p>
          </div>
        </span>
        {applicant?.status === "admitted" ? (
  <>
    <Button variant={"default"}>Accept</Button>
    <Button variant={"outline"}>Decline</Button>
  </>
) : (
  editOff ? (
    <span
      className="flex items-center justify-center w-8 h-8 rounded-full bg-black hover:cursor-pointer hover:bg-gray-600"
      onClick={() => setEditOff(false)}
    >
      <FaPen className="text-white" />
    </span>
  ) : (
    <Button variant={"default"} onClick={() => handleSave()}>
      Save
    </Button>
  )
)}

      </section>
      <section className={`grid grid-cols-1 ${applicant?.oname !== "" ? "md:grid-cols-3" : "md:grid-cols-2"}  gap-6`}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">First Name</h3>
          <Input
            type="text"
            name="contact"
            value={editableData.fname}
            onChange={handleChange}
            disabled={editOff}
          />
        </div>
        {applicant?.oname !== "" && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Other Name</h3>
            <Input
              type="text"
              name="contact"
              value={editableData.oname}
              onChange={handleChange}
              disabled={editOff}
            />
          </div>
        )}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Last Name</h3>
          <Input
            type="text"
            name="contact"
            value={editableData.lname}
            onChange={handleChange}
            disabled={editOff}
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Gender</h3>
          <Input
            type="text"
            name="contact"
            className="capitalize"
            value={editableData.gender}
            onChange={handleChange}
            disabled={editOff}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Date of Birth</h3>
          <Input
            type="text"
            name="programme"
            value={new Date(editableData.dob as string).toDateString()}
            onChange={handleChange}
            disabled={editOff}
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Phone Contact</h3>
          <Input
            type="text"
            name="contact"
            value={editableData.contact}
            onChange={handleChange}
            disabled={editOff}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Programme of Study</h3>
          <Input
            type="text"
            name="programme"
            value={editableData.programme}
            onChange={handleChange}
            disabled={editOff}
          />
        </div>
      </section>

      <section className="mt-6">
        <h3 className="text-lg font-semibold">Reason for Application</h3>
        <Textarea
          name="reason"
          value={editableData.reason}
          onChange={handleChange}
          disabled={editOff}
          className="w-full h-24"
        />
      </section>
      <section className="mt-6">
        <h3 className="text-lg font-semibold">How you intend to balance the training with your acadeics?</h3>
        <Textarea
          name="reason"
          value={editableData.balance}
          onChange={handleChange}
          disabled={editOff}
          className="w-full h-24"
        />
      </section>
    </div>
  );
};

export default AdmissionPortal;
