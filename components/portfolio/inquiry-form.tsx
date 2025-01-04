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
    <div className="bg-secondary min-w-[350px] p-4 h-auto flex flex-col gap-y-4">
      <h1 className="text-2xl">Make An Enquiry</h1>
      <form action={makeEnquiryAction} className="space-y-2">
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
          <Textarea id="question" name="question" className="bg-light border "/>
          {state?.errors?.question && (<p className='text-red-500'>{state.errors.question}</p>)}
        </>
      </form>
      <Button disabled={pending}>Send</Button>
    </div>
  );
};

export default InquiryForm;
