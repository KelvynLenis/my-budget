import { z } from 'zod'

export interface ExpenseProps {
  $id?: string
  title: string
  price: number
  date: string
}

const sheetSchema = z.object({
  $collectionId: z.string(),
  $createdAt: z.string().datetime(), // ou apenas z.string() se não quiser validar o formato ISO
  $databaseId: z.string(),
  $id: z.string(),
  $permissions: z.array(z.string()), // ou z.array(z.any()) se aceitar outros tipos
  $updatedAt: z.string().datetime(), // idem ao createdAt
  budget: z.number(),
  expenses: z.number().nullable(),
  user_id: z.string().nullable(),
})

export type Sheet = z.infer<typeof sheetSchema>
