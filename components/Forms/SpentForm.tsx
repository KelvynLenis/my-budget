'use client'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { date, z } from 'zod'
import { Plus } from 'lucide-react'
import { Item } from '../Item'
import { Button } from '../ui/button'
import { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { databases, ID } from '@/lib/appwrite'
import Link from 'next/link'
import { Label } from '../ui/label'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import type { ExpenseProps } from '@/types'
import { createExpense } from '@/functions/expenses/create-expense'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { getHistory } from '@/functions/monthHistory/get-history'
import { getCurrentMonthHistory } from '@/functions/monthHistory/get-current-month-history'
import { updateMonthHistory } from '@/functions/monthHistory/update-month-history'
import { createMonthHistory } from '@/functions/monthHistory/create-month-history'

interface SpentFormProps {
  list?: ExpenseProps
}

const formSchema = z.object({
  title: z.string().min(1),
  price: z.number(),
  date: z.string().date(),
})

export function SpentForm({ list }: SpentFormProps) {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    // resolver: zodResolver(formSchema),
    defaultValues: {
      title: list?.title || '',
      price: list?.price || 0,
      date: list?.date || new Date().toISOString(),
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (list) {
      const updateList = async () =>
        await databases.updateDocument(
          process.env.NEXT_PUBLIC_DATABASE_ID!,
          process.env.NEXT_PUBLIC_LISTS_COLLECTION!,
          list ? list.$id! : '',
          {
            title: values.title,
            price: values.price,
            date: new Date(),
          }
        )

      toast.promise(updateList, {
        pending: 'Updating expense',
        success: 'Expense updated successfully',
        error: 'Error updating expense',
      })

      return
    }

    const create = async () => {
      const currentMonthHistory = await getCurrentMonthHistory()

      if (currentMonthHistory) {
        await createExpense({
          title: values.title,
          price: Number(values.price),
          date: values.date,
        })

        await updateMonthHistory({
          id: currentMonthHistory.$id!,
          value: currentMonthHistory.value + Number(values.price),
        })

        return
      }

      const date = new Date()
      const monthAndYear = `${date.getMonth() + 1}/${date.getFullYear()}`

      await createMonthHistory({
        monthAndYear: monthAndYear,
        value: Number(values.price),
      })

      await createExpense({
        title: values.title,
        price: Number(values.price),
        date: values.date,
      })
    }

    toast.promise(create, {
      pending: 'Saving expense...',
      success: 'Expense saved successfully',
      error: 'Error saving expense',
    })

    setOpen(false)
  }

  useEffect(() => {}, [])

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="bg-white rounded-xl font-semibold hover:bg-primary hover:ring-1 hover:ring-white hover:text-white">
            New list
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-transparent w-fit h-fit p-0 max-w-fit gap-0 border-none">
          <DialogHeader>
            <DialogTitle className="w-full h-8 bg-primary flex items-center justify-center text-white font-black px-6 py-1 rounded-t-xl text-xl">
              Meu gasto
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="bg-white rounded-b-xl w-72 h-full flex flex-col text-sm font-medium md:w-[35rem] "
            >
              <div className="flex flex-col h-full px-3 gap-4 py-2 z-0">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <Label className="text-xl">Título</Label>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Título"
                          className="rounded-xl bg-input"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <Label className="text-xl">Preço</Label>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="preço"
                          className="rounded-xl bg-input"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <Label className="text-xl">Data</Label>
                      <FormControl>
                        <Input
                          type="datetime"
                          placeholder="preço"
                          className="rounded-xl bg-input"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex w-full justify-between px-6 py-2 text-white border-t-2 z-10">
                <Button
                  type="submit"
                  className="rounded-xl w-14 h-8 self-center bg-save"
                >
                  Save
                </Button>
                <Link href="/">
                  <Button
                    type="button"
                    className="rounded-xl w-14 h-8 self-center bg-cancel"
                  >
                    <DialogClose>Cancel</DialogClose>
                  </Button>
                </Link>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  )
}
