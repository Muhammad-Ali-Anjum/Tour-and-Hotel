export interface Package {
  id: number;
  name: string;
  duration: string;
  price: string;
  description?: string;
  status: 'Active' | 'Inactive';
  images?: string[];
  capacity?: number;
}