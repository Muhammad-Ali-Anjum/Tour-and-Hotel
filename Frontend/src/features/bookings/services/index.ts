import { Booking } from '../types';

export const fetchBookings = async (): Promise<Booking[]> => [];
export const updateBookingStatus = async (id: number, status: string): Promise<void> => {};
export const updatePaymentStatus = async (id: number, paymentStatus: string): Promise<void> => {};