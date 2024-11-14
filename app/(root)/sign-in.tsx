import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const SignIn = () => {
  return (
    <>
      <div className="shadow-md w-[800px] mx-auto h-[400px]] mt-6 rounded-md  flex flex-row ">
        <div className="relative">
          {" "}
          {/* Adjusted height for better visibility */}
          {/* Image that will be the background */}
          <Image
            src={"/icons/bgIcon.jpg"}
            alt="Background Icon"
            width={400}
            height={200}
            className=" h-full object-cover rounded-t-md"
          />
          {/* Logo positioned absolutely */}
          <Image
            src={"/icons/tw-logo.png"}
            alt="Logo"
            width={50}
            height={100}
            className="absolute top-6 left-5"
          />
          {/* Button positioned absolutely */}
          <div className="absolute top-6 right-5 text-white font-bold px-2  rounded-lg bg-gray-500 flex items-center">
            Go to website <FaArrowRight className="pl-2 text-md" />
          </div>
          {/* Text positioned absolutely */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center text-white text-xl mb-4">
            <h2 className="font-exo font-semibold text-xxl leading-tight">
              Work on real-world projects under the guidance of industry
              experts.
            </h2>
          </div>
        </div>

        <form action="" method="post" className="flex bg-white p-8  w-1/2 ">
          <div className="flex flex-col space-y-4 space-x-4 w-full">
            <div>
              <label htmlFor="Name" className="block pb-1">
                UserName:
              </label>
              <input
                type="text"
                placeholder="Ama Addo"
                className="w-full px-4 py-2 rounded-full border border-gray-300"
              />
              <div>
                <label htmlFor="Email" className="block pb-1 pt-2">
                  Email:
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-full border border-gray-300"
                />
              </div>
            </div>
            <div className="space-x-5">
              <label htmlFor="Gender" className="block pb-1">
                Gender:
              </label>
              <span>
                <input type="radio" name="gender" />
                <label htmlFor="Male" className="inline pb-1 pl-2">
                  Male
                </label>
              </span>
              <span>
                <input type="radio" name="gender" />
                <label htmlFor="Female" className="inline pb-1 pl-2">
                  Female
                </label>
              </span>
              <span>
                <input type="radio" name="gender" />
                <label htmlFor="None" className="inline pb-1 pl-2">
                  Prefer not to say
                </label>
              </span>
            </div>
            <div>
              <label htmlFor="phone" className="block pb-1 pl-2">
                Phone:
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-2 rounded-full border border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block pb-1 pl-2">
                School:
              </label>
              <input
                type="text"
                placeholder="School"
                className="w-full px-4 py-2 rounded-full border border-gray-300"
              />
            </div>
            <button className="w-full px-4 py-2 mt-4 text-white bg-blue-400 rounded-full">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
