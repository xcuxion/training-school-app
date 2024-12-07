import { names } from '@/app/school/main-content'
import Image from 'next/image'
import React from 'react'

const UpcomingSession = () => {
  return (
    <>
      <div>
        <h1 className="font-semibold text-xl">Hello</h1>
        <h3>Welcome Back, {names}! </h3>
      </div >
      <section className="flex space-x-36 bg-[#ffe7fe] px-3 py-1 rounded-lg ">
          <div>
            <h4 className="text-sm py-3">Upcoming Live Session</h4>
            {new Date().toDateString()} <br />
            {new Date().toLocaleTimeString()}
            <button
              type="submit"
              className="bg-blue-800 text-white rounded-lg p-1 mt-3 mb-3 text-sm block px-2"
            >
              Preview Materials
            </button>
          </div>

          <div>
            <Image
              src={"/VectorImg/overview.png"}
              alt="Logo"
              width={150}
              height={20}
              className="mb-1 "
            />
          </div>
      </section>
    </>
  )
}

export default UpcomingSession