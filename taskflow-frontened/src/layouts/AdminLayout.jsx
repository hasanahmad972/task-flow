import React from 'react'
import { Outlet } from "react-router-dom";
import AdminHeader from "../component/admin/AdminHeader";
import AdminSidebar from "../component/admin/AdminSidebar";
import AdminFooter from "../component/admin/AdminFooter";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-yellow-100">
      {/* HEADER */}
      <AdminHeader />

      {/* BODY */}
      <div className="flex flex-1 bg-green-100">
        {/* SIDEBAR */}
        <aside className="w-64 bg-blue-900 text-white">
          <AdminSidebar />
        </aside>

        {/* MAIN CONTENT */}
       <main
  className="flex-1 p-4 overflow-y-auto
             bg-gradient-to-br
             from-indigo-50 via-purple-50 to-indigo-100"
>
  <Outlet />
</main>

      </div>

      {/* FOOTER */}
      <AdminFooter />
    </div>
  );
}


