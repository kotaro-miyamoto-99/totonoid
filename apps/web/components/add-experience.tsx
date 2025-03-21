"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { ja } from "date-fns/locale"
import { cn } from "@/lib/utils"

export function AddExperience() {
  const [date, setDate] = useState<Date>()
  const [temperature, setTemperature] = useState(90)
  const [satisfaction, setSatisfaction] = useState(3)

  return (
    <Card>
      <CardHeader>
        <CardTitle>サウナ体験を記録する</CardTitle>
        <CardDescription>サウナでの体験を記録して、あなたの最適な整い温度を見つけましょう</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="location">施設名</Label>
          <Input id="location" placeholder="サウナ施設の名前を入力" />
        </div>

        <div className="space-y-2">
          <Label>日付</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP", { locale: ja }) : "日付を選択"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>サウナ温度</Label>
              <span className="font-medium">{temperature}°C</span>
            </div>
            <Slider
              value={[temperature]}
              min={60}
              max={120}
              step={1}
              onValueChange={(value) => setTemperature(value[0] ?? temperature)}
              className="py-4"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="water-temp">水風呂温度</Label>
            <Input id="water-temp" type="number" placeholder="15" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sauna-time">サウナ滞在時間（分）</Label>
            <Input id="sauna-time" type="number" placeholder="10" />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>整い度</Label>
              <span className="font-medium">{satisfaction}/5</span>
            </div>
            <Slider
              value={[satisfaction]}
              min={1}
              max={5}
              step={0.5}
              onValueChange={(value) => setSatisfaction(value[0] ?? satisfaction)}
              className="py-4"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">メモ</Label>
          <Textarea id="notes" placeholder="体験の詳細や感想を記録しましょう" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">記録を保存</Button>
      </CardFooter>
    </Card>
  )
}
