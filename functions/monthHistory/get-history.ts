'use server'

import type { MonthHistoryProps } from '@/types'

export async function getHistory(): Promise<MonthHistoryProps[]> {
  const res = await fetch(
    `https://cloud.appwrite.io/v1/databases/${process.env.NEXT_PUBLIC_DATABASE_ID}/collections/${process.env.NEXT_PUBLIC_MONTHLY_HISTORY_COLLECTION}/documents`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'X-Appwrite-Project': process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
        'X-Appwrite-Key': process.env.NEXT_PUBLIC_API_KEY!,
      },
      next: {
        tags: ['expenses'],
      },
    }
  )

  if (!res.ok) {
    console.error(res)
    throw new Error('Failed to fetch lists')
  }

  const histories = await res.json()

  return histories.documents
}
