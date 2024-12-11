import React from 'react'

export interface ICaseDescription {
  title: string
  coverImage: string
  problemStatement: string
  requirements: string[]
}



const CaseDescription = ({title, coverImage, problemStatement, requirements}: ICaseDescription) => {
  return (
    <div className="">
      <div
        className="w-full h-[200px] bg-cover bg-top flex items-center justify-center"
        style={{ backgroundImage: `url(${coverImage})` }}
      >
        <h2 className="text-[#9D2292] bg-school-secondary p-2 text-lg text-center w-4/5 mx-auto ">
          {title}
        </h2>
      </div>
      <div className="space-y-10">
        <section>
          <h3 className='font-semibold text-lg'>Problem Statement</h3>
          <p>
            {problemStatement}
          </p>
        </section>

        <section>
          <h3 className='font-semibold text-lg'>Responsibilities</h3>
          <ol className='list-disc'>
            You are required to:
            <span className="">
              {
                requirements.map((task, index)=>(
                  <li className='ml-4' key={index}>{task}</li>
                ))
              }
            </span>
          </ol>
        </section>
      </div>
      </div>
  )
}

export default CaseDescription