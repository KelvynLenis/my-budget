'use server'

import { Pencil, PlusCircle } from 'lucide-react'
import { BudgetForm } from './Forms/BudgetForm'
import { getBudget } from '@/functions/budget/get-budget'

export async function BalanceBoard() {
  const result = await getBudget()

  return (
    <>
      <div className="bg-white rounded-xl p-4 w-72 h-fit flex flex-col text-sm font-medium md:self-end gap-3">
        <div className="flex gap-2 items-center">
          <span className="text-positive">My Budget: R$ {result.budget}</span>
          <BudgetForm icon={<PlusCircle />} />
          <BudgetForm isEdit icon={<Pencil />} />
        </div>
        <span className="text-negative">Spent this month: -R$ 50.00</span>
      </div>
    </>
  )
}
