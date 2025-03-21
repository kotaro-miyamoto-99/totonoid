import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Thermometer } from "lucide-react"
import { FacilityCard } from "./facility-card"
import { getFacilities } from "@/api/facilities"
import type { Facility } from "@/types/facility"
import { temperatureRanges } from "@/types/temperature"

interface TemperatureCardProps {
  title: string
  tempRange: string
  description: string
  facilities: string[]
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

export async function Recommendations() {
  const facilities = await getFacilities();

  // ユーザーの好みの温度や位置情報に基づいてフィルタリング
  const nearbyFacilities = facilities.slice(0, 2);
  const popularFacilities = facilities.filter((f: Facility) => f.rating >= 4.7);
  const perfectTempFacilities = facilities.filter((f: Facility) => f.temperature === 90);

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
              {nearbyFacilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </TabsContent>
            <TabsContent value="popular" className="space-y-4">
              {popularFacilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
              ))}
            </TabsContent>
            <TabsContent value="perfect" className="space-y-4">
              {perfectTempFacilities.map((facility) => (
                <FacilityCard key={facility.id} facility={facility} />
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
            {temperatureRanges.map((range) => (
              <TemperatureCard
                key={range.title}
                title={range.title}
                tempRange={range.range}
                description={range.description}
                facilities={range.facilities}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
