'use server'

import { databases } from '@/lib/appwrite'
import { revalidateTag } from 'next/cache'
import { getBudget } from './get-budget'

export async function addBudget({
  id,
  budget,
}: { id: string; budget: number }) {
  // const result = await getBudget()
  // const currentBudget = result.budget

  await databases.updateDocument(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_BUDGET_COLLECTION!,
    id,
    {
      budget: budget,
    }
  )

  revalidateTag('budget')
}
