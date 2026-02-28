import { CustomPackageRequest } from '../types';

export const fetchRequests = async (): Promise<CustomPackageRequest[]> => {
  return [];
};

export const approveRequest = async (id: number, finalPrice: number): Promise<void> => {
  console.log('Approve', id, finalPrice);
};