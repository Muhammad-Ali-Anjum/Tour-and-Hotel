import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute: React.FC = () => {
  const { isAuthenticated } = useAuth(); // Implement this hook
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};