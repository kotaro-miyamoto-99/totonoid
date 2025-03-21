import type { SaunaExperience } from '@/types/experience'

export async function getRecentExperiences(): Promise<SaunaExperience[]> {
  const res = await fetch('http://localhost:3000/api/experiences', {
    next: {
      revalidate: 60,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch recent experiences')
  }

  

  // モックデータ
  const experiences: SaunaExperience[] = [
    {
      id: '1',
      temperature: 90,
      waterTemperature: 15,
      duration: 15,
      satisfaction: 5,
      createdAt: '2025-03-20T10:00:00.000Z'
    },
    {
      id: '2',
      temperature: 85,
      waterTemperature: 16,
      duration: 12,
      satisfaction: 4,
      createdAt: '2025-03-19T15:30:00.000Z'
    },
    {
      id: '3',
      temperature: 95,
      waterTemperature: 14,
      duration: 10,
      satisfaction: 3,
      createdAt: '2025-03-18T09:15:00.000Z'
    }
  ]

  return experiences
}
