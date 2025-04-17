import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../hooks/authContext';

export default function Guard({ roles = [], children }) {
  const { isAuth, user, loading } = useContext(AuthContext); 
  const role = user?.role || localStorage.getItem('role'); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  if (roles.length > 0 && !roles.includes(role)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}
