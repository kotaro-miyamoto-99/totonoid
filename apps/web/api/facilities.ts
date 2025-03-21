import type { Facility, FacilityResponse } from '@totonoido/shared-types';
import { apiClient } from '@/lib/axios';

export async function getFacilities(): Promise<Facility[]> {
  try {
    const { data } = await apiClient.get<FacilityResponse>('/facilities');
    return data.facilities;
  } catch (error) {
    console.error('Failed to fetch facilities:', error);
    throw new Error('Failed to fetch facilities');
  }
}