import apiClient from '../apiClient';
import { CarPartner } from '../../features/carPartners/types';

export const fetchCarPartners = () => apiClient.get<CarPartner[]>('/car-partners');