import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const PackageImages = () => {
  const { id } = useParams();
  const [images, _setImages] = useState<string[]>(['img1.jpg', 'img2.jpg']);

  const handleUpload = (_e: React.ChangeEvent<HTMLInputElement>) => {
    // File upload logic will go here – you'll use _setImages to update state
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">Manage Images for Package #{id}</h1>
      <div className="mb-4">
        <input type="file" multiple onChange={handleUpload} className="border p-2" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="border p-2 rounded">
            <img src={img} alt={`Package ${idx}`} className="w-full h-32 object-cover" />
            <button className="mt-2 text-red-600 hover:underline">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};