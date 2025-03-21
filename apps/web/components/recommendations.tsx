"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplets, MapPin, Star } from "lucide-react"

interface Facility {
  name: string
  location: string
  rating: number
  temperature: number
  waterTemp: number
  tags: string[]
  description: string
}

interface TemperatureCardProps {
  title: string
  tempRange: string
  description: string
  facilities: string[]
}

const nearbyFacilities: Facility[] = [
  {
    name: "サウナしきじ",
    location: "東京都渋谷区",
    rating: 4.8,
    temperature: 90,
    waterTemp: 15,
    tags: ["ロウリュ", "外気浴"],
    description: "あなたの最適温度にぴったりのサウナ。清潔で設備も充実しています。",
  },
  {
    name: "サウナ東京",
    location: "東京都新宿区",
    rating: 4.5,
    temperature: 85,
    waterTemp: 16,
    tags: ["塩サウナ"],
    description: "都心にある人気のサウナ施設。アクセスも良く、仕事帰りに便利です。",
  },
]

const popularFacilities: Facility[] = [
  {
    name: "フィンランドサウナ",
    location: "東京都中央区",
    rating: 4.9,
    temperature: 88,
    waterTemp: 14,
    tags: ["本格派", "ロウリュ"],
    description: "本場フィンランド式のサウナを体験できる人気施設。",
  },
  {
    name: "サウナ&スパ カプセル",
    location: "東京都港区",
    rating: 4.7,
    temperature: 95,
    waterTemp: 15,
    tags: ["高温", "24時間"],
    description: "高温サウナが好きな方におすすめ。24時間営業で便利です。",
  },
]

const perfectTempFacilities: Facility[] = [
  {
    name: "サウナしきじ",
    location: "東京都渋谷区",
    rating: 4.8,
    temperature: 90,
    waterTemp: 15,
    tags: ["ロウリュ", "外気浴"],
    description: "あなたの最適温度にぴったりのサウナ。清潔で設備も充実しています。",
  },
  {
    name: "北欧サウナ",
    location: "東京都目黒区",
    rating: 4.6,
    temperature: 90,
    waterTemp: 14,
    tags: ["本格派"],
    description: "北欧スタイルの本格的なサウナ。温度管理が徹底されています。",
  },
]

function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg">{facility.name}</h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{facility.location}</span>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="font-medium">{facility.rating}</span>
          </div>
        </div>

        <div className="flex gap-2 mt-3">
          <div className="flex items-center gap-1 bg-red-100 text-red-800 px-2 py-1 rounded-md text-xs">
            <Thermometer className="h-3 w-3" />
            <span>{facility.temperature}°C</span>
          </div>
          <div className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs">
            <Droplets className="h-3 w-3" />
            <span>{facility.waterTemp}°C</span>
          </div>
          {facility.tags.map((tag, i) => (
            <Badge key={i} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <p className="text-sm mt-3">{facility.description}</p>
      </CardContent>
    </Card>
  )
}

function TemperatureCard({ title, tempRange, description, facilities }: TemperatureCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription className="text-sm">{tempRange}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">{description}</p>
        <ul className="text-sm space-y-1">
          {facilities.map((facility, i) => (
            <li key={i} className="flex items-center">
              <Thermometer className="h-3 w-3 mr-2 text-red-500" />
              {facility}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

export function Recommendations() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>あなたにおすすめのサウナ施設</CardTitle>
          <CardDescription>あなたの最適整い温度（90°C）に合わせたサウナ施設をご紹介します</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="nearby">
            <TabsList className="mb-4">
              <TabsTrigger value="nearby">近くの施設</TabsTrigger>
              <TabsTrigger value="popular">人気の施設</TabsTrigger>
              <TabsTrigger value="perfect">温度ぴったり</TabsTrigger>
            </TabsList>
            <TabsContent value="nearby" className="space-y-4">
              {nearbyFacilities.map((facility, i) => (
                <FacilityCard key={i} facility={facility} />
              ))}
            </TabsContent>
            <TabsContent value="popular" className="space-y-4">
              {popularFacilities.map((facility, i) => (
                <FacilityCard key={i} facility={facility} />
              ))}
            </TabsContent>
            <TabsContent value="perfect" className="space-y-4">
              {perfectTempFacilities.map((facility, i) => (
                <FacilityCard key={i} facility={facility} />
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>温度別おすすめ施設</CardTitle>
          <CardDescription>様々な温度帯のサウナ施設を探索しましょう</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <TemperatureCard
              title="低温サウナ"
              tempRange="70°C〜80°C"
              description="じっくりと汗をかきたい方におすすめ"
              facilities={["サウナ&スパ ニュージャパン", "天然温泉 テルマー湯"]}
            />
            <TemperatureCard
              title="中温サウナ"
              tempRange="80°C〜95°C"
              description="バランスの取れた温度で人気"
              facilities={["サウナしきじ", "サウナ東京", "フィンランドサウナ"]}
            />
            <TemperatureCard
              title="高温サウナ"
              tempRange="95°C〜110°C"
              description="短時間で発汗したい方に"
              facilities={["サウナ&スパ カプセル", "北欧サウナ"]}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
