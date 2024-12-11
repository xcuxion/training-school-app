import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'

type Person = {
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
  roles: string[]
}

const CaseHeader = ({title, team, startDate, deadline, supervisor, roles}: ICaseheader) => {
  return (
    <div className='w-full'>
        <h1 className="text-3xl font-semibold ">{title}</h1>
        <div className="flex space-x-6 items-center border-b-2 py-1">
          <span className="border-r-2 pr-6 py-1">
            {new Date(startDate).toDateString()} - {new Date(deadline).toDateString()}
          </span>
          <span className="inline-flex space-x-[-10px]">
            {
              team.map((member, index)=>(
                <Avatar key={index} className='w-6 h-6'>
                  <AvatarImage src={member.image} />
                  <AvatarFallback>{member.name.slice(0,1)}</AvatarFallback>
                </Avatar>
              ))
            }
          </span>
        </div>
    </div>
  )
}

export default CaseHeader