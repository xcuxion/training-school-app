// import { columns } from '@/components/table/columns'
// import { DataTable } from '@/components/table/data-table'
// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import React from 'react'

// async function fetchTasks() {
//   const res = await fetch('http://localhost:3000/tasks')
//   const data = await res.json() 
//   return data
// }

// const TaskList = async () => {
//   // const taskList = await fetchTasks()
//   const taskList = [
//     {
//       id: "1",
//       title: "Design pharmacy admin dashboard",
//       summary: "Develop a dashboard interface for pharmacy admins to manage inventory, employees, and advertisements.",
//       assignees: [
//           {
//               name: "Elena Garcia",
//               email: "elena.garcia@gmail.com",
//               image: "/images/jj.png"
//           }
//       ],
//       deadline: new Date(2024,12,22),
//       status: "To-do"
//     }
//   ]
//   return (
//     <div className='h-80 w-full rounded-md border-2'>
//       <DataTable columns={columns} data={taskList}/>
//     </div>
//   )
// }

// export default TaskList

"use client";

import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";


// Mock Data for TaskList
const taskData = [
  {
    id: "1",
    title: "Design Landing Page",
    summary: "Create a modern landing page with visuals and CTAs.",
    status: "To-do",
    deadline: new Date("2024-12-12"),
    assignees: [
      { name: "Jake Yawson", email: "jyawson@gmail.com", image: "/images/jj.png" },
      { name: "Jake Yawson", email: "jyawson@gmail.com", image: "/images/jj.png" },
    ],
  },
  {
    id: "2",
    title: "Implement CI/CD Pipeline",
    summary: "Set up Jenkins for continuous integration and deployment.",
    status: "In Progress",
    deadline: new Date("2024-12-18"),
    assignees: [
      { name: "Michael Thompson", email: "mike.thompson@gmail.com", image: "/images/addy.png" },
    ],
  },
  {
    id: "3",
    title: "Write Unit Tests",
    summary: "Create unit tests for the consultation module.",
    status: "Completed",
    deadline: new Date("2024-12-14"),
    assignees: [
      { name: "Sophia Li", email: "sophia.li@gmail.com", image: "/images/bayat.jpg" },
      { name: "Sophia Li", email: "sophia.li@gmail.com", image: "/images/bayat.jpg" },
      { name: "Sophia Li", email: "sophia.li@gmail.com", image: "/images/bayat.jpg" },

    ],
  },
];

export default function TaskListPage() {
  return (
    <div className="">
      <DataTable columns={columns} data={taskData} />
    </div>
  );
}
