'use server'
import { getExpenses } from '@/functions/expenses/get-expenses'
import { ListItem } from './ListItem'
import type { ExpenseProps } from '@/types'

export async function ExpensesList() {
  const result = await getExpenses()

  const expesesList = result.documents as ExpenseProps[]

  return (
    <>
      <ul className="w-full lg:w-1/3 h-52 bg-zinc-700 rounded-lg max-h-52 overflow-y-auto flex flex-col gap-3 pr-2 py-1">
        {expesesList.length > 0 ? (
          expesesList.map(expense => (
            <ListItem
              key={expense.$id}
              date={expense.date}
              title={expense.title}
              cost={expense.price}
            />
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
