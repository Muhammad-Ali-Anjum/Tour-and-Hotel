import { useParams } from 'react-router-dom';
import { PackageForm } from '../components/PackageForm';

export const EditPackage = () => {
  const { id } = useParams();
  // In a real app, fetch package data by id
  const packageData = { name: 'Sample Package', duration: '5 days', price: '$950' };

  const handleSubmit = (data: any) => {
    console.log('Updating package', id, data);
    // API call to update
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Package #{id}</h1>
      <PackageForm initialData={packageData} onSubmit={handleSubmit} />
    </div>
  );
};