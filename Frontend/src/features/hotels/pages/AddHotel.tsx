

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddHotel = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    city: '',
    owner: '',
    totalRooms: 0,
    status: 'Active',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Add hotel', form);
    navigate('/hotels');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Add New Hotel</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Hotel Name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">City</label>
          <input
            type="text"
            value={form.city}
            onChange={e => setForm({...form, city: e.target.value})}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Owner</label>
          <input
            type="text"
            value={form.owner}
            onChange={e => setForm({...form, owner: e.target.value})}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Total Rooms</label>
          <input
            type="number"
            value={form.totalRooms}
            onChange={e => setForm({
              ...form,
              totalRooms: e.target.value === '' ? 0 : parseInt(e.target.value, 10)
            })}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Status</label>
          <select
            value={form.status}
            onChange={e => setForm({...form, status: e.target.value})}
            className="w-full border rounded-md px-3 py-2"
          >
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={() => navigate('/hotels')}
            className="px-4 py-2 border rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};