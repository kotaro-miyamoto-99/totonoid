import type { DashboardData } from '@/types/dashboard'

export async function getDashboardData(): Promise<DashboardData> {
  // const res = await fetch('http://localhost:3000/api/dashboard', {
  //   next: {
  //     revalidate: 60,
  //   },
  // })

  // if (!res.ok) {
  //   throw new Error('Failed to fetch dashboard data')
  // }

  // モックデータ
  const dashboardData: DashboardData = {
    optimalTemperature: 90,
    recommendedWaterTemperature: 15,
    recommendedDuration: 15,
  }
  return dashboardData
}
