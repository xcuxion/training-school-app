import { CheckCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const programOutline = [
    "Peer-led tutorship",
    "One-to-one mentorship",
    "Time with the Professionals",
    "Real-world project execution",
    "Hackathons",
    "",
  ] 

const TrainingCenterSection = () => {
  return (
    <div className="flex justify-between h-[50vh] bg-tw-secondary rounded-[20px] p-5">
    <Image 
      src={'/images/afro1.jpg'}
      alt=''
      width={300}
      height={300}
      className='object-cover rounded-[10px] mr-4'
    />
    <section className=''>
      <h2 className="text-2xl font-semibold">
        Our Training Center
      </h2>
      <p className=" my-1">
        Organized every 3 years with the first batch hosted in 2022. 
        We've always aimed at producing top-notch and elite tech professionals and techpreneurs 
        who will go out there and make positive longlasting impact.
      </p>
      <p className="font-medium">Our program comprises of the following:</p>
      <ul className=''>
        {
          programOutline.map((point, index) => (
            <div className="flex my-1 items-center">
              <CheckCircle className="w-[14px] h-[14px] mr-2 mb-1"/>
              <li key={index} className="">{point}</li>
            </div>
          ))
        }
      </ul>
    </section>
</div>
  )
}

export default TrainingCenterSection
