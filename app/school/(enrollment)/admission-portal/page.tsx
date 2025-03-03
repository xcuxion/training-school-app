"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  edit_application,
  fetch_applicant_data,
} from "@/lib/actions/admission.actions";
import { IApplicant, useApplicantStore } from "@/store/applicant-store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { FaPen } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { logOut } from "@/lib/actions/user.action";
import { useUserStore } from "@/store/user-store";

const AdmissionPortal = () => {
  // const { applicant } = useApplicantStore();
  // const { user } = useUserStore();
  // const router = useRouter();
  // const [editOff, setEditOff] = useState(true);
  // const { updateApplicant, logout } = useApplicantStore();
  // const [editableData, setEditableData] = useState({
  //   contact: applicant?.contact || "",
  //   programme: applicant?.programme || "",
  //   reason: applicant?.reason || "",
  //   dob: applicant?.dob || applicant?.dob,
  //   gender: applicant?.gender || "",
  //   fname: applicant?.fname || "",
  //   oname: applicant?.oname || "",
  //   lname: applicant?.lname || "",
  //   country: applicant?.country || "",
  //   balance: applicant?.balance || "",
  //   statement: applicant?.statement || ""
  // });
  // const handleSave = async () => {
  //   const formData = new FormData();
  //   Object.entries(editableData).forEach(([key, value]) => {
  //     formData.append(key, value as string);
  //   });
  //   const response = await edit_application(user?.id as string, formData);
  //   updateApplicant(response?.data!)
  //   setEditOff(true);
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch_applicant_data(user?.id as string);
  //     if (result) {
  //       setEditableData({
  //         contact: result?.contact ?? "",
  //         programme: result?.programme ?? "",
  //         reason: result?.reason ?? "",
  //         dob: result?.dob || new Date(),
  //         gender: result?.gender || "",
  //         fname: result?.fname || "",
  //         oname: result?.oname || "",
  //         lname: result?.lname || "",
  //         country: result?.country || "",
  //         balance: result?.balance || "",
  //         statement: result?.statement || ""
  //       });
  //     }
  //   };
  //   fetchData();
  // }, [applicant?.id]);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   logout;
  //   setEditableData({ ...editableData, [e.target.name]: e.target.value });
  // };
  // const handleLogOut = async () => {
  //   logout();
  //   await logOut();
  //   router.push("/");
  // };
  const { applicant, setApplicant, logoutApplicant } = useApplicantStore();
  const { user, logoutUser } = useUserStore();
  const router = useRouter();
  const [editOff, setEditOff] = useState(true);
  const [editableData, setEditableData] = useState({
    contact: "",
    programme: "",
    reason: "",
    dob: "",
    gender: "",
    fname: "",
    oname: "",
    lname: "",
    country: "",
    balance: "",
    statement: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      
      const result = await fetch_applicant_data(user?.id as string);
      setApplicant(result as IApplicant)
      if (result) {
        setEditableData({
          contact: result?.contact ?? "",
          programme: result?.programme ?? "",
          reason: result?.reason ?? "",
          dob: result?.dob
            ? new Date(result.dob).toISOString().split("T")[0]
            : "", // ✅ Convert to string
          gender: result?.gender || "",
          fname: result?.fname || "",
          oname: result?.oname || "",
          lname: result?.lname || "",
          country: result?.country || "",
          balance: result?.balance || "",
          statement: result?.statement || "",
        });
      }
    };
    fetchData();
  }, [user?.id]);
  
  // console.log(applicant)
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditableData({ ...editableData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    const formData = new FormData();
    Object.entries(editableData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    const response = await edit_application(user?.id as string, formData);
    setApplicant(response?.data as IApplicant);
    setEditOff(true);
  };

  const handleLogOut = async () => {
    await logOut();
    logoutApplicant()
    logoutUser()
    router.push("/");
  };
  return (
    <div className="w-full min-h-screen md:w-4/5 mx-auto p-6 space-y-6">
      <header className="flex justify-between items-center border-b border-outline pb-4 mb-4 sticky top-0 bg-black z-50">
        <Image src="/logo.png" alt="Logo" width={150} height={45} />
        <div className="flex items-center space-x-4">
          {applicant && (
            <Avatar className="w-10 h-10">
              <AvatarFallback className="bg-secondary text-fontColor">
                {applicant.fname.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          )}
          <Button variant="outline" onClick={async () => await handleLogOut()}>
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
            {applicant?.student && (
              <p className="text-xl text-fontColor">
                {applicant?.programme} - Year {applicant?.year}
              </p>
            )}
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
        ) : editOff ? (
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
        )}
      </section>
      <section
        className={`grid grid-cols-1 ${applicant?.oname !== "" ? "md:grid-cols-3" : "md:grid-cols-2"}  gap-6`}
      >
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
              name="oname"
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
            name="lname"
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
            name="gender"
            className="capitalize"
            value={editableData.gender}
            onChange={handleChange}
            disabled={editOff}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Date of Birth</h3>
          <Input
            type="date" // ✅ Use date type
            name="dob"
            value={editableData.dob} // ✅ No need for conversion
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
        {applicant?.student && (
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
        )}
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
        <h3 className="text-lg font-semibold">
          How you intend to balance the training with your academics?
        </h3>
        <Textarea
          name="balance"
          value={editableData.balance}
          onChange={handleChange}
          disabled={editOff}
          className="w-full h-24"
        />
      </section>
      {applicant?.scholarship && (
        <section className="mt-6">
          <h3 className="text-lg font-semibold">
            Why should we award you a scholarship?
          </h3>
          <Textarea
            name="statement"
            value={editableData.statement}
            onChange={handleChange}
            disabled={editOff}
            className="w-full h-24"
          />
        </section>
      )}
    </div>
  );
};

export default AdmissionPortal;
