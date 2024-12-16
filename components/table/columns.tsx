import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

type Person = {
  name: string;
  email: string;
  image?: string;
};

export type TaskList = {
  id: string;
  title: string;
  summary: string;
  status: "To-do" | "In Progress" | "Completed" | "Evaluated" | string;
  deadline: Date;
  assignees: Person[];
};

export const columns: ColumnDef<TaskList>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "summary",
    header: "Summary",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
    cell: ({ row }) => {
      const date = new Date(row.original.deadline).toLocaleDateString();
      return <span>{date}</span>;
    },
  },
  {
    accessorKey: "assignees",
    header: "Assignee(s)",
    cell: ({ row }) => {
      const assignees = row.original.assignees;
      return (
        <div className="flex -space-x-2 overflow-hidden">
          {assignees.map((person, index) => (
            <Image
              key={index}
              width={30}
              height={30}
              src={person.image || "/default-avatar.png"}
              alt={person.name}
              className="w-8 h-8 rounded-full border"
              title={person.name}
            />
          ))}
        </div>
      );
    },
  },
];


// "use client"

// import { ColumnDef } from "@tanstack/react-table"

// type Person = {
//   name: string
//   email: string
//   image?: string
// }

// export type TaskList = {
//   id: string
//   title: string
//   summary: string
//   status: "To-do" | "In Progress" | "Completed" | "Evaluated" | string
//   deadline: Date
//   assignees: Person[]
// }

// export const columns: ColumnDef<TaskList>[] = [
//   {
//     accessorKey: "status",
//     header: "Status",
//   },
//   {
//     accessorKey: "summary",
//     header: "Summary",
//   },
//   {
//     accessorKey: "deadline",
//     header: "Deadline",
//   },
//   {
//     accessorKey: "assignees",
//     header: "Assignee(s)",
//   },
// ]
