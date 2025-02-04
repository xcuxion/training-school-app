"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { fetch_applicant_data } from "@/lib/actions/admission.actions";
import { useUserStore } from "@/store/user-store";

const AdmissionPortal = () => {
  const { user, update } = useUserStore();
  const [editableData, setEditableData] = useState({
    contact: user?.contact || "",
    programme: user?.programme || "",
    reason: user?.reason || "",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (user?.id) {
        const result = await fetch_applicant_data(user.id);
        if (result) {
          console.log("Updating Zustand Store with:", result);
          update(result);
          setEditableData({
            contact: result.contact,
            programme: result.programme,
            reason: result.reason,
          });
        } else {
          console.warn("User data not found.");
        }
      }
    };
    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditableData({ ...editableData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6">
      {/* Header */}
      <header className="h-16 w-full flex justify-between items-center border-b pb-4">
        <Image src={"/logo.svg"} alt="Logo" width={150} height={45} />
        {user && (
          <Avatar className="w-10 h-10">
            <AvatarFallback className="bg-secondary text-white">
              {user.profile?.email?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        )}
      </header>

      {/* Banner Section */}
      <section className="flex items-center gap-6 my-6">
        <Image src={"/images/p1.jpg"} alt="User Photo" width={150} height={150} className="rounded-full border" />
        <div>
          <h1 className="text-3xl font-semibold">{user?.fname} {user?.lname}</h1>
          <p className="text-gray-600">{user?.programme} - Year {user?.year}</p>
          <p className="text-sm text-gray-500">Status: <span className="font-bold">{user?.status?.toUpperCase()}</span></p>
        </div>
      </section>

      {/* User Details Section */}
      <section className="grid grid-cols-2 gap-6 mt-4">
        {/* First Column */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Full Name</h3>
            <p className="text-base text-gray-700">{user?.fname} {user?.lname} {user?.oname}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Date of Birth</h3>
            <p className="text-base text-gray-700">{new Date(user?.dob!).toDateString()}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Gender</h3>
            <p className="text-base text-gray-700 capitalize">{user?.gender}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Country</h3>
            <p className="text-base text-gray-700 capitalize">{user?.country}</p>
          </div>
        </div>

        {/* Second Column */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium">Email</h3>
            <p className="text-base text-gray-700">{user?.profile?.email}</p>
          </div>
          <div>
            <h3 className="text-lg font-medium">Phone Contact</h3>
            <input 
              type="text" 
              name="contact"
              value={editableData.contact} 
              onChange={handleChange} 
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Programme of Study</h3>
            <input 
              type="text" 
              name="programme"
              value={editableData.programme} 
              onChange={handleChange} 
              className="w-full border p-2 rounded-md"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium">Year</h3>
            <p className="text-base text-gray-700">{user?.year}</p>
          </div>
        </div>
      </section>

      {/* Editable Reason Section */}
      <section className="mt-6">
        <h3 className="text-lg font-medium">Reason for Application</h3>
        <textarea
          name="reason"
          value={editableData.reason}
          onChange={handleChange}
          className="w-full border p-2 rounded-md h-24"
        />
      </section>
    </div>
  );
};

export default AdmissionPortal;

// "use client"
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { IApplicant } from "@/app/administrator-office/admissions/page";
// import { fetch_applicant_data } from "@/lib/actions/admission.actions";
// import { IUser, useUserStore } from "@/store/user-store";


// const AdmissionPortal = () => {
//   const {user} = useUserStore()
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch_applicant_data(user?.id as string);
//       if (result) {
//         console.log("Updating Zustand Store with:", result); // ✅ Debugging log
//         useUserStore.getState().update(result); // Update Zustand store
//       } else {
//         console.warn("User data not found.");
//       }
//     }
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <header className="h-16 w-full flex flex-between">
//         <Image src={""} alt="" width={150} height={45} className="" />
//         <span>
//           {user !== null && (
//             <Avatar className={`w-6 h-6 `}>
//               {/* <AvatarImage src={user.image || ""} /> */}
//               <AvatarFallback className="bg-secondary">
//                 {user.profile?.email!.slice(0, 1)}
//               </AvatarFallback>
//             </Avatar>
//           )}
//         </span>
//       </header>
//       <section className="w-200 h-40">
//         <Image src={''} alt="" width={150} height={150} className="rounded-full" />
//         <span className="">
//           <h1 className="text-4xl">{}</h1>
//           <p className="">General Notice</p>
//         </span>
//       </section>
//       <section>

//         <span className="flex">
//           <h3 className="text-lg">Field</h3>
//           <p className="text-base">{user?.fname}</p>
//         </span>
//         <span className="">
//           <h3 className="text-lg">Field</h3>
//           <p className="text-base">Field input from database</p>
//         </span>
//       </section>
//     </div>
//   );
// };

// export default AdmissionPortal;
