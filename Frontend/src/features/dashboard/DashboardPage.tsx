// import { StatsCard } from './components/StatsCard';
// import { RecentBookingsTable } from './components/RecentBookingsTable';
// import { NewHotelsTable } from './components/NewHotelsTable';
// import { PendingPackagesTable } from './components/PendingPackages';
// import { ContactMessagesTable } from './components/ContactMessagesTable';

// export const DashboardPage = () => {
//   // Mock data for stats (from image)
//   const stats = [
//     { label: 'Total Users', value: '5,420', sub: 'Active Users 4,200' },
//     { label: 'Total Bookings', value: '1,250', sub: 'This Month 320' },
//     { label: 'Total Hotels', value: '120', sub: 'Active Hotels 98' },
//     { label: 'Total Cars', value: '75', sub: 'Available Cars 45' },
//     { label: 'Total Packages', value: '60', sub: 'Active Packages 42' },
//     { label: 'Pending Reviews', value: '18', sub: 'New Reviews 5' },
//     { label: 'New Hotels', value: '60', sub: 'This Month' },
//     { label: 'Revenue (This Month)', value: '$52,300', sub: '↑ 12%' },
//   ];

//   return (
//     <div>
//       {/* Stats Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
//         {stats.map((stat, idx) => (
//           <StatsCard key={idx} {...stat} />
//         ))}
//       </div>

//       {/* Tables Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <RecentBookingsTable />
//         <NewHotelsTable />
//         <PendingPackagesTable />
//         <ContactMessagesTable />
//       </div>
//     </div>
//   );
// };

import { StatsCard } from './components/StatsCard';
import { RecentBookingsTable } from './components/RecentBookingsTable';
import { NewHotelsTable } from './components/NewHotelsTable';
import { PendingPackagesTable } from './components/PendingPackages';
import { ContactMessagesTable } from './components/ContactMessagesTable';

export const DashboardPage = () => {
  const stats = [
    { label: 'Total Users', value: '5,420', sub: 'Active Users 4,200' },
    { label: 'Total Bookings', value: '1,250', sub: 'This Month 320' },
    { label: 'Total Hotels', value: '120', sub: 'Active Hotels 98' },
    { label: 'Total Cars', value: '75', sub: 'Available Cars 45' },
    { label: 'Total Packages', value: '60', sub: 'Active Packages 42' },
    { label: 'Pending Reviews', value: '18', sub: 'New Reviews 5' },
    { label: 'New Hotels', value: '60', sub: 'This Month' },
    { label: 'Revenue (This Month)', value: '$52,300', sub: '↑ 12%' },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <StatsCard key={idx} {...stat} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentBookingsTable />
        <NewHotelsTable />
        <PendingPackagesTable />
        <ContactMessagesTable />
      </div>
    </div>
  );
};