import React from 'react'
import { useAuth } from '../../context/AuthContext';

import { ShieldCheck, LogOut } from "lucide-react";
export default function AdminHeader() {
  const { logout } = useAuth();
  return (
  <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700
                   shadow-lg px-6 py-4 flex items-center justify-between">

  {/* Logo + Title */}
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
      <ShieldCheck className="w-6 h-6 text-white" />
    </div>
    <h1 className="text-xl font-bold text-white tracking-wide">
      Control Center
    </h1>
  </div>

  {/* Logout */}
  <button
    onClick={() => {
      logout();
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }}
    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold
               bg-white/15 text-white rounded-xl
               hover:bg-white/25 transition-all duration-200
               backdrop-blur-md"
  >
    <LogOut className="w-4 h-4" />
    Logout
  </button>

</header>

  )
}








