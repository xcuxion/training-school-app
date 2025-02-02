"use client";
import React, { useState } from "react";

import { useFormState, useFormStatus } from "react-dom";
import makeEnquiry from "@/lib/actions/general.action";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const InquiryForm = () => {
  const [state, makeEnquiryAction] = useFormState(makeEnquiry, undefined);
  const { pending } = useFormStatus();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  return (
    <div className="bg-gray-100 text-dark w-full md:w-[450px] rounded-md p-3 md:p-4 md:h-[365px] flex flex-col ">
      <h1 className="font-semibold text-lg md:text-xl">Make An Enquiry</h1>
      <form action={makeEnquiryAction} className="space-y-2">
        <div>
          <Label>Full Name</Label>
          <Input
            id="name"
            name="name"
            className="bg-gray-50"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {state?.errors?.name && (
            <p className="text-red-500">{state.errors.name}</p>
          )}
        </div>
        <div>
          <Label>Email Address</Label>

          <Input
            id="email"
            name="email"
            value={email}
            className="bg-gray-50"
            onChange={(e) => setEmail(e.target.value)}
          />
          {state?.errors?.email && (
            <p className="text-red-500">{state.errors.email}</p>
          )}
        </div>
        <div>
          <Label>Message</Label>

          <Textarea
            id="question"
            name="question"
            className="bg-gray-50 boder- min-h-20"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          {state?.errors?.question && (
            <p className="text-red-500">{state.errors.question}</p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={pending}>
          Send
        </Button>
      </form>
    </div>
  );
};

export default InquiryForm;
