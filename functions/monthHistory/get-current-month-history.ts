'use server'

import type { MonthHistoryProps } from '@/types'

export async function getCurrentMonthHistory(): Promise<MonthHistoryProps> {
  const date = new Date()
  const monthAndYear = `${date.getMonth() + 1}/${date.getFullYear()}`

  const params = new URLSearchParams({
    'queries[0]': JSON.stringify({
      method: 'equal',
      attribute: 'month_and_year',
      values: [monthAndYear],
    }),
  })

  const res = await fetch(
    `https://cloud.appwrite.io/v1/databases/${process.env.NEXT_PUBLIC_DATABASE_ID}/collections/${process.env.NEXT_PUBLIC_MONTHLY_HISTORY_COLLECTION}/documents?${params}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'X-Appwrite-Project': process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
        'X-Appwrite-Key': process.env.NEXT_PUBLIC_API_KEY!,
      },
      next: {
        tags: ['history'],
      },
    }
  )

  if (!res.ok) {
    console.error(res)
    throw new Error('Failed to fetch lists')
  }

  const histories = await res.json()

  const history = histories.documents[0]

  return history
}
