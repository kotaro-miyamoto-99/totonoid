"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, Droplets, Clock } from "lucide-react"
import { TemperatureChart } from "@/components/temperature-chart"
import { useState } from "react"

export function Dashboard() {
  const [optimalTemp, setOptimalTemp] = useState(90)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-wood-50 border-wood-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-wood-900">最適整い温度</CardTitle>
          <Thermometer className="h-4 w-4 text-wood-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-wood-800">{optimalTemp}°C</div>
          <p className="text-xs text-wood-600">あなたの記録から分析した最適な整い温度です</p>
        </CardContent>
      </Card>
      <Card className="bg-water-50 border-water-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-water-900">推奨水風呂温度</CardTitle>
          <Droplets className="h-4 w-4 text-water-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-water-800">15°C</div>
          <p className="text-xs text-water-600">最適な整いのための水風呂温度です</p>
        </CardContent>
      </Card>
      <Card className="bg-nature-50 border-nature-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-nature-900">推奨サウナ時間</CardTitle>
          <Clock className="h-4 w-4 text-nature-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-nature-800">10分</div>
          <p className="text-xs text-nature-600">あなたの整いに最適なサウナ滞在時間です</p>
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>温度記録の推移</CardTitle>
          <CardDescription>過去のサウナ体験と整い度の関係を表示しています</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <TemperatureChart />
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>最近の記録</CardTitle>
          <CardDescription>直近のサウナ体験記録</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentExperiences.map((exp, i) => (
              <div key={i} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{exp.location}</p>
                  <p className="text-sm text-muted-foreground">{exp.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Thermometer className="h-4 w-4 text-red-500" />
                    <span>{exp.temperature}°C</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm">整い度:</span>
                    <span className="font-bold">{exp.satisfaction}/5</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const recentExperiences = [
  {
    location: "サウナしきじ",
    date: "2023/12/15",
    temperature: 90,
    satisfaction: 5,
  },
  {
    location: "サウナ&スパ カプセル",
    date: "2023/12/10",
    temperature: 95,
    satisfaction: 4,
  },
  {
    location: "天然温泉 テルマー湯",
    date: "2023/12/05",
    temperature: 85,
    satisfaction: 3,
  },
]

