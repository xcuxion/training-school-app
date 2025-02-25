import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'

const SubmitButton = ({buttonText}: {buttonText: string}) => {
    const {pending} = useFormStatus()
  return (
    <Button type='submit' disabled={pending? true: false} className={`${pending ? 'opacity-50 bg-white' : 'opacity-100'} w-full`}>
        {pending? "Loading..." : buttonText}
    </Button>
  )
}

export default SubmitButton