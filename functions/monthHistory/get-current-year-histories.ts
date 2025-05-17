'use server'

import type { MonthHistoryProps } from '../../types'

export async function getCurrentYearHistories(): Promise<
  {
    month_and_year: string
    value: number
  }[]
> {
  const date = new Date()
  const monthAndYear = `${date.getMonth() + 1}/${date.getFullYear()}`

  const params = new URLSearchParams({
    'queries[0]': JSON.stringify({
      method: 'contains',
      attribute: 'month_and_year',
      values: [monthAndYear.split('/')[1]],
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

  const result = await res.json()

  const histories = result.documents

  return histories
}
