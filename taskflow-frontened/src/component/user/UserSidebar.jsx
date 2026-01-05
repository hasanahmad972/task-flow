import React from "react";
import { NavLink } from "react-router-dom";
import { User, Activity, CheckSquare } from "lucide-react";

export default function UserSidebar() {
  const items = [
    { label: "Profile", icon: User, path: "/user/profile" },
    { label: "Status", icon: Activity, path: "/user/status" },
    { label: "Tasks", icon: CheckSquare, path: "/user/tasks" },
  ];

  return (
    <aside className="h-screen w-64 bg-white dark:bg-[#3f3a66] border-r border-gray-200 dark:border-white/10 flex flex-col">
      
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 dark:border-white/10">
        <h1 className="text-xl font-bold text-[#857dba]">Dashboard</h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                ${
                  isActive
                    ? "bg-[#857dba] text-white shadow"
                    : "text-gray-600 dark:text-gray-200 hover:bg-[#857dba]/10 dark:hover:bg-white/10"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>

     
    </aside>
  );
}



