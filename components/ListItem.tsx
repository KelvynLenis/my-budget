interface ListItemProps {
  title: string
  cost: number
}
export function ListItem({ title, cost }: ListItemProps) {
  return (
    <>
      <li className="flex w-full justify-between rounded-xl bg-zinc-100 px-4 py-2 text-sm">
        <div className="flex gap-10 w-full">
          <span className="font-bold">11/12/2024</span>
          <span className="text-center font-medium text-clip">{title}</span>
        </div>
        <span className="text-negative flex text-right w-16">R$ {cost}</span>
      </li>
    </>
  )
}
