import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-center py-4 text-sm">
      © {new Date().getFullYear()} Tour & Hotel Admin
    </footer>
  );
};