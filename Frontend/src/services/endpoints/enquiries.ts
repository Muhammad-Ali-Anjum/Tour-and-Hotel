import apiClient from '../apiClient';
import { Inquiry } from '../../features/inquiries/types';

export const fetchInquiries = () => apiClient.get<Inquiry[]>('/inquiries');
export const markAsResolved = (id: number) => apiClient.patch(`/inquiries/${id}/resolve`);