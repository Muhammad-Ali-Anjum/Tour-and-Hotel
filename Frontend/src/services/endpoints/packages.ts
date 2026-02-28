import apiClient from '../apiClient';
import type { Package } from '../../features/packages/types';

export const fetchPackages = () => apiClient.get<Package[]>('/packages');
export const createPackage = (data: Omit<Package, 'id'>) => apiClient.post('/packages', data);
export const updatePackage = (id: number, data: Partial<Package>) => apiClient.put(`/packages/${id}`, data);
export const deletePackage = (id: number) => apiClient.delete(`/packages/${id}`);