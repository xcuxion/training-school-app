import { DataTable } from "@/components/admin/data-table"
import { columns, Payment } from "@/components/columns"


async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728de52f",
      amount: 150,
      status: "pending",
      email: "p@example.com",
    },
    {
      id: "728ed78f",
      amount: 200,
      status: "pending",
      email: "n@example.com",
    },
    {
      id: "728ed99f",
      amount: 250,
      status: "pending",
      email: "k@example.com",
    },
    {
      id: "708ed52f",
      amount: 100,
      status: "pending",
      email: "my@example.com",
    },
    {
      id: "798de52f",
      amount: 150,
      status: "pending",
      email: "pq@example.com",
    },
    {
      id: "788ed78f",
      amount: 200,
      status: "pending",
      email: "ne@example.com",
    },
    {
      id: "718ed99f",
      amount: 250,
      status: "pending",
      email: "ky@example.com",
    },
    {
      id: "708ed5a2",
      amount: 100,
      status: "pending",
      email: "my@example.com",
    },
    {
      id: "798gi32f",
      amount: 150,
      status: "pending",
      email: "pq@example.com",
    },
    {
      id: "78833i8f",
      amount: 200,
      status: "pending",
      email: "ne@example.com",
    },
    {
      id: "723re9f",
      amount: 250,
      status: "pending",
      email: "ky@example.com",
    },
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
