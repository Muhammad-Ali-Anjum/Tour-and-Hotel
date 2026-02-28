export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Booking {
  id: string;
  user: string;
  type: string;
  item: string;
  date: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

export interface Hotel {
  id: string;
  name: string;
  city: string;
  owner: string;
  totalRooms: number;
}

export interface Package {
  id: string;
  user: string;
  destination: string;
  activities: string;
  estimatedPrice: number;
}

export interface ContactMessage {
  id: string;
  user: string;
  email: string;
  date: string;
  status: 'Uncalled' | 'Annulled';
}