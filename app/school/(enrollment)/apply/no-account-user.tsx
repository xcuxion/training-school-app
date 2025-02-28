"use client";
import FormModal from "@/components/form-modal";
import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { register } from "@/lib/actions/user.action";
import { useUserStore } from "@/store/user-store";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const NoAccountUser = ({
  show,
  onClose,
  emailAddress
}: {
  show: boolean;
  onClose: () => void;
  emailAddress: string
}) => {
  const [formState, formAction] = useFormState(register, undefined);
  const [email, setEmail] = useState<string>(emailAddress);
  const [interest, setInterest] = useState("school");
  const [password, setPassword] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { updateUser } = useUserStore();
  useEffect(() => {
    if (formState?.success && formState?.data) {
      formRef.current?.reset();
      updateUser(formState?.data);
      // console.log(formState?.data);
    } else {
      toast(formState?.message);
    }
  }, [formState, router]);
  return (
    <FormModal isOpen={show} onClose={onClose} title="Create An Account">
      <div className="">
        <form action={formAction} className="flex flex-col gap-y-4">
          <span>
            <Label>Email Address</Label>

            <Input
              id="email"
              name="email"
              placeholder="example: abc@xyz.com"
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
              placeholder="example: 1A#sxccDe8"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {formState?.errors?.password && (
              <p className="text-red-500">{formState.errors.password}</p>
            )}
          </span>
          <span className="">
            <Label>Which faction are you interested in?</Label>
            <Select
              onValueChange={(choice) => setInterest(choice)}
              name="interest"
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Select" defaultValue={interest} />
              </SelectTrigger>
              <SelectContent className="bg-secondary">
                <SelectItem value="school">School</SelectItem>
                <SelectItem value="guild">Guild</SelectItem>
                <SelectItem value="startupcenter">Startups Center</SelectItem>
              </SelectContent>
            </Select>
            {formState?.errors?.interest && (
              <p className="text-sm text-red-500">
                {formState.errors.interest}
              </p>
            )}
          </span>
          <SubmitButton buttonText="Create Account" />
        </form>
      </div>
    </FormModal>
  );
};

export default NoAccountUser;
