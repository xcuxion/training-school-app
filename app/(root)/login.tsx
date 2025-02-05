"use client";
import FormModal from "@/components/form-modal";
import SubmitButton from "@/components/submit-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { googleAuth, login } from "@/lib/actions/general.action";
import { useUserStore } from "@/store/user-store";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { BsGoogle } from "react-icons/bs";

const Login = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const [formState, formAction] = useFormState(login, undefined);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { update } = useUserStore();
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (formState?.success && formState?.data) {
      formRef.current?.reset();
      useUserStore.getState().update(formState.data); // Update Zustand store

      if (formState?.data.applicant?.id) {
        router.push("/admission-portal");
      } else if (formState?.data.facilitator?.id) {
        router.push("/admission-portal");
      }
    }
  }, [formState, router]);
  return (
    <FormModal isOpen={show} onClose={onClose} title="Sign in to Account">
      <form
        ref={formRef}
        action={googleAuth}
        className="grid gap-y-2 md:gap-y-0 md:grid-cols-2 md:gap-x-6"
      >
        <Button
          type="submit"
          variant={"outline"}
          className="rounded-full border border-outline hover:bg-outline hover:cursor-pointer p-2 md:text-sm flex flex-center gap-x-4"
        >
          <BsGoogle />
          Sign in with Google
        </Button>
      </form>
      <span className="flex flex-center text-lg leading-tight font-semibold italic">
        OR
      </span>
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
