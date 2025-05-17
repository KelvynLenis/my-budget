import Link from 'next/link'
import { Button } from './ui/button'
import { SpentForm } from './Forms/SpentForm'

export function Header() {
  return (
    <header className="bg-primary w-full h-20 py-2 px-2">
      <h1 className="text-xl font-black text-white">MyBudget</h1>

      <div className="w-full justify-end gap-2 hidden lg:flex">
        <SpentForm />

        <Link href={'/'}>
          <Button className="bg-white rounded-xl font-semibold hover:bg-primary hover:ring-1 hover:ring-white hover:text-white">
            Dashboard
          </Button>
        </Link>
      </div>
    </header>
  )
}
