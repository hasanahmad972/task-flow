import React,{useState}from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from '../component/user/UserHeader'
import UserFooter from '../component/user/UserFooter'
import UserSidebar from '../component/user/UserSidebar'

export default function UserLayout() {
    
    return (
       <div className="min-h-screen bg-gray-50">

  {/* Header (Fixed) */}
  <header className="fixed top-0 left-0 right-0 z-50 h-[72px]">
    <UserHeader />
  </header>

  <div className="flex pt-[72px]">

    {/* Sidebar (Fixed) */}
    <aside className="
      hidden md:block
      fixed
      top-[72px]
      left-0
      w-60
      h-[calc(100vh-72px-56px)]
      bg-white
      border-r border-gray-200
    ">
      <UserSidebar />
    </aside>

    {/* Main Content (Scrollable) */}
   <main className="flex-1 ml-0 md:ml-60 p-6 overflow-y-auto">

      <Outlet />
    </main>

  </div>

  {/* Footer (Fixed Bottom) */}
  <footer
  className="
    fixed
    bottom-0
    right-0
    h-[56px]
    bg-gray-900
    text-gray-300
    z-40
    md:left-60
  "
>

    <UserFooter />
  </footer>

</div>



    )
}
