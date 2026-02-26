// import { Users, Calendar, Hotel as HotelIcon, Car, LayoutDashboard, Star } from 'lucide-react';
// import type { Booking, Hotel, Package, ContactMessage, StatCardData } from '../types';

// export const statsData: StatCardData[] = [
//   { icon: <Users className="text-blue-500" size={24} />, label: 'Total Users', value: '5,420', unit: 'Users', sub: 'Active Users', color: 'bg-blue-50' },
//   { icon: <Calendar className="text-orange-500" size={24} />, label: 'Total Bookings', value: '1,250', unit: 'Bookings', sub: 'This Month', color: 'bg-orange-50' },
//   { icon: <HotelIcon className="text-green-500" size={24} />, label: 'Total Hotels', value: '120', unit: 'Hotels', sub: 'Active Hotels', color: 'bg-green-50' },
//   { icon: <Car className="text-indigo-500" size={24} />, label: 'Total Cars', value: '75', unit: 'Cars', sub: 'Available Cars', color: 'bg-indigo-50' },
//   { icon: <LayoutDashboard className="text-yellow-600" size={24} />, label: 'Total Packages', value: '60', unit: 'Packages', sub: 'Active Packages', color: 'bg-yellow-50' },
//   { icon: <Star className="text-orange-500" size={24} />, label: 'Pending Reviews', value: '18', unit: 'Reviews', sub: 'New Reviews', color: 'bg-orange-50' },
//   { icon: <Star className="text-purple-600" size={24} />, label: 'New Hotels', value: '60', unit: 'Hotels', sub: 'New Hotels', color: 'bg-purple-50' },
//   { icon: <div className="font-bold text-blue-600 text-lg">$</div>, label: 'Revenue (This Month)', value: '$52,300', unit: 'Revenue', sub: 'This Month', color: 'bg-blue-50' },
// ];

// export const recentBookings: Booking[] = [
//   { user: 'Ahmed Khan', type: 'Luxury Skardu Tour', item: 'Deluxe Hotel', date: '2024-05-12', status: 'Confirmed' },
//   { user: 'Sarah Ali', type: 'Mike Hotel Room', item: 'Luxury Car', date: '2024-05-10', status: 'Pending' },
//   { user: 'John Doe', type: 'Swat, Narah', item: 'Hiking Camping', date: '2024-05-16', status: 'Cancelled' },
//   { user: 'Emma White', type: 'Economy Room', item: 'Economy Room', date: '2024-05-01', status: 'Confirmed' },
// ];

// export const newHotels: Hotel[] = [
//   { name: 'Mountain View Resort', city: 'Skardu', owner: 'Bilal Zaman', totalRooms: 80 },
//   { name: 'Deluxe Hunza Hotel', city: 'Hunza', owner: 'Noor Ahmed', totalRooms: 60 },
//   { name: 'Swat Valley Inn', city: 'Swat', owner: 'Naveed Khan', totalRooms: 50 },
// ];

// export const pendingPackages: Package[] = [
//   { user: 'Ali Raza', destination: 'Skardu', activities: 'Luxury Hotel', estimatedPrice: '$ 950' },
//   { user: 'Hamza Ahmed', destination: 'Hunza', activities: 'Hunza', estimatedPrice: '$ 1,050' },
//   { user: 'Sara Khan', destination: 'Swat', activities: 'Swat, Narah', estimatedPrice: '$ 800' },
// ];

// export const contactMessages: ContactMessage[] = [
//   { user: 'Abdullah', email: 'abdullah@example.com', date: '2024-05-10', status: 'Uncalled' },
//   { user: 'Emily White', email: 'emily@example.com', date: '2024-05-09', status: 'Unrealized' },
//   { user: 'Farhan Ali', email: 'farhan@example.com', date: '2024-05-06', status: 'Uncalled' },
// ];



export const stats = {
  totalUsers: 5420,
  totalBookings: 1250,
  totalHotels: 120,
  totalCars: 75,
  totalPackages: 60,
  pendingReviews: 18,
  newHotels: 60,
  revenue: 52300,
};

export const recentBookings = [
  { user: "Ahmed Khan", type: "Luxury Skardu Tour", item: "Deluxe Hotel", date: "2024-05-12", status: "Confirmed" },
  { user: "Sarah Ali", type: "Mike Hotel Room", item: "Luxury Car", date: "2024-05-10", status: "Pending" },
  { user: "John Doe", type: "Swat, Narah", item: "Hiking Camping", date: "2024-05-16", status: "Cancelled" },
  { user: "Emma White", type: "Economy Room", item: "Economy Room", date: "2024-05-01", status: "Confirmed" },
];

export const newHotels = [
  { name: "Mountain View Resort", city: "Skardu", owner: "Bilal Zaman", rooms: 80 },
  { name: "Deluxe Hunza Hotel", city: "Hunza", owner: "Noor Ahmed", rooms: 60 },
  { name: "Swat Valley Inn", city: "Swat", owner: "Naveed Khan", rooms: 50 },
];

export const pendingPackages = [
  { user: "Ali Raza", destination: "Skardu", activities: "Luxury Hotel", price: 950 },
  { user: "Hamza Ahmed", destination: "Hunza", activities: "Hunza", price: 1050 },
  { user: "Sara Khan", destination: "Swat", activities: "Swat, Narah", price: 800 },
];

export const contactMessages = [
  { user: "Abdullah", email: "abdullah@example.com", date: "2024-05-10", status: "Uncalled" },
  { user: "Emily White", email: "emily@example.com", date: "2024-05-09", status: "Annulled" },
  { user: "Farhan Ali", email: "farhan@example.com", date: "2024-05-06", status: "Uncalled" },
];