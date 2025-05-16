'use server'

import { env } from '@/env'

export async function getExpenses() {
  const res = await fetch(
    `https://cloud.appwrite.io/v1/databases/${process.env.NEXT_PUBLIC_DATABASE_ID}/collections/${env.NEXT_PUBLIC_LISTS_COLLECTION}/documents`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'X-Appwrite-Project': process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
        'X-Appwrite-Key': process.env.NEXT_PUBLIC_API_KEY!,
      },
      next: {
        tags: ['lists'],
      },
    }
  )

  if (!res.ok) {
    console.error(res)
    throw new Error('Failed to fetch lists')
  }

  const lists = await res.json()

  return lists
}
