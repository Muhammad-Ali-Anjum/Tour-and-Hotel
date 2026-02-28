// src/features/cars/types/index.ts
export interface Car {
  id: number;
  model: string;
  plate: string;
  owner: string;
  status: 'Available' | 'Booked' | 'Maintenance';
}