export interface HotelPartner {
  id: number;
  name: string;
  email: string;
  phone?: string;
  hotels: number[];
  status: 'Active' | 'Inactive';
  permissions: {
    canEditHotels: boolean;
    canViewBookings: boolean;
  };
}