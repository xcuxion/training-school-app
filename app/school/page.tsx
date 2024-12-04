import React from "react";
import Image from "next/image";
import { GoMail } from "react-icons/go";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";

const page = () => {
  const names = ["Yasmins"];
  return (
    <div className="m-3 space-y-5">
      <div>
        <h1 className="font-semibold text-xl">Hello</h1>
        <h3>Welcome Back, {names}! </h3>
      </div >
      <div className="m-3 space-y-5 w-5/5">
        <section className="flex space-x-36 bg-[#ffe7fe] px-3 py-1 rounded-lg ">
          <div>
            <h4 className="text-sm py-3">Upcoming Live Session</h4>
            {new Date().toDateString()} <br />
            {new Date().toLocaleTimeString()}
            <button
              type="submit"
              className="bg-blue-800 text-white rounded-lg p-1 mt-3 mb-3 text-sm block px-2"
            >
              Preview Materials
            </button>
          </div>

          <div>
            <Image
              src={"/VectorImg/overview.png"}
              alt="Logo"
              width={150}
              height={20}
              className="mb-1 "
            />
          </div>
        </section>

        <section className="inline-flex space-x-5 w-5/5  pb-12 mb-5">
          <div className="flex flex-col space-y-3 bg-[#FFF9FF] p-2 w-1/2">
            <h3>Assigned Tasks</h3>
            <div className="bg-white mx-5 px-3 py-1 ">
              <h3>Business Case: E-commerce System</h3>
              <span className="text-sm text-gray-400">
                Deadline:{new Date().toDateString()}
                {new Date().toLocaleTimeString()}
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-3 bg-[#FFF9FF] p-2 w-1/2">
            <h3>Facilitator</h3>

            <div className=" mx-5 flex flex-row text-sm px-3 py-1 gap-2">
              <Image
                src={"/VectorImg/overview.png"}
                alt="Logo"
                width={100}
                height={20}
                className="mb-1 rounded-md"
              />
              <div className="pt-2 ">
                <h2>{names}</h2>
                <p>Founder & Director , XCUXION</p>
                <a
                  href="http://www.tw.org/solomonayisi"
                  className="underline text-blue-400"
                >
                  www.tw.org/solomonayisi
                </a>
              </div>
            </div>
            <p className="px-1">
              Specializes in onceiving and developing ideas into startups.
            </p>
            <div className="flex space-x-10 justify-center">
              <GoMail />
              <BiLogoLinkedinSquare />
              <BsTwitterX />
            </div>
          </div>
        </section>

        <div>
          <section className="inline-flex space-x-5 pb-12 mb-5">
            <div className="flex flex-col space-y-3  bg-[#efefef] p-2 w-1/2">
              <h3>Past Session Resources</h3>
              <div className=" mx-5 px-3 py-1 w-full ">
                <Image
                  src={"/VectorImg/overview.png"}
                  alt="Logo"
                  width={100}
                  height={20}
                  className="mb-1 rounded-md w-1/2"
                />
                <h2>Business Case: E-commerce System</h2>
                <p>Hosted On {new Date().toDateString()}</p>
                <h3>{names}</h3>
              </div>
            </div>
            <div className="flex flex-col space-y-3  bg-[#efefef] p-2 w-1/2">
              <h3>Past Session Resources</h3>
              <div className=" mx-5 px-3 py-1 w-full">
                <Image
                  src={"/VectorImg/overview.png"}
                  alt="Logo"
                  width={100}
                  height={20}
                  className="mb-1 rounded-md w-1/2 "
                />
                <h2>Business Case: E-commerce System</h2>
                <p>Hosted On {new Date().toDateString()}</p>
                <h3>{names}</h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default page;
