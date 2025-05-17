'use server'

import { databases, ID } from '@/lib/appwrite'
import type { ExpenseProps } from '@/types'
import { revalidateTag } from 'next/cache'

export async function createExpense(values: ExpenseProps) {
  await databases.createDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_LISTS_COLLECTION!,
    ID.unique(),
    {
      title: values.title,
      price: values.price,
      date: values.date,
    }
  )

  revalidateTag('expenses')
}
