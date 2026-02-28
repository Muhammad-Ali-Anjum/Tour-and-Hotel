import { useParams } from 'react-router-dom';

export const CustomPackageDetails = () => {
  const { id } = useParams();
  // Mock data
  const request = {
    id,
    user: 'Ali Raza',
    email: 'ali@example.com',
    destination: 'Skardu',
    activities: 'Luxury Hotel, Trekking',
    estimatedPrice: '$950',
    finalPrice: '',
    status: 'Pending',
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Custom Package Request #{id}</h1>
      <div className="space-y-2">
        <p><strong>User:</strong> {request.user} ({request.email})</p>
        <p><strong>Destination:</strong> {request.destination}</p>
        <p><strong>Activities:</strong> {request.activities}</p>
        <p><strong>Estimated Price:</strong> {request.estimatedPrice}</p>
        <p><strong>Final Price:</strong> {request.finalPrice || 'Not set'}</p>
        <p><strong>Status:</strong> {request.status}</p>
      </div>
      <div className="mt-6 flex space-x-2">
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Approve</button>
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">Reject</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Set Final Price</button>
      </div>
    </div>
  );
};