export type StatusType = 'Confirmed' | 'Pending' | 'Cancelled' | 'Uncalled' | 'Handled' | 'Unrealized';

export interface Booking {
  user: string;
  type: string;
  item: string;
  date: string;
  status: StatusType;
}

export interface Hotel {
  name: string;
  city: string;
  owner: string;
  totalRooms: number;
}

export interface Package {
  user: string;
  destination: string;
  activities: string;
  estimatedPrice: string;
}

export interface ContactMessage {
  user: string;
  email: string;
  date: string;
  status: StatusType;
}

export interface StatCardData {
  icon: React.ReactNode;
  label: string;
  value: string;
  unit?: string;
  sub: string;
  color: string;
}