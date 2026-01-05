import React from "react";
import { LogOut, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function UserHeader() {
  const { logout } = useAuth();

  return (
    <header className="w-full bg-white/90 backdrop-blur border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Left: Title */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <User className="w-5 h-5 text-indigo-600" />
          </div>
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            User Dashboard
          </h1>
        </div>

        {/* Right: Logout */}
        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg
                     bg-red-500 text-white text-sm font-medium
                     hover:bg-red-600 active:scale-95
                     transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>

      </div>
    </header>
  );
}


