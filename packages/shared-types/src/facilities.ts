export interface Facility {
  id: string;
  name: string;
  location: string;
  description: string;
  temperature: number;
  waterTemp: number;
  rating: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export type FacilityResponse = {
  facilities: Facility[];
};
