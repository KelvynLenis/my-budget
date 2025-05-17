'use server'

import { databases, ID } from '@/lib/appwrite'
import type { ExpenseProps, MonthHistoryProps } from '@/types'
import { revalidateTag } from 'next/cache'

export async function updateMonthHistory({
  id,
  value,
}: { id: string; value: number }) {
  await databases.updateDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_MONTHLY_HISTORY_COLLECTION!,
    id,
    {
      value,
    }
  )

  revalidateTag('expenses')
}
