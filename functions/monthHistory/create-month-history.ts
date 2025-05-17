'use server'

import { databases, ID } from '@/lib/appwrite'
import type { ExpenseProps, MonthHistoryProps } from '@/types'
import { revalidateTag } from 'next/cache'

export async function createMonthHistory(values: MonthHistoryProps) {
  await databases.createDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_MONTHLY_HISTORY_COLLECTION!,
    ID.unique(),
    {
      month_and_year: values.monthAndYear,
      value: values.value,
    }
  )

  revalidateTag('expenses')
}
