'use client'

import React, { PureComponent } from 'react';
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
} from 'recharts';

const data = [
  { month: "January", value: 500 },
  { month: "February", value: 450 },
  { month: "March", value: 600 },
  { month: "April", value: 550 },
  { month: "May", value: 700 },
  { month: "June", value: 650 },
  { month: "July", value: 400 },
  { month: "August", value: 480 },
  { month: "September", value: 520 },
  { month: "October", value: 600 },
  { month: "November", value: 750 },
  { month: "December", value: 800 },
];

export default class ChartLine extends PureComponent {

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
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
          <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          <ReferenceLine y={1500} label="Max" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
