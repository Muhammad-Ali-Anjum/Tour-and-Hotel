import apiClient from '../apiClient';
import { HotelPartner } from '../../features/hotelPartners/types';

export const fetchPartners = () => apiClient.get<HotelPartner[]>('/hotel-partners');
export const updatePartnerPermissions = (id: number, permissions: any) => apiClient.patch(`/hotel-partners/${id}/permissions`, permissions);