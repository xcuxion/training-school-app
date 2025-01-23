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
    <div className='w-full bg-light border p-2 md:p-4 md:h-[200px] space-y-3 md:space-y-6'>
        <div className="flex items-center">
          <Image src={image} alt='' width={60} height={60} className='w-[60px] h-[60px] border rounded-sm mr-2 md:mr-4'/>
          <span className="flex flex-col">
            <h2 className="text-lg md:text-xl font-semibold">{name}</h2>
            <p className="text-sm md:text-base">Facilitated by: {facilitator}</p>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-1 md:space-y-0 md:space-x-4">
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