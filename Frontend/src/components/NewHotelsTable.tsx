import React from 'react';
import { Hotel } from '../../../types';

const sampleHotels: Hotel[] = [
  { id: '1', name: 'Mountain View Resort', city: 'Skardu', owner: 'Bilal Zaman', totalRooms: 80 },
  { id: '2', name: 'Deluxe Hunza Hotel', city: 'Hunza', owner: 'Noor Ahmed', totalRooms: 60 },
  { id: '3', name: 'Swat Valley Inn', city: 'Swat', owner: 'Naveed Khan', totalRooms: 50 },
];

export const NewHotelsTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">New Hotels</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hotel Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Owner</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Rooms</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sampleHotels.map((hotel) => (
            <tr key={hotel.id}>
              <td className="px-6 py-4 whitespace-nowrap">{hotel.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{hotel.city}</td>
              <td className="px-6 py-4 whitespace-nowrap">{hotel.owner}</td>
              <td className="px-6 py-4 whitespace-nowrap">{hotel.totalRooms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};