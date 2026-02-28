export interface CustomPackageRequest {
  id: number;
  userId: number;
  destination: string;
  activities: string;
  estimatedPrice: number;
  finalPrice?: number;
  status: 'Pending' | 'Approved' | 'Rejected';
}