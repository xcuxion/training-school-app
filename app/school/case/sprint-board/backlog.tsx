"use client"
import React, {useState} from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import TaskList from './task-list'
import { FaFilter } from 'react-icons/fa'
import TaskForm from './task-form'


const Backlog = ({roles}: {roles: string[]}) => {
    const [showPopUp, setShowPopUp] = useState<boolean>(false)
  return (
    <div className='space-y-6'>
        <div className="border-2 p-2 rounded-md">
            <div className='flex items-center'>
                <Image src={'/images/tasks.svg'} alt='' width={24} height={24} className='w-8 h-8 mr-1 '/>
                <h1 className="text-lg font-semibold">Backlog</h1>
            </div>
            <div className="flex flex-between mt-4">
                <span className="">
                    {
                    roles.map((role, index)=>(
                        <Button key={index} variant={'secondary'} className='bg-transparent rounded-none hover:bg-secondary'>{role}</Button>
                    ))
                    }
                </span>
                <span className='flex items-center gap-x-2'>            
                    <Button variant={"default"} className="bg-primary rounded-full" onClick={()=>setShowPopUp(true)}>
                        New Task
                        <Image src={'/icons/plus.svg'} alt='icon' width={16} height={16} className='w-4 h-4'/>
                    </Button>
                    <Popover>
                    <PopoverTrigger asChild>
                    <span className='bg-secondary w-8 h-8 flex flex-center hover:bg-primary/10 hover:cursor-pointer rounded-sm'>
                        <FaFilter/>
                    </span>
                    </PopoverTrigger>
                    <PopoverContent>
                    <div className="w-80">Status</div>
                    </PopoverContent>
                    </Popover>
                </span>
            </div>
        </div>
        <TaskList/>
    {
        showPopUp === true && <TaskForm onClose={()=>setShowPopUp(false)} show={showPopUp}/>
    }
  </div>
  )
}

export default Backlog