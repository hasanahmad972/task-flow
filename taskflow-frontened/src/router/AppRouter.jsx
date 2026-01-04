import React from 'react'
import AuthLayout from '../layouts/AuthLayout'
import { Routes, Route, Navigate } from "react-router-dom";
import Login from '../pages/Login';
import Signup from '../pages/Signup';

import UserLayout from '../layouts/UserLayout';
import Profile from '../pages/User/Profile';
import Reports from '../pages/Admin/Reports';
import Status from '../pages/User/Status';
import Tasks from '../pages/User/Tasks';
import AdminLayout from '../layouts/AdminLayout';
import Users from '../pages/Admin/Users';
import Addtask from '../pages/Admin/Addtask';
import ProtectedRoute from './ProtectedRoute';



function AppRouter() {
  return (
    <Routes>
      {/* Default */}
      <Route path="*" element={<Navigate to="/login" />} />

      {/* Login */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route >



      {/**User Routes */}
      <Route element={<ProtectedRoute allowedRole="ROLE_USER" />}>
        <Route path="/user" element={<UserLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="status" element={<Status />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Route>

      {/**Admin Routes */}
      <Route element={<ProtectedRoute allowedRole="ROLE_ADMIN" />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="add-task" element={<Addtask />} />
          <Route path="users" element={<Users />} />
          <Route path="reports" element={<Reports />} />
          
        </Route>
      </Route>




    </Routes>
  );
}

export default AppRouter;
