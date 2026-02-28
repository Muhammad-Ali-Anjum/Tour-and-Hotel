// export interface HotelPartner {
//   id: number;
//   name: string;
//   email: string;
//   phone?: string;
//   hotels: number[]; // hotel ids
//   status: 'Active' | 'Inactive';
//   permissions: {
//     canEditHotels: boolean;
//     canViewBookings: boolean;
//   };
// }

export interface HotelPartner {
  id: number;
  name: string;
  email: string;
  phone?: string;
  hotels: number[];                 // array of hotel IDs
  status: 'Active' | 'Inactive';
  permissions: {                     // make sure this is included
    canEditHotels: boolean;
    canViewBookings: boolean;
  };
}