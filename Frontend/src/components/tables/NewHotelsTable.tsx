import React from 'react';
import { Hotel } from '../../types';

interface Props {
  hotels: Hotel[];
}

const NewHotelsTable: React.FC<Props> = ({ hotels }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 flex justify-between items-center border-b">
        <h4 className="font-bold text-slate-800">New Hotels</h4>
        <button className="text-blue-600 text-xs font-bold hover:underline">View All &gt;</button>
      </div>
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-[11px] text-gray-500 uppercase font-bold tracking-wider">
          <tr>
            <th className="px-5 py-3">Hotel Name</th>
            <th className="px-5 py-3">City</th>
            <th className="px-5 py-3">Owner</th>
            <th className="px-5 py-3 text-right">Total Rooms</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-[13px]">
          {hotels.map((hotel, idx) => (
            <tr key={idx}>
              <td className="px-5 py-4">{hotel.name}</td>
              <td className="px-5 py-4">{hotel.city}</td>
              <td className="px-5 py-4">{hotel.owner}</td>
              <td className="px-5 py-4 text-right">{hotel.totalRooms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewHotelsTable;