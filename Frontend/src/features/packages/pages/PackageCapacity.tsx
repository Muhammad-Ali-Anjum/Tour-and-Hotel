import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const PackageCapacity = () => {
  const { id } = useParams();
  const [capacity, setCapacity] = useState(20);

  const handleSave = () => {
    // API call to update capacity
    alert(`Capacity updated to ${capacity}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <h1 className="text-2xl font-bold mb-4">Set Capacity for Package #{id}</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Capacity (number of people)</label>
        <input
          type="number"
          value={capacity}
          onChange={(e) => setCapacity(parseInt(e.target.value))}
          className="w-full border rounded-md px-3 py-2"
        />
      </div>
      <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Save Capacity
      </button>
    </div>
  );
};