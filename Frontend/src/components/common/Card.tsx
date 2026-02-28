// import React from 'react';

// export const Card: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => {
//   return (
//     <div className="bg-white rounded-lg shadow p-4">
//       {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
//       {children}
//     </div>
//   );
// };

import React from 'react';

export const Card: React.FC<{ title?: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
};