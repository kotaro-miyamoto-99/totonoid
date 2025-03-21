import type { Facility } from '@/types/facility'

export async function getFacilities(): Promise<Facility[]> {
  // const res = await fetch('http://localhost:3000/api/facilities', {
  //   next: {
  //     revalidate: 60,
  //   },
  // })

  // console.log({res})

  // if (!res.ok) {
  //   throw new Error('Failed to fetch facilities')
  // }

  // モックデータ
  const now = new Date().toISOString()
  const facilities: Facility[] = [
    {
      id: '1',
      name: 'サウナしきじ',
      location: '静岡県静岡市駿河区',
      description: '日本最大級のサウナ施設。美しい富士山を望める露天風呂付き。',
      temperature: 90,
      waterTemp: 15,
      rating: 4.8,
      tags: ['露天風呂', '水風呂', '外気浴'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: '2',
      name: 'フィンランドサウナ',
      location: '東京都渋谷区',
      description: '本場フィンランドのサウナを完全再現。ロウリュサービスが人気。',
      temperature: 95,
      waterTemp: 14,
      rating: 4.9,
      tags: ['ロウリュ', '外気浴'],
      createdAt: now,
      updatedAt: now,
    },
    {
      id: '3',
      name: '天然温泉 テルマー湯',
      location: '東京都豊島区',
      description: '天然温泉とサウナを楽しめる都会のオアシス。',
      temperature: 85,
      waterTemp: 16,
      rating: 4.5,
      tags: ['天然温泉', '岩盤浴'],
      createdAt: now,
      updatedAt: now,
    },
  ]

  return facilities
}
