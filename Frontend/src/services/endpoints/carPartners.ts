import type { CarPartner } from '../../features/carPartners/types';
import apiClient from '../apiClient';

export const fetchCarPartners = () => apiClient.get<CarPartner[]>('/car-partners');
// Add other CRUD functions as needed