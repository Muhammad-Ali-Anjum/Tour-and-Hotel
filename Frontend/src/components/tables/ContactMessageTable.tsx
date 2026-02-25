import React from 'react';
import { ContactMessage } from '../../types';
import StatusBadge from '../common/StatusBadge';

interface Props {
  messages: ContactMessage[];
}

const ContactMessagesTable: React.FC<Props> = ({ messages }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-5 flex justify-between items-center border-b">
        <h4 className="font-bold text-slate-800">New Contact Messages</h4>
        <button className="text-blue-600 text-xs font-bold hover:underline">View All &gt;</button>
      </div>
      <table className="w-full text-left">
        <thead className="bg-gray-50 text-[11px] text-gray-500 uppercase font-bold tracking-wider">
          <tr>
            <th className="px-5 py-3">User</th>
            <th className="px-5 py-3">Email</th>
            <th className="px-5 py-3">Date</th>
            <th className="px-5 py-3 text-right">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-[13px]">
          {messages.map((msg, idx) => (
            <tr key={idx}>
              <td className="px-5 py-4 font-bold text-blue-600">{msg.user}</td>
              <td className="px-5 py-4">{msg.email}</td>
              <td className="px-5 py-4">{msg.date}</td>
              <td className="px-5 py-4 text-right">
                <StatusBadge type={msg.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessagesTable;