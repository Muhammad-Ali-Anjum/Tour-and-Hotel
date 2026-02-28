// import React from 'react';
// import { StatsCard } from '../../../components/charts/StatsCard';
// // import { useFetch } from '../../../hooks/useFetch'
// import { useFetch } from '../../../hooks/useFetch';

// interface DashboardStats {
//   totalUsers: number;
//   totalBookings: number;
//   totalHotels: number;
//   totalCars: number;
//   totalPackages: number;
//   pendingReviews: number;
//   newHotels: number;
//   revenue: number;
// }

// export const StatsGrid: React.FC = () => {
//   const { data, loading } = useFetch<DashboardStats>('/api/dashboard/stats');

//   if (loading) return <div>Loading stats...</div>;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//       <StatsCard title="Total Users" value={data?.totalUsers ?? 0} subtitle="Active Users" />
//       <StatsCard title="Total Bookings" value={data?.totalBookings ?? 0} subtitle="This Month" />
//       <StatsCard title="Total Hotels" value={data?.totalHotels ?? 0} subtitle="Active Hotels" />
//       <StatsCard title="Total Cars" value={data?.totalCars ?? 0} subtitle="Available Cars" />
//       <StatsCard title="Total Packages" value={data?.totalPackages ?? 0} subtitle="Active Packages" />
//       <StatsCard title="Pending Reviews" value={data?.pendingReviews ?? 0} subtitle="New Reviews" />
//       <StatsCard title="New Hotels" value={data?.newHotels ?? 0} subtitle="This Month" />
//       <StatsCard title="Revenue" value={`$${data?.revenue?.toLocaleString() ?? 0}`} subtitle="This Month" />
//     </div>
//   );
// };

import React from 'react';
import { StatsCard } from '../../../components/charts/StatsCard';

export const StatsGrid: React.FC = () => {
  // Mock stats – replace with API data
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatsCard title="Total Users" value="5,420" subtitle="Active Users" />
      <StatsCard title="Total Bookings" value="1,250" subtitle="This Month" />
      <StatsCard title="Total Hotels" value="120" subtitle="Active Hotels" />
      <StatsCard title="Total Cars" value="75" subtitle="Available Cars" />
      <StatsCard title="Total Packages" value="60" subtitle="Active Packages" />
      <StatsCard title="Pending Reviews" value="18" subtitle="New Reviews" />
      <StatsCard title="New Hotels" value="60" subtitle="This Month" />
      <StatsCard title="Revenue" value="$52,300" subtitle="This Month" />
    </div>
  );
};