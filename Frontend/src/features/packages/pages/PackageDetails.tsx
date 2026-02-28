import { useParams, Link } from 'react-router-dom';

export const PackageDetails = () => {
  const { id } = useParams();
  // Mock data – replace with API call
  const pkg = {
    id,
    name: 'Skardu Explorer',
    duration: '5 days',
    price: '$950',
    description: 'Beautiful valleys and mountains.',
    status: 'Active',
    images: ['image1.jpg', 'image2.jpg'],
    capacity: 20,
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Package Details: {pkg.name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p><strong>ID:</strong> {pkg.id}</p>
          <p><strong>Duration:</strong> {pkg.duration}</p>
          <p><strong>Price:</strong> {pkg.price}</p>
          <p><strong>Status:</strong> {pkg.status}</p>
          <p><strong>Capacity:</strong> {pkg.capacity}</p>
        </div>
        <div>
          <p><strong>Description:</strong> {pkg.description}</p>
          <p><strong>Images:</strong> {pkg.images.join(', ')}</p>
        </div>
      </div>
      <div className="mt-6 flex space-x-2">
        <Link to="/packages" className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">Back</Link>
        <Link to={`/packages/${id}/edit`} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Edit</Link>
      </div>
    </div>
  );
};