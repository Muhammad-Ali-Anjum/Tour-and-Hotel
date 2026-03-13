export interface Stat {
  title: string;
  value: string;
  footer: string;
}

export interface Booking {
  user: string;
  type: string;
  item: string;
  date: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
}

export interface Hotel {
  name: string;
  city: string;
  owner: string;
  rooms: number;
}

export interface Package {
  user: string;
  destination: string;
  activities: string;
  price: string;
}

export interface ContactMessage {
  user: string;
  email: string;
  date: string;
  status: 'Uncalled' | 'Annulled';
}

export type StatusType = Booking['status'] | ContactMessage['status'];