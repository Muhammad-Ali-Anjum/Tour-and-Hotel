import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../components/common/Input';
import { Button } from '../../../components/common/Button';

export const AddCar = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ model: '', plate: '', owner: '', status: 'Available' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Add car', form);
    navigate('/cars');
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Add New Car</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Model" value={form.model} onChange={e => setForm({...form, model: e.target.value})} />
        <Input label="Plate Number" value={form.plate} onChange={e => setForm({...form, plate: e.target.value})} />
        <Input label="Owner" value={form.owner} onChange={e => setForm({...form, owner: e.target.value})} />
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Status</label>
          <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="w-full border rounded-md px-3 py-2">
            <option>Available</option>
            <option>Booked</option>
            <option>Maintenance</option>
          </select>
        </div>
        <div className="flex justify-end space-x-2">
          <Button type="button" variant="secondary" onClick={() => navigate('/cars')}>Cancel</Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};