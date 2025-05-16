import { account } from '@/lib/appwrite'

export async function getUser() {
  const user = await account.get()

  return user
}
