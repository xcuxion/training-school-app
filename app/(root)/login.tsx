import FormModal from "@/components/form-modal";
import { Input } from "@/components/ui/input";
import { login } from "@/lib/actions/general.action";
import React from "react";
import { useFormState } from "react-dom";

const Login = ({ show, onClose }: { show: boolean; onClose: () => void }) => {
  const [state, action] = useFormState(login, undefined);

  return (
    <FormModal
      isOpen={show}
      onClose={onClose}
      title="Become An xcuxioner"
      buttonText="Register Account"
    >
      <div className="">
        <span className="rounded-full order">Sign up with google</span>
      </div>
      or
      <div className="">
        <form action={action}>
          <>
            <Input id="email" name="email" />
            {state?.errors?.email && (
              <p className="text-red-500">{state.errors.email}</p>
            )}
          </>
          <>
            <Input id="password" name="password" />
            {state?.errors?.email && (
              <p className="text-red-500">{state.errors.email}</p>
            )}
          </>
        </form>
      </div>
    </FormModal>
  );
};

export default Login;
