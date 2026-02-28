export interface Hotel {
  id: number;
  name: string;
  city: string;
  owner: string;
  totalRooms: number;
  status: 'Active' | 'Inactive';
}

export interface Room {
  id: number;
  hotelId: number;
  number: string;
  type: string;
  price: number;
  status: 'Available' | 'Booked' | 'Maintenance';
}