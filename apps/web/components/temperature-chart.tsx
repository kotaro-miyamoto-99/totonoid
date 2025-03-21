"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

const data = [
  { date: "11/1", temperature: 80, satisfaction: 3 },
  { date: "11/5", temperature: 85, satisfaction: 3.5 },
  { date: "11/10", temperature: 90, satisfaction: 4.5 },
  { date: "11/15", temperature: 95, satisfaction: 4 },
  { date: "11/20", temperature: 90, satisfaction: 5 },
  { date: "11/25", temperature: 85, satisfaction: 3.5 },
  { date: "12/1", temperature: 90, satisfaction: 4.5 },
  { date: "12/5", temperature: 90, satisfaction: 4.5 },
  { date: "12/10", temperature: 95, satisfaction: 4 },
  { date: "12/15", temperature: 90, satisfaction: 5 },
]

export function TemperatureChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="temperature"
            stroke="#ef4444"
            name="サウナ温度 (°C)"
            activeDot={{ r: 8 }}
          />
          <Line yAxisId="right" type="monotone" dataKey="satisfaction" stroke="#3b82f6" name="整い度 (5段階)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

