import { contactMessages } from "../data/mockData";

const ContactMessagesTable = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-3">New Contact Messages</h2>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">User</th>
            <th className="text-left">Email</th>
            <th className="text-left">Date</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {contactMessages.map((msg, idx) => (
            <tr key={idx} className="border-b last:border-0">
              <td className="py-2">{msg.user}</td>
              <td>{msg.email}</td>
              <td>{msg.date}</td>
              <td>{msg.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessagesTable;