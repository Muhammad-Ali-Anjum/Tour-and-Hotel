import { Table } from '../../../components/common/Table';
import type { CarPartner } from '../types';

const partners: CarPartner[] = [
  { id: 1, name: 'Ali Car Rentals', email: 'ali@cars.com', cars: [1, 2], status: 'Active' },
];

const columns = [
  { header: 'ID', accessor: 'id' },
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
  { header: 'Cars', accessor: 'cars', cell: (value: number[]) => value.length },
  { header: 'Status', accessor: 'status' },
];

export const CarPartnersList = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Car Partners</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <Table data={partners} columns={columns} />
      </div>
    </div>
  );
};