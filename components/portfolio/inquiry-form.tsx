"use client"
import React, { useActionState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import makeEnquiry from '@/lib/actions/general.action'

const InquiryForm = () => {
    const [state, makeEnquiryAction] = useActionState(makeEnquiry, undefined)
    const {pending} = useFormStatus()
  return (
    <div>
        <h1 className="text-2xl">Make An Enquiry</h1>
        <form action={makeEnquiryAction} className="">
            <Input id='name' name='name' placeholder='Your name' title='Enter your full name as reference'/>
            <Input id='email' name='email' placeholder='' title=''/>
            <Textarea/>
            <Button disabled={pending}/>
        </form>
    </div>
  )
}

export default InquiryForm