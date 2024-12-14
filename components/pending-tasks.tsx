import React from 'react'
import TaskCard from './task-card'



const PendingTasks = () => {
  return (
    <div className='w-full bg-school-light border p-2 h-[200px]'>
        Pending tasks
        <TaskCard/>
    </div>
  )
}

export default PendingTasks