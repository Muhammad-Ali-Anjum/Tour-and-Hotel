export interface User {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Customer' | 'Partner';
  status: 'Active' | 'Blocked';
  createdAt?: string;
}