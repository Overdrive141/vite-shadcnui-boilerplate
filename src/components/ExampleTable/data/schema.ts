import { z } from "zod"

const deleteTask = z.function()
  .args(z.string())
  .returns(z.void())
  .optional();

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
  deleteTask
})

export type Task = z.infer<typeof taskSchema>