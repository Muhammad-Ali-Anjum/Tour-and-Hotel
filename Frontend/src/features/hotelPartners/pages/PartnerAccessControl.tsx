import { useParams } from 'react-router-dom';
import { useState } from 'react';

export const PartnerAccessControl = () => {
  const { partnerId } = useParams();
  const [permissions, setPermissions] = useState({
    canEditHotels: false,
    canViewBookings: true,
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Access Control for Partner #{partnerId}</h1>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={permissions.canEditHotels} onChange={e => setPermissions({...permissions, canEditHotels: e.target.checked})} />
          <span>Can edit hotels</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" checked={permissions.canViewBookings} onChange={e => setPermissions({...permissions, canViewBookings: e.target.checked})} />
          <span>Can view bookings</span>
        </label>
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Save</button>
    </div>
  );
};