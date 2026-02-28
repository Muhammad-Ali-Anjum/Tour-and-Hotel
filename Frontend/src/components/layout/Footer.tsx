import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t p-4 text-center text-gray-500">
      © {new Date().getFullYear()} Your Company. All rights reserved.
    </footer>
  );
};