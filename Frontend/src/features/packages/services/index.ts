import { Package } from '../types';

// Mock API functions – replace with actual axios calls
export const fetchPackages = async (): Promise<Package[]> => {
  return [
    { id: 1, name: 'Skardu Explorer', duration: '5 days', price: '$950', status: 'Active' },
    { id: 2, name: 'Hunza Valley Tour', duration: '7 days', price: '$1200', status: 'Active' },
  ];
};

export const createPackage = async (data: Omit<Package, 'id'>): Promise<Package> => {
  console.log('Creating package', data);
  return { id: Math.random(), ...data };
};

export const updatePackage = async (id: number, data: Partial<Package>): Promise<Package> => {
  console.log('Updating package', id, data);
  return { id, ...data } as Package;
};

export const deletePackage = async (id: number): Promise<void> => {
  console.log('Deleting package', id);
};