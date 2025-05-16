import Link from 'next/link'
import { Button } from './ui/button'
import { ChartLine, Plus, ScrollText } from 'lucide-react'

export function MobileNavbar() {
  return (
    <>
      <div className="flex w-full items-center justify-center gap-2 lg:hidden bg-zinc-200 py-2">
        <Link href={'/new-list'}>
          <Button className="bg-white flex-col gap-0 h-fit rounded-xl font-semibold hover:bg-secondary hover:ring-1 hover:ring-white hover:text-white">
            <div className="relative">
              <ScrollText />
              <Plus className="absolute right-2.5 top-1/3 -translate-y-1/2 text-white bg-black rounded-full" />
            </div>
            New list
          </Button>
        </Link>

        <Link href={'/'}>
          <Button className="bg-white flex-col gap-0 h-fit rounded-xl font-semibold hover:bg-secondary hover:ring-1 hover:ring-white hover:text-white">
            <ChartLine className="" />
            Dashboard
          </Button>
        </Link>
      </div>
    </>
  )
}
