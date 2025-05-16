import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_DATABASE_ID: z.string(),
  NEXT_PUBLIC_LISTS_COLLECTION: z.string(),
  NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string(),
  NEXT_PUBLIC_BUDGET_COLLECTION: z.string(),
  NEXT_PUBLIC_MONTHLY_HISTORY_COLLECTION: z.string(),
  NEXT_PUBLIC_API_KEY: z.string(),
})

export const env = envSchema.parse(process.env)
