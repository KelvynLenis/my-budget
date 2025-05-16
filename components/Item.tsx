import { Ellipsis, Menu, Pencil, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ItemProps {
  id: number
  item: string
  cost: number
  handleDeleteItem: (id: number) => void
}

export function Item({ id, item, cost, handleDeleteItem }: ItemProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [editItem, setEditItem] = useState(item)
  const [editCost, setEditCost] = useState(cost)

  return (
    <>
      <div className="flex gap-2 justify-between relative">

        {
          isEdit ? (
            <>
              <Input type="text" value={editItem} onChange={(e) => setEditItem(e.target.value)} placeholder="Item" className=" rounded-xl bg-input" />
              <Input type="number" value={editCost} onChange={(e) => setEditCost(Number(e.target.value))} placeholder="Cost" className="w-20 rounded-xl bg-input text-sm" />
            </>
          ) : (
            <>
              <span className="w-full h-9 px-3 items-center flex rounded-xl bg-input" >{item}</span>
              <span className="w-24 h-9 px-3 items-center flex rounded-xl bg-input" >R$ {cost}</span>
            </>
          )
        }


        <Button type="button" className={twMerge(clsx("group rounded-full w-8 h-8 self-center bg-white", isMenuOpen && "ring-2 ring-primary"))} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Ellipsis className="text-black group-hover:text-white" />
        </Button>

        {
          isMenuOpen && (
            <div className="absolute flex flex-col w-fit px-3 rounded-xl py-3 gap-2 right-7 top-6 bg-white ring-1 ring-zinc-300 shadow-lg z-10">
              <button type="button" className="rounded-xl flex w-fit h-fit self-center items-center gap-1 font-bold" onClick={() => handleDeleteItem(id)}>
                <Trash size={24} className="text-white bg-negative rounded-full flex p-1" />
                <span>
                  Deletar
                </span>
              </button>
              <button type="button" className="rounded-xl flex w-fit h-fit gap-1 font-bold bg-transparent" onClick={() => setIsEdit(!isEdit)}>
                <Pencil size={24} className="text-white bg-primary rounded-full flex p-1" />
                Editar
              </button>
            </div>
          )
        }

      </div>
    </>
  )
}