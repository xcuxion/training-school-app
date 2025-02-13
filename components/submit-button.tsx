import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'

const SubmitButton = ({buttonText}: {buttonText: string}) => {
    const {pending} = useFormStatus()
  return (
    <Button type='submit' className='w-full mt-2'>
        {pending? "Loading" : buttonText}
    </Button>
  )
}

export default SubmitButton