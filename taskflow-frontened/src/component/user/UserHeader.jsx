import React,{useState} from "react";
import { User, ChevronDown, LogOut } from "lucide-react";

import { useAuth } from "../../context/AuthContext";

export default function UserHeader() {
  const { logout } = useAuth();
 const [open, setOpen] = useState(false);
  return (
    <header
  className="
    fixed
    top-0
    left-0
    right-0
    h-[72px]
    bg-white/90
    backdrop-blur
    border-b
    z-50
  "
>
  <div className="h-full max-w-7xl mx-auto px-6 flex items-center justify-between">

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
      <div className="relative">
      
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 focus:outline-none"
      >
        <User className="w-6 h-6" />
        <ChevronDown className={`w-4 h-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg border">
          <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
            Change Password
          </button>

          <button
            onClick={logout}
            className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-500"
          >
            Logout
          </button>
        </div>
      )}
    </div>
   
  


   

  </div>
</header>

  );
}


