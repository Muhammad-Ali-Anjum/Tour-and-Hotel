
import type { ReactNode } from 'react';

interface DataTableProps<T> {
  headers: string[];
  rows: T[];
  renderRow: (row: T) => ReactNode;
}
// rest remains the same

export default function DataTable<T>({ headers, rows, renderRow }: DataTableProps<T>) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        <tr>
          {headers.map((header, idx) => (
            <th
              key={idx}
              className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {rows.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50">
            {renderRow(row)}
          </tr>
        ))}
      </tbody>
    </table>
  );
}