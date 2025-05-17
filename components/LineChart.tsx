'use client'

import { useEffect, useState } from 'react'
import ChartLine from './ChartLine'
import { getHistory } from '@/functions/monthHistory/get-history'
import type { MonthHistoryProps } from '@/types'
import ClipLoader from 'react-spinners/ClipLoader'
import { getCurrentYearHistories } from '@/functions/monthHistory/get-current-year-histories'

export function LineChart() {
  const [histories, setHistories] = useState<
    {
      month_and_year: string
      value: number
    }[]
  >([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const histories = await getCurrentYearHistories()

      if (histories) {
        setHistories(histories)
      }

      setIsLoading(false)
    }

    getData()
  }, [])

  return (
    <div className="w-full h-[350px] py-4 pr-5 flex justify-center items-center self-center bg-zinc-200 rounded-xl">
      {isLoading ? (
        <ClipLoader color="#FFF" size={75} />
      ) : (
        <ChartLine data={histories} />
      )}
    </div>
  )
}
