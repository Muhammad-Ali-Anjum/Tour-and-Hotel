export interface CarPartner {
  id: number;
  name: string;
  email: string;
  phone?: string;
  cars: number[];        // array of car IDs
  status: 'Active' | 'Inactive';
}