import { BalanceBoard } from '@/components/BalanceBoard'
import { DatePicker } from '@/components/DatePicker'
import { DatePickerCalendar } from '@/components/DatePickerCalendar'
import { LineChart } from '@/components/LineChart'
import { List } from '@/components/List'
import { MobileNavbar } from '@/components/MobileNavbar'

export default function Home() {
  return (
    <main className="flex flex-col h-full w-full">
      <div className="h-full flex flex-col gap-3 items-center py-5 px-5 lg:flex-row">
        <div className="w-full flex gap-4 flex-col">
          <div className="flex justify-between">
            <h1 className="text-lg text-white">Latest</h1>
            <DatePicker />
          </div>
          <List />
          <LineChart />
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-fit h-full self-start">
          <BalanceBoard />
          <DatePickerCalendar />
        </div>
      </div>

      <MobileNavbar />
    </main>
  )
}
