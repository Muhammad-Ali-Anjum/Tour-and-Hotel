import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { ROUTES } from './routePaths';

// Lazy load pages (optional) or import directly
import { DashboardPage } from '../features/dashboard/DashboardPage';
import { AllPackages } from '../features/packages/pages/AllPackages';
import { AddPackage } from '../features/packages/pages/AddPackage';
import { PackageImages } from '../features/packages/pages/PackageImages';
import { PackageCapacity } from '../features/packages/pages/PackageCapacity';
// Placeholder for other pages – create these files as needed
import { CustomPackages } from '../features/customPackages/CustomPackages';
import { Bookings } from '../features/bookings/Bookings';
import { Hotels } from '../features/hotels/Hotels';
import { Cars } from '../features/cars/Cars';
import { Login } from '../features/auth/Login';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public route */}
      <Route path={ROUTES.LOGIN} element={<Login />} />

      {/* Protected routes */}
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
        <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />

        {/* Packages routes */}
        <Route path={ROUTES.PACKAGES} element={<AllPackages />} />
        <Route path={ROUTES.ADD_PACKAGE} element={<AddPackage />} />
        <Route path={ROUTES.PACKAGE_IMAGES} element={<PackageImages />} />
        <Route path={ROUTES.PACKAGE_CAPACITY} element={<PackageCapacity />} />

        {/* Other feature routes */}
        <Route path={ROUTES.CUSTOM_PACKAGES} element={<CustomPackages />} />
        <Route path={ROUTES.BOOKINGS} element={<Bookings />} />
        <Route path={ROUTES.HOTELS} element={<Hotels />} />
        <Route path={ROUTES.CARS} element={<Cars />} />
      </Route>

      {/* 404 fallback */}
      <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
    </Routes>
  );
};