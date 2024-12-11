import React from 'react'
import CaseHeader from './case-header'
import SprintField from './sprint-field'
import TaskList from './task-list'
import Backlog from './backlog';

const caseHeaderData = {
  title: "Case Study 1",
  team: [
    { name: "John Doe", email: "john@example.com", image: "/images/jj.png" },
    { name: "Jane Smith", email: "jane@example.com", image: "/images/bayat.jpg" },
    { name: "Jane Smith", email: "jane@example.com", image: "/images/jess.jpg" },
    { name: "Jane Smith", email: "jane@example.com", image: "/images/ned.jpeg" },
    { name: "Jane Smith", email: "jane@example.com", image: "/images/addy.png" },
  ],
  roles: ["Role1", "Role2"],
  startDate: new Date("2023-12-01"),
  deadline: new Date("2023-12-15"),
  supervisor: { name: "Supervisor", email: "supervisor@example.com", image: "/images/supervisor.jpg" },
};


const page = () => {
  return (
    <div className='w-full space-y-6'>
      <CaseHeader {...caseHeaderData}/>
      <SprintField/>
      <Backlog roles={caseHeaderData.roles}/>
    </div>
  )
}

export default page