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
import { new_admin } from "@/server/actions/admin.actions";
import { register } from "@/server/actions/user.action";
import { useAdminStore } from "@/store/admin-store";
import { useUserStore } from "@/store/user-store";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { toast } from "sonner";

const RegisterAdmin = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  const [formState, formAction] = useFormState(new_admin, undefined);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [permission, setPermission] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const {setAdmin} = useAdminStore()
  
  useEffect(() => {
    if (formState?.success && formState?.data) {
      formRef.current?.reset();
      setAdmin(formState?.data);
      router.push("/school/administrator-office/confirmation");
    } else {
      toast(formState?.message);
    }
  }, [formState, router]);
  return (
    <FormModal isOpen={show} onClose={onClose} title="Register Admin">
      <div className="">
        <form action={formAction} className="flex flex-col gap-y-4">
          <span>
            <Label>Name</Label>

            <Input
              id="name"
              name="name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {formState?.errors?.name && (
              <p className="text-red-500">{formState.errors.name}</p>
            )}
          </span>
          <span>
            <Label>Email Address</Label>

            <Input
              id="email"
              name="email"
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
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {formState?.errors?.password && (
              <p className="text-red-500">{formState.errors.password}</p>
            )}
          </span>
          <span className="col-span-2 md:col-span-1 ">
            <Label>Add Permission</Label>
            <Select
              onValueChange={(choice) => setPermission(choice)}
              name="permission"
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Select" defaultValue={permission} />
              </SelectTrigger>
              <SelectContent className="bg-secondary">
                <SelectItem value="registrar">Registrar</SelectItem>
                <SelectItem value="librarian">Librarian</SelectItem>
                <SelectItem value="support">Support</SelectItem>
                <SelectItem value="head">Head</SelectItem>
              </SelectContent>
            </Select>
            {formState?.errors?.permission && (
              <p className="text-sm text-red-500">
                {formState.errors.permission}
              </p>
            )}
          </span>
          <SubmitButton buttonText="Create Account" />
        </form>
      </div>
    </FormModal>
  );
};

export default RegisterAdmin;
