import { useParams } from 'react-router-dom';

export const BookingDetails = () => {
  const { id } = useParams();
  // Mock data
  const booking = {
    id,
    user: 'Ahmed Khan',
    type: 'Package',
    item: 'Skardu Explorer',
    date: '2024-05-12',
    status: 'Confirmed',
    payment: 'Paid',
    amount: 950,
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Booking Details #{id}</h1>
      <div className="space-y-2">
        <p><strong>User:</strong> {booking.user}</p>
        <p><strong>Type:</strong> {booking.type}</p>
        <p><strong>Item:</strong> {booking.item}</p>
        <p><strong>Date:</strong> {booking.date}</p>
        <p><strong>Status:</strong> {booking.status}</p>
        <p><strong>Payment:</strong> {booking.payment}</p>
        <p><strong>Amount:</strong> ${booking.amount}</p>
      </div>
      <div className="mt-6 flex space-x-2">
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Approve</button>
        <button className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700">Mark as Paid</button>
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Cancel</button>
      </div>
    </div>
  );
};