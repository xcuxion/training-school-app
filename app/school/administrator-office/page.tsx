"use client";
import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login_admin } from "@/lib/actions/admin.actions";
import { useAdminStore } from "@/store/admin-store";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const AdminLoginPage = () => {
  const [formState, formAction] = useFormState(login_admin, undefined);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setAdmin } = useAdminStore();
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (formState?.success && formState?.data) {
      formRef.current?.reset();
      setAdmin(formState?.data);
      toast.message(formState?.message)
      router.push("/school/administrator-office/confirmation");
    }
  }, [formState, router]);

  return (
    <main className="w-full h-screen bg-black flex flex-center">
      <form
        className="flex flex-col md:w-[400px] md:h-[300px] p-5 rounded-lg bg-secondary gap-y-5"
        ref={formRef}
        action={formAction}
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formState?.errors?.email && (
            <p className="text-red-500">{formState.errors.email}</p>
          )}
        </div>
        <div className="">
          <Label htmlFor="password">Key</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          {formState?.errors?.password && (
            <p className="text-red-500">{formState.errors.password}</p>
          )}
        </div>
        <SubmitButton buttonText="Proceed" />
      </form>
    </main>
  );
};

export default AdminLoginPage;
