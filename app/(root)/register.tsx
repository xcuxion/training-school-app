"use client";
import FormModal from "@/components/form-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register } from "@/lib/actions/general.action";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import {  BsGoogle } from "react-icons/bs";

const Register = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [state, action] = useFormState(register, undefined);
  return (
    <FormModal
      isOpen={show}
      onClose={onClose}
      title="Become An xcuxioner"
    >
      <div className="rounded-full border border-outline hover:bg-outline hover:cursor-pointer p-2 md:text-sm flex flex-center gap-x-4">
          <BsGoogle />
          Sign in with Google
      </div>
      <span className="flex flex-center text-lg leading-tight font-semibold italic">OR</span>
      <div className="">
        <form action={action} className="space-y-2">
          <>
            <Input
              id="email"
              name="email"
              placeholder="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {state?.errors?.email && (
              <p className="text-red-500">{state.errors.email}</p>
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
            {state?.errors?.email && (
              <p className="text-red-500">{state.errors.password}</p>
            )}
          </>
          <Button type="submit">Register Account </Button>
        </form>
      </div>
    </FormModal>
  );
};

export default Register;
