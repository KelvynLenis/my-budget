"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export function DatePickerCalendar() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      initialFocus
      className="w-full bg-zinc-200 rounded-xl hidden lg:flex"
    />
  )
}
