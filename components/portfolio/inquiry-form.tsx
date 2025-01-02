"use client";
import React, { useActionState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import makeEnquiry from "@/lib/actions/general.action";

const InquiryForm = () => {
  const [state, makeEnquiryAction] = useActionState(makeEnquiry, undefined);
  const { pending } = useFormStatus();
  return (
    <div className="bg-secondary p-4 space-y-4">
      <h1 className="text-2xl">Make An Enquiry</h1>
      <form action={makeEnquiryAction} className="w-2/3 mx-auto">
        <>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            title="Enter your full name as reference"
          />
            {state?.errors?.name && (<p className='text-red-500'>{state.errors.name}</p>)}
            </>
        <>
          <Input id="email" name="email" placeholder="" title="" />
          {state?.errors?.email && (<p className='text-red-500'>{state.errors.email}</p>)}

        </>
        <>
          <Textarea id="question" name="question"/>
          {state?.errors?.question && (<p className='text-red-500'>{state.errors.question}</p>)}

        </>
      </form>
      <Button disabled={pending} />
    </div>
  );
};

export default InquiryForm;
