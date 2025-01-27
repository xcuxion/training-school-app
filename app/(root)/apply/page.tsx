"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { new_application } from "@/lib/actions/admission.actions";

const initial = {
  fname: "",
  oname: "",
  lname: "",
  nationality: "",
  dob: "",
  contact: "",
  gender: "",
  email: "",
  school: "",
  year: "",
  programme: "",
  reason: "",
  balance: "",
  scholarship: "",
  statement: "",
  laptop: "",
};
const ApplicationPage = () => {
  const [state, action] = useFormState(new_application, undefined);
  const [value, setValue] = useState(initial);
  return (
    <div className="p-4 md:py-5 md:px-10 md:w-2/3 mx-auto">
      <div className="flex flex-col-reverse md:flex-row md:flex-between py-2 md:py-4">
        <h1 className="text-3xl md:text-4xl font-bold">Application Form</h1>
        <Image
          src={"/logo.svg"}
          alt="logo"
          width={200}
          height={60}
          className="w-[150px] h-[45px] md:w-[200px] h-[]60px"
        />
      </div>
      <p className="font-sm">
        This program provides training in software engineering,
        entrepreneurship, marketing, and product development. We expect our
        trainees to apply these skills to create viable startups that can move
        from concept to launch (from 0 to 1). Our ultimate goal is to ensure
        that every graduate of XCUXION School is equipped not only with
        technical skills but also with the entrepreneurial mindset needed to
        scale their ventures.
      </p>
      <form action={action} className="">
        <div className="my-4 space-y-3">
          <h2 className="text-2xl font-semibold">Personal Information</h2>
          <p className="text-xs">Fields with * are required</p>
          <div className="grid gap-y-2 md:gap-y-0 md:grid-cols-3 md:gap-x-6">
            <span className="">
              <Label>First name*</Label>
              <Input
                type="text"
                value={value.fname}
                name="fname"
                id="fname"
                onChange={(e) =>
                  setValue({ ...value, fname: e.target.value })
                }
              />
              {state?.errors?.fname && (
                <p className="text-sm text-red-500">{state.errors.fname}</p>
              )}
            </span>
            <span className="">
              <Label>Other name</Label>
              <Input
                type="text"
                value={value.oname}
                name="oname"
                id="oname"
                onChange={(e) =>
                  setValue({ ...value, oname: e.target.value })
                }
              />
              {state?.errors?.oname && (
                <p className="text-sm text-red-500">{state.errors.oname}</p>
              )}
            </span>
            <span className="">
              <Label>Last name*</Label>
              <Input
                type="text"
                value={value.lname}
                name="lname"
                id="lname"
                onChange={(e) =>
                  setValue({ ...value, lname: e.target.value })
                }
              />
              {state?.errors?.lname && (
                <p className="text-sm text-red-500">{state.errors.lname}</p>
              )}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-2 md:gap-y-0 gap-x-4 md:grid-cols-3 md:gap-x-6">
            <span className="w-full">
              <Label>Date of Birth*</Label>
              <Input
                type="date"
                value={value.dob}
                name="dob"
                className=""
                id="dob"
                onChange={(e) => setValue({ ...value, dob: e.target.value })}
              />
              {state?.errors?.dob && (
                <p className="text-sm text-red-500">{state.errors.dob}</p>
              )}
            </span>
            <span className="">
              <Label>Gender</Label>
              <RadioGroup
                defaultValue="male"
                className="flex gap-x-6 h-9 items-center"
                name="gender"
                onValueChange={(choice) => {
                  setValue({ ...value, gender: choice });
                }}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </span>
            <span className="col-span-2 md:col-span-1">
              <Label>Nationality</Label>
              <Input
                type="text"
                value={value.nationality}
                name="nationality"
                id="nationality"
                onChange={(e) =>
                  setValue({ ...value, nationality: e.target.value })
                }
              />
              {state?.errors?.nationality && (
                <p className="text-sm text-red-500">
                  {state.errors.nationality}
                </p>
              )}
            </span>
          </div>
          <div className="grid md:grid-cols-2 md:gap-x-6">
            <span className="">
              <Label>Email</Label>
              <Input
                type="text"
                value={value.email}
                name="email"
                id="email"
                onChange={(e) =>
                  setValue({ ...value, email: e.target.value })
                }
              />
              {state?.errors?.email && (
                <p className="text-sm text-red-500">{state.errors.email}</p>
              )}
            </span>
            <span className="">
              <Label>Contact</Label>
              <Input
                type="text"
                value={value.contact}
                name="contact"
                id="contact"
                onChange={(e) =>
                  setValue({ ...value, contact: e.target.value })
                }
              />
              {state?.errors?.contact && (
                <p className="text-sm text-red-500">{state.errors.contact}</p>
              )}
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-y-2 md:gap-y-0 md:gap-x-6">
            <span className="">
              <Label>School</Label>
              <Select
                onValueChange={(choice) =>
                  setValue({ ...value, school: choice })
                }
                name="school"
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="knust">
                    Kwame Nkrumah University of Science and Technology
                  </SelectItem>
                  <SelectItem value="ug">
                    University of Ghana - Legon
                  </SelectItem>
                  <SelectItem value="ashesi">Ashesi University</SelectItem>
                  <SelectItem value="none">Not a student</SelectItem>
                </SelectContent>
              </Select>

              {state?.errors?.school && (
                <p className="text-sm text-red-500">{state.errors.school}</p>
              )}
            </span>
            <span className="">
              <Label>Programme</Label>
              <Input
                type="text"
                value={value.programme}
                name="programme"
                id="programme"
                onChange={(e) =>
                  setValue({ ...value, programme: e.target.value })
                }
              />
              {state?.errors?.programme && (
                <p className="text-sm text-red-500">{state.errors.programme}</p>
              )}
            </span>
            <span className="">
              <Label>Current Year</Label>
              <Input
                type="text"
                value={value.year}
                name="year"
                id="year"
                onChange={(e) => setValue({ ...value, year: e.target.value })}
              />
              {state?.errors?.year && (
                <p className="text-sm text-red-500">{state.errors.year}</p>
              )}
            </span>
          </div>
        </div>
        <div className="my-4 space-y-2">
          <h2 className="text-2xl font-semibold">Aspiration</h2>
          <p className="text-xs">Fields with * are required</p>
          <div className="">
            <Label>
              Why do you think you should be accepted into this programme?*
            </Label>
            <Textarea
              value={value.reason}
              name="reason"
              id="reason"
              onChange={(e) => setValue({ ...value, reason: e.target.value })}
              className="h-40"
            />
            {state?.errors?.reason && (
              <p className="text-sm text-red-500">{state.errors.reason}</p>
            )}
          </div>
          <div className="">
            <Label>
              How do you intend to balance this training programme with your
              academics?*
            </Label>
            <Textarea
              value={value.balance}
              name="balance"
              id="balance"
              onChange={(e) =>
                setValue({ ...value, balance: e.target.value })
              }
              className="h-40"
            />
            {state?.errors?.balance && (
              <p className="text-sm text-red-500">{state.errors.balance}</p>
            )}
          </div>
          <div className="bg-secondary rounded-md p-4">
            <p className="font-semibold">
              Do you have a working laptop of at least 4GB RAM?*
            </p>
            <RadioGroup
              name="laptop"
              defaultValue="no"
              className="flex mt-2 gap-x-10"
              onValueChange={(choice) => {
                setValue({ ...value, laptop: choice });
              }}
            >
              <span className="flex items-center space-x-2 ">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes</Label>
              </span>
              <span className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No</Label>
              </span>
            </RadioGroup>

            {state?.errors?.lname && (
              <p className="text-sm text-red-500">{state.errors.lname}</p>
            )}
          </div>
          <div className="bg-secondary rounded-md p-4">
            <p className="font-semibold">
              Will you need a scholarship to join this programme?*
            </p>
            <RadioGroup
              defaultValue="no"
              className="flex flex-col md:flex-row mt-2 gap-y-2 md:gap-y-0 md:gap-x-10"
              name="scholarship"
              onValueChange={(choice) => {
                setValue({ ...value, scholarship: choice });
              }}
            >
              <span className="flex items-center space-x-2 ">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes">Yes, I will need a scholarship</Label>
              </span>
              <span className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no">No, I can afford it</Label>
              </span>
            </RadioGroup>

            {state?.errors?.lname && (
              <p className="text-sm text-red-500">{state.errors.lname}</p>
            )}
          </div>
          {value.scholarship === "yes" ? (
            <div className="">
              <Label>Why should we give you this scholarship?*</Label>
              <Textarea
                value={value.statement}
                name="statement"
                id="statement"
                onChange={(e) =>
                  setValue({ ...value, statement: e.target.value })
                }
                className="h-40"
              />
              {state?.errors?.statement && (
                <p className="text-sm text-red-500">{state.errors.statement}</p>
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <Button type="submit" className="w-40 rounded-full">
          Apply!
        </Button>
      </form>
    </div>
  );
};

export default ApplicationPage;
