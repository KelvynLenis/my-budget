'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { getBudget } from '@/functions/budget/get-budget'
import { addBudget } from '@/functions/budget/add-budget'

interface BudgetFormProps {
  isEdit?: boolean
  icon: React.ReactNode
}

export function BudgetForm({ isEdit, icon }: BudgetFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [budget, setBudget] = useState(0)
  const [currentBudget, setCurrentBudget] = useState(0)

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const sheet = await getBudget()

        setCurrentBudget(sheet.budget)

        console.log(sheet)

        if (isEdit) {
          setBudget(sheet.budget)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchBudget()
  }, [])

  async function onSubmit() {
    try {
      if (isEdit) {
        // const result = await addBudget({ id: '1', budget })

        return
      }

      // await addBudget(currentBudget.$id, budget)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
          <button type="button" onClick={() => setIsModalOpen(!isModalOpen)}>
            {icon}
          </button>
        </DialogTrigger>
        <DialogContent className="bg-transparent w-fit h-fit p-0 max-w-fit gap-0 border-none">
          <DialogHeader>
            <DialogTitle className="w-full h-8 bg-primary flex items-center justify-center text-white font-black px-6 py-1 rounded-t-xl text-xl">
              {isEdit ? 'Edit budget' : 'Add budget'}
            </DialogTitle>
          </DialogHeader>
          <div className="bg-white rounded-b-xl p-4 w-9/12 md:w-96 h-fit gap-4 flex flex-col items-center justify-center text-sm font-medium">
            <input
              className="w-9/12 bg-zinc-200 rounded-md max-w-72 px-2 py-0.5"
              placeholder="R$ 1500,00"
              type="number"
              value={budget}
              onChange={e => setBudget(Number(e.target.value))}
            />
            <button
              type="button"
              className="bg-primary rounded-md text-white hover:opacity-60 w-9/12 px-4 py-2"
            >
              Adicionar
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
