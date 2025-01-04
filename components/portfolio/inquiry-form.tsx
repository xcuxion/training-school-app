"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useFormState, useFormStatus } from "react-dom";
import makeEnquiry from "@/lib/actions/general.action";

const InquiryForm = () => {
  const [state, makeEnquiryAction] = useFormState(makeEnquiry, undefined);
  const { pending } = useFormStatus();
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [question, setQuestion] = useState<string>('')

  return (
    <div className="bg-secondary w-[450px] rounded-md p-4 h-auto flex flex-col gap-y-4">
      <h1 className="text-2xl">Make An Enquiry</h1>
      <form action={makeEnquiryAction} className="space-y-2">
        <>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            title="Enter your full name as reference"
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />
          {state?.errors?.name && (
            <p className="text-red-500">{state.errors.name}</p>
          )}
        </>
        <>
          <Input 
          id="email" 
          name="email" 
          placeholder="" 
          value={email}
          title="" 
          onChange={(e)=>setEmail(e.target.value)}

          />
          {state?.errors?.email && (
            <p className="text-red-500">{state.errors.email}</p>
          )}
        </>
        <>
          <Textarea
            id="question"
            name="question"
            className="bg-light boder- min-h-20"
            value={question}
            onChange={(e)=>setQuestion(e.target.value)}
          />
          {state?.errors?.question && (
            <p className="text-red-500">{state.errors.question}</p>
          )}
        </>
      </form>
      <Button disabled={pending}>Send</Button>
    </div>
  );
};

export default InquiryForm;
