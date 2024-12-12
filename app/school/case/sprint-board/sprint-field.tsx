import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const SprintField = () => {
  const tasksInSprint = []
  return (
    <div className='w-full h-48 border-2 rounded-md'>
      <div className="flex flex-between py-1.5 px-2 border-b-2">
        <span className="flex items-center">
          <Image src={'/icons/sprint-cycle.svg'} alt='icon' width={30} height={30} className=''/>
          <h3 className="text-lg font-medium">Sprints</h3>
        </span>
        <Button variant={"secondary"} className='border-2 border-school-primary text-school-primary bg-school-secondary'>
          Start Sprint
        </Button>
      </div>
      <div className="p-2">
        {
          tasksInSprint.length > 0 ? (
            <div className=''></div>
          ): (
            <div className='flex flex-col flex-center'>
              <Image src={'/images/agile-project.svg'} alt='images' width={125} height={125} className='w-[105px] h-[105px]'/>
              <p className="text-sm">Drag and drop tasks here to create a new sprint or manually select tasks from panel to start your next sprint!</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SprintField