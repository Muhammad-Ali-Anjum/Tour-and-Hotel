export interface Review {
  id: number;
  userId: number;
  itemType: 'package' | 'hotel' | 'car';
  itemId: number;
  rating: number;
  comment: string;
  status: 'Published' | 'Hidden';
  createdAt: string;
}