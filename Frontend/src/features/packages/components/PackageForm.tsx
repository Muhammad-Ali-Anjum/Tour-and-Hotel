import React, { useState } from 'react';
import { Input } from '../../../components/common/Input';
import { Button } from '../../../components/common/Button';

interface PackageFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
}

export const PackageForm: React.FC<PackageFormProps> = ({ initialData = {}, onSubmit }) => {
  const [form, setForm] = useState(initialData);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input label="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
      <Input label="Duration" value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} />
      <Input label="Price" value={form.price} onChange={e => setForm({...form, price: e.target.value})} />
      <Button type="submit">Save</Button>
    </form>
  );
};