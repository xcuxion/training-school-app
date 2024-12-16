import React from "react";
import MainContent from "../main-content";
import SideSection from "../side-section";
import { Button } from "@/components/ui/button";
import Resources from "./resources";
const page = () => {
  return (
    <>
      <div className=" w-full">
        <MainContent className="w-full space-y-16">
          <div className=" bg-blue-100 p-6 rounded-lg">
            <div>
              <p className="text-lg text-blue-500">Deadline:</p>
              <div className="flex justify-between mt-2 ">
                <div className="pr-4 text-xl font-bold">
                  <span className="mr-4 ">
                    {new Date().toDateString().slice(4)} @
                  </span>
                  {new Date().toLocaleTimeString()}
                </div>
                <div>
                  <Button className="bg-blue-800 text-white rounded-r-md hover:bg-blue-600">
                    Add Response
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xl">
            <h1>Topic: Systems Analysis & Design</h1>
          </div>
        </MainContent>
      </div>

      <SideSection>
        <div className="bg-blue-100 p-6">
          <div >
            <h1 className="text-xl">Resources</h1>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Resources />
            <Resources />
            <Resources />
            <Resources />
            <Resources />
            <Resources />
          </div>
        </div>
      </SideSection>
    </>
  );
};

export default page;
