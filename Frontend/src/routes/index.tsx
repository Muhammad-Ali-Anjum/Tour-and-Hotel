import { ReactNode } from 'react';
import { DashboardPage } from '../features/dashboard/DashboardPage';
import { AllPackages } from '../features/packages/pages/AllPackages';
import { AddPackage } from '../features/packages/pages/AddPackage';
import { PackageDetails } from '../features/packages/pages/PackageDetails';
import { PackageImages } from '../features/packages/pages/PackageImages';
import { PackageCapacity } from '../features/packages/pages/PackageCapacity';
import { CustomPackageRequests } from '../features/customPackages/pages/CustomPackageRequests';
import { CustomPackageDetails } from '../features/customPackages/pages/CustomPackageDetails';
import { PackageBookings } from '../features/bookings/pages/PackageBookings';
import { CustomPackageBookings } from '../features/bookings/pages/CustomPackageBookings';
import { HotelBookings } from '../features/bookings/pages/HotelBookings';
import { CarBookings } from '../features/bookings/pages/CarBookings';
import { BookingDetails } from '../features/bookings/pages/BookingDetails';
import { AllHotels } from '../features/hotels/pages/AllHotels';
import { AddHotel } from '../features/hotels/pages/AddHotel';
import { HotelRoomsManagement } from '../features/hotels/pages/HotelRoomsManagement';
import { HotelBookingMonitoring } from '../features/hotels/pages/HotelBookingMonitoring';
import { AllCars } from '../features/cars/pages/AllCars';
import { AddCar } from '../features/cars/pages/AddCar';
import { CarAvailability } from '../features/cars/pages/CarAvailability';
import { CarBookingMonitoring } from '../features/cars/pages/CarBookingMonitoring';
import { HotelPartnersList } from '../features/hotelPartners/pages/HotelPartnersList';
import { PartnerHotelDetails } from '../features/hotelPartners/pages/PartnerHotelDetails';
import { PartnerHotelBookings } from '../features/hotelPartners/pages/PartnerHotelBookings';
import { PartnerAccessControl } from '../features/hotelPartners/pages/PartnerAccessControl';
import { CarPartnersList } from '../features/carPartners/pages/CarPartnersList';
import { AllUsers } from '../features/users/pages/AllUsers';
import { UserProfile } from '../features/users/pages/UserProfile';
import { UserBlock } from '../features/users/pages/UserBlock';
import { AllReviews } from '../features/reviews/pages/AllReviews';
import { AllMessages } from '../features/inquiries/pages/AllMessages';
import { MessageDetails } from '../features/inquiries/pages/MessageDetails';
import { PaymentSettings } from '../features/settings/pages/PaymentSettings';
import { BookingRules } from '../features/settings/pages/BookingRules';
import { StatusConfiguration } from '../features/settings/pages/StatusConfiguration';

export interface RouteConfig {
  path: string;
  element: ReactNode;
  label: string;
}

export const routes: RouteConfig[] = [
  { path: '/', element: <DashboardPage />, label: 'Dashboard' },
  { path: '/packages', element: <AllPackages />, label: 'Packages' },
  { path: '/packages/add', element: <AddPackage />, label: 'Add Package' },
  { path: '/packages/:id', element: <PackageDetails />, label: 'Package Details' },
  { path: '/packages/:id/images', element: <PackageImages />, label: 'Package Images' },
  { path: '/packages/:id/capacity', element: <PackageCapacity />, label: 'Package Capacity' },
  { path: '/custom-packages', element: <CustomPackageRequests />, label: 'Custom Packages' },
  { path: '/custom-packages/:id', element: <CustomPackageDetails />, label: 'Custom Package Details' },
  { path: '/bookings/packages', element: <PackageBookings />, label: 'Package Bookings' },
  { path: '/bookings/custom', element: <CustomPackageBookings />, label: 'Custom Package Bookings' },
  { path: '/bookings/hotels', element: <HotelBookings />, label: 'Hotel Bookings' },
  { path: '/bookings/cars', element: <CarBookings />, label: 'Car Bookings' },
  { path: '/bookings/:id', element: <BookingDetails />, label: 'Booking Details' },
  { path: '/hotels', element: <AllHotels />, label: 'Hotels' },
  { path: '/hotels/add', element: <AddHotel />, label: 'Add Hotel' },
  { path: '/hotels/:hotelId/rooms', element: <HotelRoomsManagement />, label: 'Hotel Rooms' },
  { path: '/hotels/:hotelId/bookings', element: <HotelBookingMonitoring />, label: 'Hotel Bookings' },
  { path: '/cars', element: <AllCars />, label: 'Cars' },
  { path: '/cars/add', element: <AddCar />, label: 'Add Car' },
  { path: '/cars/:carId/availability', element: <CarAvailability />, label: 'Car Availability' },
  { path: '/cars/:carId/bookings', element: <CarBookingMonitoring />, label: 'Car Bookings' },
  { path: '/hotel-partners', element: <HotelPartnersList />, label: 'Hotel Partners' },
  { path: '/hotel-partners/:partnerId/hotels/:hotelId', element: <PartnerHotelDetails />, label: 'Partner Hotel' },
  { path: '/hotel-partners/:partnerId/hotels/:hotelId/bookings', element: <PartnerHotelBookings />, label: 'Partner Bookings' },
  { path: '/hotel-partners/:partnerId/access', element: <PartnerAccessControl />, label: 'Access Control' },
  { path: '/car-partners', element: <CarPartnersList />, label: 'Car Partners' },
  { path: '/users', element: <AllUsers />, label: 'Users' },
  { path: '/users/:id', element: <UserProfile />, label: 'User Profile' },
  { path: '/users/:id/block', element: <UserBlock />, label: 'Block User' },
  { path: '/reviews', element: <AllReviews />, label: 'Reviews' },
  { path: '/inquiries', element: <AllMessages />, label: 'Inquiries' },
  { path: '/inquiries/:id', element: <MessageDetails />, label: 'Message Details' },
  { path: '/settings/payment', element: <PaymentSettings />, label: 'Payment Settings' },
  { path: '/settings/booking-rules', element: <BookingRules />, label: 'Booking Rules' },
  { path: '/settings/status', element: <StatusConfiguration />, label: 'Status Config' },
];