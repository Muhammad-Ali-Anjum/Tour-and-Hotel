import apiClient from '../apiClient';
import { Review } from '../../features/reviews/types';

export const fetchReviews = () => apiClient.get<Review[]>('/reviews');
export const deleteReview = (id: number) => apiClient.delete(`/reviews/${id}`);