import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, Droplets, Clock } from "lucide-react"
import { getDashboardData } from "@/api/dashboard"
import { getRecentExperiences } from "@/api/experience"

export async function Dashboard() {
  const [dashboardData, recentExperiences] = await Promise.all([
    getDashboardData(),
    getRecentExperiences()
  ])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="bg-gradient-to-br from-red-50 to-amber-50 border-red-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-red-900">最適整い温度</CardTitle>
          <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
            <Thermometer className="h-4 w-4 text-red-600" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-red-700">{dashboardData.optimalTemperature}°C</div>
          <p className="text-xs text-red-600">あなたの記録から分析した最適な整い温度です</p>
        </CardContent>
      </Card>
      <Card className="bg-water-50 border-water-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-water-900">推奨水風呂温度</CardTitle>
          <Droplets className="h-4 w-4 text-water-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-water-800">{dashboardData.recommendedWaterTemperature}°C</div>
          <p className="text-xs text-water-600">最適な整いのための水風呂温度です</p>
        </CardContent>
      </Card>
      <Card className="bg-nature-50 border-nature-100">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-nature-900">推奨サウナ時間</CardTitle>
          <Clock className="h-4 w-4 text-nature-600" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-nature-800">{dashboardData.recommendedDuration}分</div>
          <p className="text-xs text-nature-600">あなたの整いに最適なサウナ湯在時間です</p>
        </CardContent>
      </Card>
      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>最近の記録</CardTitle>
          <CardDescription>直近のサウナ体験記録</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentExperiences.map((experience) => (
              <div key={experience.id} className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">{new Date(experience.createdAt).toLocaleDateString('ja-JP')}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Thermometer className="h-4 w-4 text-red-500" />
                    <span>{experience.temperature}°C</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm">整い度:</span>
                    <span className="font-bold">{experience.satisfaction}/5</span>
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


