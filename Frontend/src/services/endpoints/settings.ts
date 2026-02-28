import apiClient from '../apiClient';
import type { PaymentSettings, BookingRules } from '../../features/settings/types';

export const fetchPaymentSettings = () => apiClient.get<PaymentSettings>('/settings/payment');
export const updatePaymentSettings = (data: PaymentSettings) => apiClient.put('/settings/payment', data);
export const fetchBookingRules = () => apiClient.get<BookingRules>('/settings/booking-rules');
export const updateBookingRules = (data: BookingRules) => apiClient.put('/settings/booking-rules', data);