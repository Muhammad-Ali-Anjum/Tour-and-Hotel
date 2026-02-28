import { useParams } from 'react-router-dom';

export const HotelRoomsManagement = () => {
  const { hotelId } = useParams();
  // Mock rooms
  const rooms = [
    { number: 101, type: 'Deluxe', price: 150, status: 'Available' },
    { number: 102, type: 'Standard', price: 100, status: 'Booked' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Rooms for Hotel #{hotelId}</h1>
      <table className="min-w-full">
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Type</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.number}>
              <td>{room.number}</td>
              <td>{room.type}</td>
              <td>${room.price}</td>
              <td>{room.status}</td>
              <td><button className="text-blue-600 hover:underline">Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">Add Room</button>
    </div>
  );
};