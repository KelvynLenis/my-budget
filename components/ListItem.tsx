import { ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


interface ListItemProps {
  item: string
  cost: number
}
export function ListItem({ item, cost }: ListItemProps) {

  return (
    <>
      <li className="flex w-full justify-between rounded-xl bg-zinc-100 px-4 py-2 text-sm">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger>
              <span className="font-bold">11/12/2024</span>
              <span className="w-1/2 text-center font-bold text-clip">{item}</span>
              <span className="text-negative w-1/4 felx text-right">R$ {cost}</span>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </li>
    </>
  )
}