'use client'

import { Plus } from "lucide-react";
import { Item } from "./Item";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";

interface ItemProps {
  id: number;
  item: string;
  cost: number;
}


export function SpentForm() {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [newItem, setNewItem] = useState('')
  const [newCost, setNewCost] = useState<number>(0)

  function handleAddItem(item: ItemProps) {
    setItems([...items, item])
    setNewItem('')
    setNewCost(0)
  }
  function handleDeleteItem(id: number) {
    setItems(items.filter(item => item.id !== id))
  }

  return (
    <>
      <div className="bg-white rounded-xl w-72 h-full flex flex-col text-sm font-medium md:w-[35rem] md:h-[30rem] xl:w-[50rem] xl:h-[35rem]">

        <div className="w-full h-8 bg-primary flex items-center justify-center text-white font-black px-6 py-1 rounded-t-xl">
          <span>Meu gasto</span>
        </div>

        <div className="flex flex-col h-full px-3 gap-4 overflow-y-scroll py-2">

          <div className="flex flex-col gap-2">
            <label className="text-xl">Título</label>
            <Input type="text" placeholder="Título" className="rounded-xl bg-input" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
          </div>


          <div className="flex flex-col gap-2 h-full bg-zinc-100 rounded-xl p-1">
            <div className="w-full justify-between flex px-2 py-1 text-lg">
              <span className="">Item</span>
              <span className="w-1/3 md:w-1/6 xl:self-center xl:text-center">Cost</span>
            </div>
            <div className="flex gap-2">
              <Input type="text" placeholder="Item" className="rounded-xl bg-input" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
              <Input type="number" placeholder="R$" className="w-20 rounded-xl bg-input text-sm" value={newCost} onChange={(e) => setNewCost(Number(e.target.value))} />
              <Button className="rounded-full w-8 h-8 " onClick={() => handleAddItem({ id: items.length, item: newItem, cost: newCost })}>
                <Plus className="text-white font-black hover:opacity-50" />
              </Button>
            </div>

            {
              items.length > 0 && items.map((item, index) => (
                <Item key={index} id={item.id} item={item.item} cost={item.cost} handleDeleteItem={handleDeleteItem} />
              ))
            }
          </div>
        </div>

        <div className="flex w-full justify-between px-6 py-2 text-white border-t-2">
          <Button className="rounded-xl w-14 h-8 self-center bg-save">Save</Button>
          <Button className="rounded-xl w-14 h-8 self-center bg-cancel">Cancel</Button>
        </div>
      </div>
    </>
  )
}