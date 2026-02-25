import React from 'react';
import { Package } from '../../types';

interface Props {
  packages: Package[];
}

const PendingPackagesTable: React.FC<Props> = ({ packages }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 flex justify-between items-center border-b">
        <h4 className="font-bold text-slate-800">Pending Customer Packages</h4>
        <button className="text-blue-600 text-xs font-bold hover:underline">View All &gt;</button>
      </div>
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-[11px] text-gray-500 uppercase font-bold tracking-wider">
          <tr>
            <th className="px-5 py-3">User</th>
            <th className="px-5 py-3">Destination</th>
            <th className="px-5 py-3">Activities</th>
            <th className="px-5 py-3 text-right">Estimated Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-[13px]">
          {packages.map((pkg, idx) => (
            <tr key={idx}>
              <td className="px-5 py-4 font-bold text-blue-600">{pkg.user}</td>
              <td className="px-5 py-4">{pkg.destination}</td>
              <td className="px-5 py-4 text-gray-400">{pkg.activities}</td>
              <td className="px-5 py-4 text-right">{pkg.estimatedPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingPackagesTable;