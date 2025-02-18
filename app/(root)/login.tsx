"use client";
import FormModal from "@/components/form-modal";
import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import {  login } from "@/lib/actions/general.action";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

const Login = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const [formState, formAction] = useFormState(login, undefined);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (formState?.success && formState?.data) {
      formRef.current?.reset();
        router.push("/admission-portal");
    }
  }, [formState, router]);
  return (
    <FormModal isOpen={show} onClose={onClose} title="Sign in to Account" >
      <div className="">
        <form action={formAction} className="space-y-2">
          <>
            <Input
              id="email"
              name="email"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formState?.errors?.email && (
              <p className="text-red-500">{formState.errors.email}</p>
            )}
          </>
          <>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {formState?.errors?.email && (
              <p className="text-red-500">{formState.errors.email}</p>
            )}
          </>
          <SubmitButton buttonText="Login" />
        </form>
      </div>
    </FormModal>
  );
};

export default Login;
