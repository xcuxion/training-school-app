"use client";
import FormModal from "@/components/form-modal";
import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "@/lib/actions/user.action";
import { useUserStore } from "@/store/user-store";
import { useRouter } from "next/navigation";
import React, {  useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

const Login = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const [formState, formAction] = useFormState(login, undefined);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { update } = useUserStore();
  useEffect(() => {
    if (formState?.success && formState?.data) {
      formRef.current?.reset();
      update(formState?.data);
      router.push("/school/admission-portal");
    }
  }, [formState, router]);
  return (
    <FormModal isOpen={show} onClose={onClose} title="Sign in to Account">
      <div className="">
        <form action={formAction} className="flex flex-col gap-y-4">
          <span>
            <Label>Email Address</Label>

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
          </span>
          <span>
            <Label>Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {formState?.errors?.password && (
              <p className="text-red-500">{formState.errors.password}</p>
            )}
          </span>
          <SubmitButton buttonText="Login" />
        </form>
      </div>
    </FormModal>
  );
};

export default Login;
