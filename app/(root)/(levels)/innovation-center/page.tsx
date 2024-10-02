"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cohort_application } from '@/lib/actions/application.actions'
import React, { useActionState } from 'react'

const page = () => {
  const [state, action] = useActionState(cohort_application, null)
  return (
    <div>
      <h2 className="text-xl font-bold">Apply To Join</h2>
      <form action={action}>
        <Input
          type='text'
          name='name'
          placeholder='Full name'
          className='border p-2'
        />
        <Input
          type='text'
          name='school'
          placeholder='School'
          className='border p-2'
        />
        <Button
          type='submit'
          className=''
        >
          Apply Now!
        </Button>
      </form>
    </div>
  )
}

export default page
