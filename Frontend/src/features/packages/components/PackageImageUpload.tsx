import React from 'react';

export const PackageImageUpload: React.FC = () => {
  return (
    <div>
      <input type="file" multiple accept="image/*" />
      {/* Preview and upload logic */}
    </div>
  );
};