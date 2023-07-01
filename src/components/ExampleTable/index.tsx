import { z } from "zod"

import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { taskSchema } from "./data/schema"
import mockTasks from './data/mockdata'


// Simulate a database read for tasks.
function getTasks() {
//   const tasks = JSON.parse(mockTasks.toString())

  return z.array(taskSchema).parse(mockTasks)
}

export default function TaskPage() {
  const tasks = getTasks()

  return (
    <>
      <div className="md:hidden">
        <div>Dummy Mobile Screen</div>
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}