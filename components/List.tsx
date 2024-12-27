import { ListItem } from "./ListItem";

export function List() {

  return (
    <>
      <ul className="w-full h-52 lg:h-52 flex flex-col gap-3 overflow-y-scroll pr-2 py-1">
        <ListItem item="BeMais" cost={100} />
        <ListItem item="BeMais" cost={100} />
        <ListItem item="BeMais" cost={100} />
        <ListItem item="BeMais" cost={100} />
      </ul>
    </>
  )
}