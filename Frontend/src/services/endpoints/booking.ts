import apiClient from '../apiClient';
import type { Booking } from '../../features/bookings/types';

export const fetchBookings = () => apiClient.get<Booking[]>('/bookings');
export const fetchBooking = (id: number) => apiClient.get<Booking>(`/bookings/${id}`);
export const updateBookingStatus = (id: number, status: string) => apiClient.patch(`/bookings/${id}/status`, { status });
export const updatePaymentStatus = (id: number, paymentStatus: string) => apiClient.patch(`/bookings/${id}/payment`, { paymentStatus });