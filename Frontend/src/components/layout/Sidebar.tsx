// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { routes } from '../../routes';

// export const Sidebar: React.FC = () => {
//   return (
//     <aside className="w-64 bg-white shadow-md">
//       <div className="p-4 font-bold text-xl border-b">Admin Panel</div>
//       <nav className="p-2">
//         {routes.map((route) => (
//           <NavLink
//             key={route.path}
//             to={route.path}
//             className={({ isActive }) =>
//               `block px-4 py-2 rounded-md my-1 ${
//                 isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
//               }`
//             }
//           >
//             {route.label}
//           </NavLink>
//         ))}
//       </nav>
//     </aside>
//   );
// };

import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4 font-bold text-xl border-b">Admin Panel</div>
      <nav className="p-2">
        {routes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive }) =>
              `block px-4 py-2 rounded-md my-1 ${
                isActive ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
              }`
            }
          >
            {route.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};