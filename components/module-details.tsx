import React from 'react'
import ResourceCard, { TResource } from './resource-card'
import Image from 'next/image'



interface IModuleDetails {
  image: string
  name: string
  facilitator: string
  resources: TResource[]
}

const ModuleDetails = ({image, name, facilitator, resources}: IModuleDetails) => {
  return (
    <div className='w-full bg-school-light border p-4 h-[200px] space-y-6'>
        <div className="flex items-center">
          <Image src={image} alt='' width={60} height={60} className='w-[60px] h-[60px] border rounded-sm mr-4'/>
          <span className="flex flex-col">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="">Facilitated by: {facilitator}</p>
          </span>
        </div>
        <div className="grid grid-cols-3 space-x-4">
          {
            resources.map((resource, index)=>(
              <ResourceCard url={resource.url} title={resource.title} key={index}/>
            ))
          }
        </div>
    </div>
  )
}

export default ModuleDetails