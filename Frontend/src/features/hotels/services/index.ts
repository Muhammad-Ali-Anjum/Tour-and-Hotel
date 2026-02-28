import type { Hotel } from '../types';

export const fetchHotels = async (): Promise<Hotel[]> => {
  return [];
};

export const createHotel = async (data: Omit<Hotel, 'id'>): Promise<Hotel> => {
  return { id: 0, ...data };
};

export const updateHotel = async (id: number, data: Partial<Hotel>): Promise<Hotel> => {
  return { id, ...data } as Hotel;
};

export const deleteHotel = async (_id: number): Promise<void> => {};