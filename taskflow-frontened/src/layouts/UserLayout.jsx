import React from 'react'
import { Outlet } from 'react-router-dom'
import UserHeader from '../component/user/UserHeader'
import UserFooter from '../component/user/UserFooter'
import UserSidebar from '../component/user/UserSidebar'

export default function UserLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header */}
            <UserHeader />

            {/* Body */}
            <div className="flex flex-1 overflow-hidden">
                {/* Sidebar */}
                <aside className="w-60 bg-white border-r border-gray-200 hidden md:block">
                    <UserSidebar />
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto">
                    <Outlet />
                </main>
            </div>

            {/* Footer */}
            <UserFooter />
        </div>

    )
}
