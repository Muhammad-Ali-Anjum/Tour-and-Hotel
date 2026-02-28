import React from 'react';
import { ContactMessage } from '../../../types';

const sampleMessages: ContactMessage[] = [
  { id: '1', user: 'Abdullah', email: 'abdullah@example.com', date: '2024-05-10', status: 'Uncalled' },
  { id: '2', user: 'Emily White', email: 'emily@example.com', date: '2024-05-09', status: 'Annulled' },
  { id: '3', user: 'Farhan Ali', email: 'farhan@example.com', date: '2024-05-06', status: 'Uncalled' },
];

export const ContactMessagesTable: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">New Contact Messages</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sampleMessages.map((msg) => (
            <tr key={msg.id}>
              <td className="px-6 py-4 whitespace-nowrap">{msg.user}</td>
              <td className="px-6 py-4 whitespace-nowrap">{msg.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{msg.date}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${msg.status === 'Uncalled' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'}`}
                >
                  {msg.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2 text-right">
        <button className="text-sm text-blue-600 hover:underline">View All &gt;</button>
      </div>
    </div>
  );
};