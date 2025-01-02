import FormModal from '@/components/form-modal'
import { Input } from '@/components/ui/input'
import { register } from '@/lib/actions/general.action'
import React from 'react'

const Register = ({show, onClose}: {show:boolean, onClose:()=>void}) => {
  return (
   <FormModal formAction={register} isOpen={show} onClose={onClose} title='Become An xcuxioner' buttonText='Register Account' >
    <div className="">

    </div>
    or
    <div className="">
      <Input id='email' name='email'/>
      <Input id='password' name='password'/>
    </div>
   </FormModal>
  )
}

export default Register