'use server'
import { getExpenses } from '@/functions/expenses/get-expenses'
import { ListItem } from './ListItem'
import type { ExpenseProps } from '@/types'

export async function List() {
  const result = await getExpenses()

  const expesesList = result.documents as ExpenseProps[]

  return (
    <>
      <ul className="w-full h-52 bg-zinc-700 rounded-lg max-h-52 flex flex-col gap-3 overflow-y-scroll pr-2 py-1">
        {expesesList.length > 0 ? (
          expesesList.map(list => (
            <ListItem key={list.$id} title={list.title} cost={list.price} />
          ))
        ) : (
          <span className="text-center text-zinc-300">
            Nenhuma despesa registrada
          </span>
        )}
      </ul>
    </>
  )
}
