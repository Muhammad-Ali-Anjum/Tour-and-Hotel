import type { Stat, Booking, Hotel, Package, ContactMessage } from '../types';

// rest of the file unchanged

export const stats: Stat[] = [
  { title: 'Total Users', value: '5,420', footer: 'Users · Active Users' },
  { title: 'Total Bookings', value: '1,250', footer: 'Bookings · This Month' },
  { title: 'Total Hotels', value: '120', footer: 'Hotels · Active Hotels' },
  { title: 'Total Cars', value: '75', footer: 'Cars · Available Cars' },
  { title: 'Total Packages', value: '60', footer: 'Packages · Active Packages' },
  { title: 'Pending Reviews', value: '18', footer: 'Reviews · New Reviews' },
  { title: 'New Hotels', value: '60', footer: 'Hotels · New Hotels' },
  { title: 'Revenue (This Month)', value: '$52,300', footer: 'Revenue · This Month' },
];

export const recentBookings: Booking[] = [
  { user: 'Ahmed Khan', type: 'Luxury Skardu Tour', item: 'Deluxe Hotel', date: '2024-05-12', status: 'Confirmed' },
  { user: 'Sarah Ali', type: 'Mike Hotel Room', item: 'Luxury Car', date: '2024-05-10', status: 'Pending' },
  { user: 'John Doe', type: 'Swat, Narah', item: 'Hiking Camping', date: '2024-05-16', status: 'Cancelled' },
  { user: 'Emma White', type: 'Economy Room', item: 'Economy Room', date: '2024-05-01', status: 'Confirmed' },
];

export const newHotels: Hotel[] = [
  { name: 'Mountain View Resort', city: 'Skardu', owner: 'Bilal Zaman', rooms: 80 },
  { name: 'Deluxe Hunza Hotel', city: 'Hunza', owner: 'Noor Ahmed', rooms: 60 },
  { name: 'Swat Valley Inn', city: 'Swat', owner: 'Naveed Khan', rooms: 50 },
];

export const pendingPackages: Package[] = [
  { user: 'Ali Raza', destination: 'Skardu', activities: 'Luxury Hotel', price: '$950' },
  { user: 'Hamza Ahmed', destination: 'Hunza', activities: 'Hunza', price: '$1,050' },
  { user: 'Sara Khan', destination: 'Swat', activities: 'Swat, Narah', price: '$800' },
];

export const contactMessages: ContactMessage[] = [
  { user: 'Abdullah', email: 'abdullah@example.com', date: '2024-05-10', status: 'Uncalled' },
  { user: 'Emily White', email: 'emily@example.com', date: '2024-05-09', status: 'Annulled' },
  { user: 'Farhan Ali', email: 'farhan@example.com', date: '2024-05-06', status: 'Uncalled' },
];