export interface Booking {
  id: number;
  userId: number;
  type: 'package' | 'custom' | 'hotel' | 'car';
  itemId: number;
  date: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  paymentStatus: 'Paid' | 'Unpaid' | 'Refunded';
  amount: number;
}