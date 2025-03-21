import { Facility } from '../types/facility';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002';

export async function getFacilities(): Promise<Facility[]> {
  const res = await fetch(`${API_BASE_URL}/facilities`, {
    next: {
      revalidate: 60, // キャッシュを1分間有効にする
    },
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch facilities');
  }

  return res.json();
}

export async function getFacilityById(id: string): Promise<Facility> {
  const res = await fetch(`${API_BASE_URL}/facilities/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch facility');
  }

  return res.json();
}
