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
import { FaPen, FaCopy, FaShareAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { logOut } from "@/lib/actions/user.action";
import { useUserStore } from "@/store/user-store";
import AdmissionDetails from "./admission-details";

const AdmissionPortal = () => {
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
      console.log(user, applicant);
      if (!user) return;
      const result = await fetch_applicant_data(user?.id as string);
      setApplicant(result as IApplicant);
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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (applicant?.referralCode) {
      navigator.clipboard.writeText(applicant.referralCode.toUpperCase());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }
  };

  const handleShare = () => {
    const shareText = `Join me at the XCUXION School Batch'25 program! \nUse my referral code: ${applicant?.referralCode?.toUpperCase()} when applying to get a waiver on your tuition fees. 🚀 \nLink: https://xcuxion.org/school/apply`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

    if (navigator.share) {
      navigator
        .share({
          title: "SWAM Masterclass Referral",
          text: shareText,
          url: "https://xcuxion.org/school/apply", // You can customize this
        })
        .catch((err) => console.log("Sharing failed:", err));
    } else {
      window.open(shareUrl, "_blank");
    }
  };
  const handleLogOut = async () => {
    await logOut();
    logoutApplicant();
    logoutUser();
    router.push("/");
  };
  return (
    <div className="w-full min-h-screen md:w-4/5 mx-auto p-6 space-y-6">
      <header className="flex justify-between items-center border-b border-outline pb-4 mb-4 sticky top-0 bg-black z-50">
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={45}
          className="w-[100px] h-[36px] md:w-[150px] md:h-[45px] object-cover"
        />
        <div className="flex items-center space-x-4">
          {applicant && (
            <Avatar className="hidden md:block w-10 h-10">
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

      <section className="bg-secondary relative p-4 md:p-6 rounded-lg shadow-md md:flex md:flex-row md:gap-6 md:items-center md:justify-between">
        <span className="flex flex-col md:flex-row items-center gap-x-8">
          <Image
            src="/images/dummy.jpeg"
            alt="Applicant Photo"
            width={150}
            height={150}
            className="rounded-full border border-outline w-[80px] md:w-[150px] h-[80px] md:h-[150px] object-cover"
          />
          <div>
            <h1 className="text-2xl text-center md:text-start md:text-4xl font-bold">
              {applicant?.fname} {applicant?.lname}
            </h1>
            {applicant?.student && (
              <p className="text-base md:text-xl text-fontColor">
                {applicant?.programme} - Year {applicant?.year}
              </p>
            )}
            <p className="text-sm  text-center md:text-start md:text-lg text-gray-300">
              Status:{" "}
              <span className="font-semibold">
                {applicant?.status?.toUpperCase()}
              </span>
            </p>
            <p className="text-sm text-center md:text-start md:text-lg text-gray-300 flex items-center gap-2">
              Referral Code:{" "}
              <span className="font-semibold">
                {applicant?.referralCode?.toUpperCase()}
              </span>
              <span
                onClick={handleCopy}
                className="text-white bg-gray-700 hover:bg-gray-500 p-1 rounded"
              >
                <FaCopy />
              </span>
              {copied && (
                <span className="text-green-400 text-xs">Copied!</span>
              )}
              <span
                className=" flex items-center justify-center p-1 rounded  bg-gray-700 hover:bg-gray-500"
                onClick={() => handleShare()}
              >
                <FaShareAlt className="text-white" />
              </span>
            </p>
          </div>
        </span>
        <div className="flex gap-3 ">
          {applicant?.status === "admitted" ? (
            <div className="w-full text-center space-x-3 space-y-2">
              <Button variant={"default"}>Accept</Button>
              <Button variant={"secondary"} className="bg-black hover:border">Decline</Button>
            </div>
          ) : editOff ? (
            <span
              className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full bg-black hover:cursor-pointer hover:bg-gray-600"
              onClick={() => setEditOff(false)}
            >
              <FaPen className="text-white " />
            </span>
          ) : (
            <Button variant={"default"} onClick={handleSave}>
              Save
            </Button>
          )}
        </div>
      </section>
      {applicant?.status === "pending" ? (
        <>
          <section
            className={`grid grid-cols-1 ${applicant?.oname !== "" ? "md:grid-cols-3" : "md:grid-cols-2"}  gap-6`}
          >
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">First Name</h3>
              <Input
                type="text"
                name="fname"
                defaultValue={editableData.fname}
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
                  defaultValue={editableData.oname}
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
                defaultValue={editableData.lname}
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
                defaultValue={editableData.gender}
                onChange={handleChange}
                disabled={editOff}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Date of Birth</h3>
              <Input
                type="date" // ✅ Use date type
                name="dob"
                defaultValue={editableData.dob} // ✅ No need for conversion
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
                defaultValue={editableData.contact}
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
                  defaultValue={editableData.programme}
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
              defaultValue={editableData.reason}
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
              defaultValue={editableData.balance}
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
                defaultValue={editableData.statement}
                onChange={handleChange}
                disabled={editOff}
                className="w-full h-24"
              />
            </section>
          )}
        </>
      ) : applicant?.status === "admitted" ? (
        <AdmissionDetails applicant={applicant}/>
      ) : (
        ""
      )}
    </div>
  );
};

export default AdmissionPortal;

