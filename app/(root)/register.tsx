"use client"
import FormModal from '@/components/form-modal'
import { Input } from '@/components/ui/input'
import { register } from '@/lib/actions/general.action'
import React, { useActionState } from 'react'

const Register = ({show, onClose}: {show:boolean, onClose:()=>void}) => {
  const [state, action] = useActionState(register, undefined);
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
          <Input id="name" name="name" />
          {state?.errors?.name && (
            <p className="text-red-500">{state.errors.name}</p>
          )}
        </>
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
  )
}

export default Register