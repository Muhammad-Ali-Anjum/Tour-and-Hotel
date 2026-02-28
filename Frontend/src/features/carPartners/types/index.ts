export interface CarPartner {
  id: number;
  name: string;
  email: string;
  phone?: string;
  cars: number[];
  status: 'Active' | 'Inactive';
}