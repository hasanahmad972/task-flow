import React from "react";
import { Navigate,Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ allowedRole }) {
    
  const { auth, loading } = useAuth();
 
  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (!auth?.token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && auth.role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
