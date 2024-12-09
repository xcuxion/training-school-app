import React from 'react'
import TaskCard from './task-card'



const PendingTasks = () => {
  return (
    <div className='w-full bg-black'>
        Pending tasks
        <TaskCard/>
    </div>
  )
}

export default PendingTasks