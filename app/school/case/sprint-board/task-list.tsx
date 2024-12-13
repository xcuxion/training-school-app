import { columns } from '@/components/table/columns'
import { DataTable } from '@/components/table/data-table'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

async function fetchTasks() {
  const res = await fetch('http://localhost:3000/tasks')
  const data = await res.json() 
  return data
}

const TaskList = async () => {
  // const taskList = await fetchTasks()
  const taskList = [
    {
      id: "1",
      title: "Design pharmacy admin dashboard",
      summary: "Develop a dashboard interface for pharmacy admins to manage inventory, employees, and advertisements.",
      assignees: [
          {
              "name": "Elena Garcia",
              "email": "elena.garcia@gmail.com",
              "image": "/images/jj.png"
          }
      ],
      deadline: new Date(2024,12,22),
      status: "To-do"
    }
  ]
  return (
    <div className='h-80 w-full rounded-md border-2'>
      <DataTable columns={columns} data={taskList}/>
    </div>
  )
}

export default TaskList