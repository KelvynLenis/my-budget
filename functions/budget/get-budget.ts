import { env } from '@/env'
import type { Sheet } from '@/types'

export async function getBudget(): Promise<Sheet> {
  const res = await fetch(
    `https://cloud.appwrite.io/v1/databases/${process.env.NEXT_PUBLIC_DATABASE_ID}/collections/${process.env.NEXT_PUBLIC_BUDGET_COLLECTION}/documents`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'X-Appwrite-Project': process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!,
        'X-Appwrite-Key': process.env.NEXT_PUBLIC_API_KEY!,
      },
      next: {
        tags: ['budget'],
      },
    }
  )

  if (!res.ok) {
    console.error(res)
    throw new Error('Failed to fetch lists')
  }

  const data = await res.json()

  const budget = data.documents[0]

  return budget
}
