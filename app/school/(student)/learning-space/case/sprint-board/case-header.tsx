import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import React from 'react'

export type Person = {
  name: string
  email: string
  image?: string
}

interface ICaseheader {
  title: string
  team: Person[]
  startDate: Date
  deadline: Date
  supervisor: Person
}

const CaseHeader = ({title, team, startDate, deadline, supervisor}: ICaseheader) => {
  return (
    <div className='w-full'>
        <h1 className="text-3xl font-semibold ">{title}</h1>
        <div className="flex space-x-6 items-center border-b-2 border-outline py-1">
          <span className="border-r-2 border-outline pr-6 py-1">
            {new Date(startDate).toDateString()} - {new Date(deadline).toDateString()}
          </span>
          <span className="inline-flex space-x-[-10px]">
            {
              team.map((member, index)=>(
                <Avatar key={index} className={`w-6 h-6 z-${index+1}`}>
                  <AvatarImage src={member.image} />
                  <AvatarFallback className='bg-pink-300'>{member.name.slice(0,1)}</AvatarFallback>
                </Avatar>
              ))
            }
          </span>
        </div>
        <p className="">Supervised by {supervisor.name}</p>
    </div>
  )
}

export default CaseHeader