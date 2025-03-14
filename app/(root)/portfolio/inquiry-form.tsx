"use client";
import React, { useEffect, useState, useRef } from "react";
import { useFormState } from "react-dom";
import makeEnquiry from "@/server/actions/user.action";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/submit-button";
import { toast } from "sonner";

const InquiryForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // ✅ Track form submission state
  const [state, makeEnquiryAction] = useFormState(makeEnquiry, undefined);

  // ✅ Controlled form states
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [question, setQuestion] = useState<string>("");

  useEffect(() => {
    // console.log("Form Submission State:", state); // ✅ Debugging log

    if (state?.success) {
      toast("Your inquiry has been submitted successfully!");

      // ✅ Clear form fields properly
      setName("");
      setEmail("");
      setQuestion("");

      // ✅ Reset form manually
      if (formRef.current) {
        formRef.current.reset();
      }
    } else if (state?.errors) {
      toast("There was an error submitting your inquiry.");
    }
  }, [state, toast]); // ✅ Ensure useEffect re-runs when state updates

  return (
    <div className="bg-black text-fontColor w-full md:w-[550px] rounded-md p-3 md:p-4 md:h-[455px] flex flex-col">
      <h1 className="font-semibold text-lg md:text-xl">Make An Enquiry</h1>
      <form ref={formRef} action={makeEnquiryAction} className="space-y-2">
        <div>
          <Label>Full Name</Label>
          <Input
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name} // ✅ Controlled input
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
            value={email} // ✅ Controlled input
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
            className="min-h-20 md:min-h-44"
            value={question} // ✅ Controlled input
            onChange={(e) => setQuestion(e.target.value)}
          />
          {state?.errors?.question && (
            <p className="text-red-500">{state.errors.question}</p>
          )}
        </div>
        <SubmitButton buttonText="Send" />
      </form>
    </div>
  );
};

export default InquiryForm;
