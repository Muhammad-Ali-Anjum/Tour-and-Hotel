// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { DashboardLayout } from './layouts/DashboardLayout';
// import { routes } from './routes';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<DashboardLayout />}>
//           {routes.map((route) => (
//             <Route key={route.path} path={route.path} element={route.element} />
//           ))}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { routes } from './routes';
// import Tables from './Tables/Tables'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Tables />}> */}
        <Route path="/" element={<DashboardLayout />}>

          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;