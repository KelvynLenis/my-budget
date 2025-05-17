'use client'

import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Tooltip,
  Legend,
  Line,
  ReferenceLine,
} from 'recharts'
import type { MonthHistoryProps } from '@/types'

interface ChartLineProps {
  data: {
    month_and_year: string
    value: number
  }[]
}

export default class ChartLine extends PureComponent<ChartLineProps> {
  render() {
    if (!this.props.data || !Array.isArray(this.props.data)) {
      return <div>Loading...</div>
    }

    // Transform the data to match the expected format for the chart
    console.log(this.props.data)
    const formattedData = this.props.data.map(item => {
      // Extract month from monthAndYear (assuming format "MM/YYYY")
      const monthNumber = Number.parseInt(item.month_and_year.split('/')[0])

      // Convert month number to month name
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const month = monthNames[monthNumber - 1] || item.month_and_year

      return {
        month,
        value: item.value,
      }
    })

    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={formattedData}
          margin={{
            top: 20,
            right: 10,
            left: 1,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <ReferenceLine y={1500} label="Max" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
    )
  }
}
