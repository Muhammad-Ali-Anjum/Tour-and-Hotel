import apiClient from '../apiClient';
import { Hotel } from '../../features/hotels/types';

export const fetchHotels = () => apiClient.get<Hotel[]>('/hotels');
export const createHotel = (data: Omit<Hotel, 'id'>) => apiClient.post('/hotels', data);
export const updateHotel = (id: number, data: Partial<Hotel>) => apiClient.put(`/hotels/${id}`, data);
export const deleteHotel = (id: number) => apiClient.delete(`/hotels/${id}`);