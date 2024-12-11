import { name } from '@/app/school/main-content'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const UpcomingSession = () => {
  return (
    <>
      <div className='w-full bg-white sticky top-0 py-2'>
        <h1 className="font-semibold text-xl">Hello</h1>
        <h3>Welcome Back, {name}! </h3>
      </div >
      <section className="flex flex-start bg-school-secondary p-4 mt-4 rounded-lg ">
          <div className=''>
            <h4 className="text-sm font-semibold">Upcoming Live Session</h4>
            <div className="mt-8">
              <h1 className="text-4xl font-semibold">
                {new Date().toDateString()} 
              </h1>
              <p className="text-2xl my-1 font-medium">
                {new Date().toLocaleTimeString()}
              </p>
              <Button
                variant="default"
                className="bg-school-primary text-white rounded-full"
              >
                Preview Materials
              </Button>
            </div>
          </div>

            <Image
              src={"/VectorImg/overview.png"}
              alt="Logo"
              width={250}
              height={200}
              className="mb-1 w-[250px] h-[200px] object-cover"
            />
      </section>
    </>
  )
}

export default UpcomingSession