export interface Inquiry {
  id: number;
  userId?: number;
  name: string;
  email: string;
  message: string;
  date: string;
  status: 'Resolved' | 'Unresolved';
}