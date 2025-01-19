import FormModal from "@/components/form-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { googleAuth, login } from "@/lib/actions/general.action";
import React, { useState } from "react";
import { useFormState } from "react-dom";
import { BsApple, BsGoogle } from "react-icons/bs";

const Login = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const [state, action] = useFormState(login, undefined);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <FormModal
      isOpen={show}
      onClose={onClose}
      title="Sign in to Account"
    >
      <form
        action={googleAuth}
        className="grid gap-y-2 md:gap-y-0 md:grid-cols-2 md:gap-x-6"
      >
        <Button
          type="submit"
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
              <p className="text-red-500">{state.errors.email}</p>
            )}
          </>
          <Button type="submit">Login </Button>
        </form>
      </div>
    </FormModal>
  );
};

export default Login;
