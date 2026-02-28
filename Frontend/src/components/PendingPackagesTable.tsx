import React from 'react';
import { Package } from '../../../types';

const samplePackages: Package[] = [
  { id: '1', user: 'Ali Raza', destination: 'Skardu', activities: 'Luxury Hotel', estimatedPrice: 950 },
  { id: '2', user: 'Hamza Ahmed', destination: 'Hunza', activities: 'Hunza', estimatedPrice: 1050 },
  { id: '3', user: 'Sara Khan', destination: 'Swat', activities: 'Swat, Narah', estimatedPrice: 800 },
];

export const PendingPackagesTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Pending Customer Packages</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activities</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Price</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {samplePackages.map((pkg) => (
            <tr key={pkg.id}>
              <td className="px-6 py-4 whitespace-nowrap">{pkg.user}</td>
              <td className="px-6 py-4 whitespace-nowrap">{pkg.destination}</td>
              <td className="px-6 py-4 whitespace-nowrap">{pkg.activities}</td>
              <td className="px-6 py-4 whitespace-nowrap">${pkg.estimatedPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};