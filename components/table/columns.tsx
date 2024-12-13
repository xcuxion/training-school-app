"use client"

import { Person } from "@/app/school/case/sprint-board/case-header"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TaskList = {
  id: string
  title: string
  summary: string
  status: "To-do" | "In Progress" | "Completed" | "Evaluated" | string
  deadline: Date
  assignees: Person[]
}

export const columns: ColumnDef<TaskList>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "summary",
    header: "Summary",
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
  },
  {
    accessorKey: "assignees",
    header: "Assignee(s)",
  },
]

for (let index = 0; index <= 5; index++) {
    console.log(index)
    
}
