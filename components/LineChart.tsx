"use client"

import ChartLine from "./ChartLine";

export function LineChart() {

  return (
    <div className="w-full h-[350px] py-4 pr-5 flex justify-center items-center self-center bg-zinc-200 rounded-xl">
      <ChartLine />
    </div>
  )
}