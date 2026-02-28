import apiClient from '../apiClient';
import type {Car} from '../../features/cars/types'

export const fetchCars = () => apiClient.get<Car[]>('/cars');
export const createCar = (data: Omit<Car, 'id'>) => apiClient.post('/cars', data);
export const updateCar = (id: number, data: Partial<Car>) => apiClient.put(`/cars/${id}`, data);
export const deleteCar = (id: number) => apiClient.delete(`/cars/${id}`);