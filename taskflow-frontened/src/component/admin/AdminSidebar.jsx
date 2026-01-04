import React from 'react'
import { Users, ClipboardList, BarChart3 } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
     ${
       isActive
         ? "bg-blue-600 text-white shadow-md"
         : "text-gray-300 hover:bg-gray-800 hover:text-white"
     }`;

  return (
   

<aside className="h-full w-64
                  bg-gradient-to-b from-gray-900 via-gray-900 to-slate-950
                  p-4 border-r border-white/10">
  
  {/* Title / Brand */}
  <div className="mb-6 flex items-center gap-3 px-2">
    <div className="h-9 w-9 rounded-xl
                    bg-gradient-to-br from-indigo-600 to-purple-600
                    flex items-center justify-center">
      <span className="text-white font-bold">A</span>
    </div>
 </div>

  <nav className="space-y-2">
    <NavLink to="/admin/add-task" className={linkClasses}>
      <span className="flex items-center gap-3">
        <ClipboardList className="h-5 w-5 text-indigo-400" />
        <span>Tasks</span>
      </span>
    </NavLink>

    <NavLink to="/admin/reports" className={linkClasses}>
      <span className="flex items-center gap-3">
        <BarChart3 className="h-5 w-5 text-purple-400" />
        <span>Reports</span>
      </span>
    </NavLink>

    <NavLink to="/admin/users" className={linkClasses}>
      <span className="flex items-center gap-3">
        <Users className="h-5 w-5 text-indigo-400" />
        <span>Users</span>
      </span>
    </NavLink>
  </nav>
</aside>

  );
}

