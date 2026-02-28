import apiClient from '../apiClient';
import type { User } from '../../features/users/types';

export const fetchUsers = () => apiClient.get<User[]>('/users');
export const blockUser = (id: number) => apiClient.patch(`/users/${id}/block`, { blocked: true });
export const unblockUser = (id: number) => apiClient.patch(`/users/${id}/block`, { blocked: false });