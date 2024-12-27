import React from 'react'
import TaskCard from './task-card'



const PendingTasks = () => {
  return (
    <div className='w-full bg-school-light p-2 h-[180px] mb-6'>
       Current Module
        <TaskCard/>
    </div>
  )
}

export default PendingTasks