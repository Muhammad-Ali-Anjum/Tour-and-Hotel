import type { Car } from '../types';

export const fetchCars = async (): Promise<Car[]> => {
  return [];
};

export const createCar = async (data: Omit<Car, 'id'>): Promise<Car> => {
  return { id: 0, ...data };
};

export const updateCar = async (id: number, data: Partial<Car>): Promise<Car> => {
  return { id, ...data } as Car;
};

export const deleteCar = async (_id: number): Promise<void> => {};