import React from 'react'
import CaseHeader from './case-header'
import SprintField from './sprint-field'
import TaskList from './task-list'

const caseHeaderData = {
  title: "Case Study 1",
  team: [
    { name: "John Doe", email: "john@example.com", image: "/images/jj.png" },
    { name: "Jane Smith", email: "jane@example.com", image: "/images/bayat.jpg" },
  ],
  startDate: new Date("2023-12-01"),
  deadline: new Date("2023-12-15"),
  supervisor: { name: "Supervisor", email: "supervisor@example.com", image: "/images/supervisor.jpg" },
  roles: ["Role1", "Role2"],
};


const page = () => {
  return (
    <div className='w-full'>
      <CaseHeader {...caseHeaderData}/>
      <SprintField/>
      <TaskList/>
    </div>
  )
}

export default page