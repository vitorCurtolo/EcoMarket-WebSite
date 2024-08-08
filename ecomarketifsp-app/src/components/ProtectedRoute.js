import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ element: Element }) => {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return currentUser ? <Element /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
